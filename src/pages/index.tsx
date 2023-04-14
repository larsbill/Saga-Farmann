import type { ReactElement } from "react";
import Head from "next/head";
import LatestNews from "@/components/latestNews/LatestNews";
import Hero from "@/components/hero/Hero";
import GridImagesAndText from "@/components/gridImagesAndText/GridImagesAndText";
import styles from "./home.module.css";
import StagesMap from "@/components/mapbox/StagesMap";
import LightLayout from "@/components/layout/LightLayout";
import LivestreamVideo from "@/components/livestream/LivestreamVideo";
import API_ENDPOINTS from "@/endpoints/endpoints";
import { GridSections } from "@/components/gridImagesAndText/interfaces";
import {
  SingleStageApiProps,
  SingleStageProps,
  SingleDestinationApiProps,
} from "@/components/mapbox/interfaces";
import { HeroSection } from "@/components/hero/interfaces";
import SponsorUsSection from "@/components/sponsorUsSection/SponsorUsSection";
import { SponsorUsSectionInterface } from "@/components/sponsorUsSection/interfaces";
import { sponsorUsDataStructure } from "@/helpers/sponsorUsDataStructure";
import { LatestNewsHomeProps } from "@/components/latestNews/latestNewsInterfaces";

export interface HomeProps {
  stages: SingleStageProps[];
  gridSection: GridSections;
  heroSection: HeroSection;
  sponsorUsSection: SponsorUsSectionInterface;
  destinations: SingleStageProps[];
  latestNews: LatestNewsHomeProps;
}

const Home = ({
  stages,
  destinations,
  gridSection,
  sponsorUsSection,
  heroSection,
  latestNews,
}: HomeProps) => {
  return (
    <>
      <Head>
        <title>Saga Farmann home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero data={heroSection} />
      <div className={styles["grid-wrapper"]}>
        <GridImagesAndText gridContent={gridSection} />
      </div>
      <div className={styles["map-container"]}>
        <StagesMap destinations={destinations} stages={stages} />
      </div>
      <div className={styles["livestream-wrapper"]}>
        <LivestreamVideo />
      </div>
      <LatestNews
        postHeading={latestNews.latestNewsText.latest_news_heading}
        postText={latestNews.latestNewsText.latest_news_short_description}
        posts={latestNews.posts}
      />
      <SponsorUsSection data={sponsorUsSection} />
    </>
  );
};

export async function getStaticProps() {
  const [resStages, resHomeData, resDestinations, resSponsorUs, resBlogPosts] =
    await Promise.all([
      fetch(API_ENDPOINTS.stages),
      fetch(API_ENDPOINTS.page(128)),
      fetch(API_ENDPOINTS.destinations),
      fetch(API_ENDPOINTS.page(222)),
      fetch(API_ENDPOINTS.blogPosts),
    ]);

  const [stages, homeData, destinations, sponsorUs, blogPosts] =
    await Promise.all([
      resStages.json(),
      resHomeData.json(),
      resDestinations.json(),
      resSponsorUs.json(),
      resBlogPosts.json(),
    ]);

  const newStages = stages.map((stage: SingleStageApiProps) => {
    return {
      id: stage.id,
      title: stage.title.rendered,
      coordinates: {
        long: stage.acf.coordinates.long,
        lat: stage.acf.coordinates.lat,
      },
      number: stage.acf.stage_number,
      text_area: stage.acf.stage[0].stage_text_area[0].stage_text,
      current: stage.acf.current_destination,
      next_year: stage.acf.next_year,
    };
  });

  const newDestinations = destinations.map(
    (destination: SingleDestinationApiProps) => {
      return {
        id: destination.id,
        title: destination.title.rendered,
        coordinates: {
          long: destination.acf.destination_coordinates.destination_long,
          lat: destination.acf.destination_coordinates.destination_lat,
        },
        number: destination.acf.destination_number,
        text_area: destination.acf.destination_text_fields[0].destination_text,
        next_year: destination.acf.next_year_destination,
      };
    }
  );

  const { grid_section, hero_section, latest_news } = homeData.acf;
  const sponsorUsSection = sponsorUs.acf;

  const heroSection = {
    hero_background_image: hero_section.hero_background_image.url,
    hero_text: hero_section.hero_text,
  };

  const gridSection = {
    first_block: grid_section.first_block,
    second_block: grid_section.second_block.url,
    third_block: grid_section.third_block,
    fourth_block: grid_section.fourth_block,
    fifth_block: grid_section.fifth_block.url,
    sixth_block: grid_section.sixth_block.url,
    seventh_block: grid_section.seventh_block,
    eighth_block: grid_section.eighth_block,
  };

  const latestNews = {
    latestNewsText: latest_news,
    posts: blogPosts,
  };

  const sponsorUsData = sponsorUsDataStructure(sponsorUsSection);

  return {
    props: {
      stages: newStages,
      homeData,
      heroSection,
      gridSection,
      destinations: newDestinations,
      sponsorUsSection: sponsorUsData,
      latestNews,
    },
    revalidate: 1,
  };
}

Home.getLayout = (page: ReactElement) => {
  return <LightLayout>{page}</LightLayout>;
};

export default Home;
