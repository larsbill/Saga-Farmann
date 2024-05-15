import type { ReactElement } from "react";
import Head from "next/head";
import Hero from "@/components/hero/Hero";
import GridImagesAndText from "@/components/gridImagesAndText/GridImagesAndText";
import styles from "./home.module.css";
import LightLayout from "@/components/layout/LightLayout";
import API_ENDPOINTS from "@/endpoints/endpoints";
import { GridSections } from "@/components/gridImagesAndText/interfaces";
import { HeroSection } from "@/components/hero/interfaces";
import SponsorUsSection from "@/components/sponsorUsSection/SponsorUsSection";
import { SponsorUsSectionInterface } from "@/components/sponsorUsSection/interfaces";
import { sponsorUsDataStructure } from "@/helpers/sponsorUsDataStructure";
import { LatestNewsHomeProps } from "@/components/latestNews/latestNewsInterfaces";
import { gridSectionDataStructure } from "@/helpers/gridSectionDataStructure";
import { stagesDataStructure } from "@/helpers/stagesDataStructure";
import WaveRedBrown from "@/components/waves/wavesLargeScreen/WaveRedBrown";

export interface HomeProps {
  gridSection: GridSections;
  heroSection: HeroSection;
  sponsorUsSection: SponsorUsSectionInterface;
  latestNews: LatestNewsHomeProps;
}

const Home = ({ gridSection, sponsorUsSection }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Saga Farmann home</title>
        <meta
          name="description"
          content="Saga Farman follow the vikings - home page"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className={styles["grid-wrapper"]}>
        <GridImagesAndText gridContent={gridSection} />
      </div>
      <div className={styles["map-container"]}>
        <div className={styles["map-wave-wrapper"]}>
          <WaveRedBrown red />
        </div>
        <iframe
          src="https://grunner.no/2024/iframe.html"
          title="Saga Farmann Map"
          width="100%"
          height="1000"
        ></iframe>
      </div>
      <SponsorUsSection data={sponsorUsSection} />
    </>
  );
};

export async function getStaticProps() {
  const [resStages, resHomeData, resSponsorUs, resCrews] = await Promise.all([
    fetch(API_ENDPOINTS.stages),
    fetch(API_ENDPOINTS.page(128)),
    fetch(API_ENDPOINTS.page(222)),
    fetch(API_ENDPOINTS.crewMembers),
  ]);

  const [stages, homeData, sponsorUs] = await Promise.all([
    resStages.json(),
    resHomeData.json(),
    resSponsorUs.json(),
    resCrews.json(),
  ]);

  const newStages = stagesDataStructure(stages);

  const { grid_section } = homeData.acf;

  const gridSection = gridSectionDataStructure(grid_section);

  const sponsorUsSection = sponsorUsDataStructure(sponsorUs.acf);

  const stagesMapProps = {
    stages: newStages,
  };

  return {
    props: {
      stagesMapProps,
      gridSection,
      sponsorUsSection,
    },
  };
}

Home.getLayout = (page: ReactElement) => {
  return <LightLayout>{page}</LightLayout>;
};

export default Home;
