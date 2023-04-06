import React from "react";
import HeadingThree from "../typography/headings/HeadingThree";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <HeadingThree>E-post@adresse.com</HeadingThree>
    </div>
  );
};

export default Footer;
