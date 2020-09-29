import Link from 'next/link';
import styles from '../styles/Home.module.css';
import fs from 'fs';

export default function Home({ slugs }) {
  return (
    <div className={styles.container}>
      {
        slugs.map(slug => {
          return (
            <Link key={slug} href='/anime/[slug]' as={'/anime/' + slug}>
              <a>
                {slug}
              </a>
            </Link>
          )
        })
      }
    </div>
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
