import Link from 'next/link';
import Head from 'next/head';
import fs from 'fs';
import styles from '../styles/Home.module.css';
import { Card } from 'react-bootstrap';

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
        {
          slugs.map(slug => {
            return (
              <Link key={slug} href='/anime/[slug]' as={'/anime/' + slug}>
                <a>
                  <Card
                    bg='primary'
                    style={{
                      width: '18rem'
                    }}
                  > {
                      /* the idea is to show these background cards as in /images/{slug}.jpg instead of 'primary',
                      
                      ---and on hover, change the whole site's background accordingly and make the background
                      card transparent--- */
                    }
                    <Card.Body>
                      <Card.Title style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: '32px'
                      }}>
                        {slug}
                      </Card.Title>
                    </Card.Body>
                  </Card>
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
      slugs: files.map(filename => filename.replace('.md', ''))
    }
  };
}
