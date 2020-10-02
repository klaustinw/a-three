import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import marked from 'marked';
import styles from '../../styles/slug_anime.module.css';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';

export default function Post({ htmlString, data }) {
    return <>
        <Head>
            <title>{data.title} | A3</title>
            <meta
                title="description"
                name="description"
                content={data.description}
            />
        </Head>
        <Navbar className={styles.navbar} expand="lg">
            <Navbar.Brand style={{ paddingLeft: '10px' }}>
                <Link href="/">
                    <a className={styles.title}>A3</a>
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {/* <Nav className="mr-auto">
                    <Nav.Link className="text-white" href="#home">Home</Nav.Link>
                    <Nav.Link className="text-white" href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
        </Navbar>
        <div className={styles.container} dangerouslySetInnerHTML={{ __html: htmlString }} />
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
