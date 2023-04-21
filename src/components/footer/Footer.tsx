import React from "react";
import styles from "./Footer.module.css";
import WaveDarkHeader from "../waves/wavesLargeScreen/WaveDarkHeader";
import WaveDarkHeaderSmall from "../waves/wavesSmallScreen/WaveDarkHeaderSmall";
import Contact from "./Contact";
import FooterLinks from "./FooterLinks";
import SosialMediaLinks from "./SosialMediaLinks";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <div>
      <div className={styles["wrapper-wood-image"]}>
        <div className={styles["wave-overlay"]}>
          <WaveDarkHeaderSmall />
          <WaveDarkHeader />
        </div>
      </div>

      <div className={styles.container}>
        <Contact />
        <FooterLinks />
        <SosialMediaLinks />
        <div className={styles["grey-line"]}></div>
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
