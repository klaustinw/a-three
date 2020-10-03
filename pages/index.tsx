import Link from 'next/link';
import Head from 'next/head';
import fs from 'fs';
import styles from '../styles/Home.module.css';
import { Button, Jumbotron, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default function Home({ slugs }) {
  return (
    <>
      <Head>
        <title>
          It's All About Anime
        </title>
        <meta
          title='description'
          name='description'
          content='A-3 is a mini blog about anime trivia in hope to replace the eye-tearing Wikia Fandom'
        />
      </Head>
      <div className={styles.container}>
        <Jumbotron className={styles.header}>
          <h1 className="text-white text-align-center">
            Welcome to A3, Anime Wikia
        </h1>
        </Jumbotron>
        {
          slugs.map(slug => {
            return (
              <Link key={slug} href='/anime/[slug]' as={'/anime/' + slug}>
                <a>
                  <Button
                    variant="primary"
                    style={{
                      height: '6rem',
                      width: '18rem',
                      fontSize: '32px',
                      textAlign: 'center',
                      backgroundColor: '#554971',
                      border: 'none',
                      marginBottom: '4vh'
                    }}
                  >
                    {slug.replace('_', ' ')}
                  </Button>
                </a>
              </Link>
            )
          })
        }
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('posts');

  return {
    props: {
      slugs: files.map(filename => filename.replace('.json', ''))
    }
  };
}
