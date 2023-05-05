import React from "react";
import styles from "./Hero.module.css";
import { HeroSection } from "./interfaces";
import WaveRedBrownTop from "../waves/wavesLargeScreen/WaveRedBrownTop";
import WaveRedBrownSmall from "../waves/wavesSmallScreen/WaveRedBrownSmall";
import HamburgerTransition from "../navigation/hamburger/HamburgerTransition";
import Image from "next/image";

interface Props {
  data: HeroSection;
}

const Hero = ({ data }: Props) => {
  return (
    <div className={styles["hero-wrapper"]}>
      {data?.hero_background_image && (
        <iframe
          className={styles["hero-background"]}
          src="//play.vidyard.com/79REgXia3dWEHr8k291aWp/type/background"
        ></iframe>
      )}
      <div className={styles["hero-burger-wrapper"]}>
        <HamburgerTransition />
      </div>
      <div className={styles["hero-text-container"]}>
        <Image
          className={styles["hero-logo"]}
          width={305}
          height={151}
          src={"/Saga Asia_org-ai.png"}
          alt="Saga Farmann logo"
        />
      </div>

      <div className={styles["wave-container"]}>
        <WaveRedBrownTop />
        <WaveRedBrownSmall />
      </div>
    </div>
  );
};

export default Hero;
