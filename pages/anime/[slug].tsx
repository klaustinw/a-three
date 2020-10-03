import React from 'react';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import styles from '../../styles/slug_anime.module.css';
import Navbar from "../../components/Navbar";
import { GetStaticPaths, GetStaticProps } from 'next';

export default function Post({ data }) {
    return <>
        <Head>
            <title>{data.title} | A3</title>
            <meta
                title="description"
                name="description"
                content={data.description}
            />
        </Head>
        <Navbar />
        <div className={styles.container}>
            <div className="title">
                {data.title}
            </div>
        </div>
    </>;
};

export const getStaticPaths: GetStaticPaths = async () => {
    const files = fs.readdirSync('posts');

    return {
        paths: files.map(filename => ({
            params: {
                slug: filename.replace('.json', '')
            }
        })),
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
    const data = JSON.parse(fs.readFileSync(path.join('posts', slug + '.json'), 'utf8'));

    return {
        props: {
            data
        }
    };
};
