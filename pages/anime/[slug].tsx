import React from "react";
import fs from "fs";
import path from "path";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Post({ data }) {
  return (
    <>
      <Head>
        <title>{data.title} | A3</title>
        <meta
          title="description"
          name="description"
          content={data.description}
        />
      </Head>
      <Navbar />
      <div className="container cs-top">
        <h1 className="text-center mb-4 mt-2">{data.title}</h1>
        <div className="row">
          <div className="col-md-8">
            <p>{data.summary}</p>
          </div>
          <div className="col-md-4 text-center">
            <h3>Studio: {data.studio}</h3>
            <img src={`${data.cover}`} alt={`${data.cover}`} height='250px' width='300px' />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h1 className="mt-5">Characters</h1>
          {data.characters.map((character) => {
            return (
              <div key={character.name} className="col-md-12">
                <h2>{character.name}</h2>
                <p>{character.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync("posts");

  return {
    paths: files.map((filename) => ({
      params: {
        slug: filename.replace(".json", ""),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const data = JSON.parse(
    fs.readFileSync(path.join("posts", slug + ".json"), "utf8")
  );

  return {
    props: {
      data,
    },
  };
};
