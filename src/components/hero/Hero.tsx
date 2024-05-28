import React from "react";
import styles from "./Hero.module.css";
import { HeroSection } from "./interfaces";
import WaveRedBrownTop from "../waves/wavesLargeScreen/WaveRedBrownTop";
import WaveRedBrownSmall from "../waves/wavesSmallScreen/WaveRedBrownSmall";
import HamburgerTransition from "../navigation/hamburger/HamburgerTransition";
import Image from "next/image";
import Link from "next/link";

interface Props {
  data: HeroSection;
}

const Hero = () => {
  return (
    <div className={styles["hero-wrapper"]}>
      <iframe
        className={styles["hero-background"]}
        src="//play.vidyard.com/BfqbdgfNC1xH9xY1U3yG3e/type/background?quality=720p"
      ></iframe>
      <div className={styles["hero-text-wrapper"]}>
        <div className={styles["hero-text-container"]}>
          <h2 className={styles["hero-text"]}>Wanna be a part of our crew?</h2>
          <Link href="/sign-up" className={styles["hero-button"]}>
            Join us
          </Link>
        </div>
      </div>
      <div className={styles["hero-burger-wrapper"]}>
        <HamburgerTransition />
      </div>
      <div className={styles["hero-logo-container"]}>
        <Image
          className={styles["hero-logo"]}
          width={305}
          height={151}
          src={"/Saga_Med_org_page-0001-removebg-preview.png"}
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
