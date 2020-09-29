import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import marked from 'marked';

export default function Post({ htmlString, data }) {
    return <>
        <Head>
            <title> {data.title} </title>
            <meta
                title="description"
                name="description"
                content={data.description}
            />
        </Head>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </>;
};

export const getStaticPaths = async () => {
    const files = fs.readdirSync('posts');

    return {
        paths: files.map(filename => ({
            params: {
                slug: filename.replace('.md', '')
            }
        })),
        fallback: false
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const markdown_metadata = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8').toString();
    const { content, data } = matter(markdown_metadata);
    const htmlString = marked(content);

    return {
        props: {
            htmlString,
            data
        }
    };
};
