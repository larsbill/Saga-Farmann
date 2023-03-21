import type { ReactElement } from "react";
import Head from "next/head";
import LatestNews from "@/components/latestNews/latestNews";
import sliderData from "@/components/latestNews/latestNewsSlider/sliderData";
import Hero from "@/components/hero/Hero";
import GridImagesAndText from "@/components/gridImagesAndText/gridImagesAndText";
import styles from "./home.module.css";
import StagesMap from "@/components/mapbox/stagesMap";
import { SingleStageProps } from "@/components/mapbox/stagesMap";
import LightLayout from "@/components/layout/LightLayout";
import LivestreamVideo from "@/components/livestream/livestreamVideo";
import API_ENDPOINTS from "@/endpoints/endpoints";
import { GridSections } from "@/components/gridImagesAndText/interfaces";
import { SingleStageApiProps } from "@/components/mapbox/interfaces";
import HeadingTwo from "@/components/typography/headings/headingTwo";

export interface HomeProps {
  stages: SingleStageProps[];
  homeData: GridSections;
  gridSection: any;
  id: number;
}

const Home = ({ stages, gridSection, id }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Saga Farmann home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className={styles["grid-wrapper"]}>
        <GridImagesAndText gridContent={gridSection} />
      </div>
      <StagesMap stages={stages} />
      <div className={styles["livestream-wrapper"]}>
        <div className={styles["heading-wrapper"]}>
        <HeadingTwo dark children={"Livestream"} />
        </div>
        <LivestreamVideo />
      </div>
      <LatestNews
        postHeading="Latest News and  posts"
        postText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut."
        posts={sliderData}
      />
    </>
  );
};

export async function getStaticProps() {
  const [resStages, resHomeData] = await Promise.all([
    fetch(API_ENDPOINTS.stages),
    fetch(API_ENDPOINTS.page(128)),
  ]);

  const [stages, homeData] = await Promise.all([
    resStages.json(),
    resHomeData.json(),
  ]);

  const newStages = stages.map((stage: SingleStageApiProps) => {
    return {
      id: stage.id,
      title: stage.title.rendered,
      coordinates: {
        long: stage.acf.coordinates.long,
        lat: stage.acf.coordinates.lat,
      },
      stage_number: stage.acf.stage_number,
      stage_text_area: stage.acf.stage[0].stage_text_area,
      current_destination: stage.acf.current_destination,
    };
  });

  const { grid_section } = homeData.acf;
  const { id } = homeData;

  return {
    props: {
      stages: newStages,
      homeData,
      gridSection: grid_section,
      id,
    },
  };
}

Home.getLayout = (page: ReactElement) => {
  return <LightLayout>{page}</LightLayout>;
};

export default Home;
