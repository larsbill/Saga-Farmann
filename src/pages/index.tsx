import Head from "next/head";
import Layout from "@/components/navbar/layout";
import LatestNews from "@/components/LatestNews/LatestNews";

export default function Home() {
  return (
    <>
      <Layout />

      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Saga</h1>
      </main>
    </>
  );
}
