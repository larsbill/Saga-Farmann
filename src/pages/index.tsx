import Head from "next/head";
import Header from "@/components/navigation/header/header";
import LatestNews from "@/components/latestNews/LatestNews";
import sliderData from "@/components/latestNews/latestNewsSlider/sliderData";
import HeadingOne from "@/components/typography/headings/headingOne";

export default function Home() {
  return (
    <>
      <Header />
      <Layout />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeadingOne mainHeading>Saga</HeadingOne>
        <LatestNews
          postHeading="Heading"
          postText="Lorem ipsum dolor sit amet consectetur adipisicing"
          posts={sliderData}
        />
      </main>
    </>
  );
}
