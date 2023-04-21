import React from "react";
import ParagraphsBig from "../typography/paragraphs/ParagraphsBig";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

import styles from "./Footer.module.css";
import ParagraphsSmall from "../typography/paragraphs/ParagraphsSmall";

const Contact = () => {
  return (
    <div className={styles["container-contact"]}>
      <ParagraphsBig>Contact information</ParagraphsBig>
      <address className={styles["contact-info"]}>
        <FaMapMarkerAlt className={styles["contact-icon"]} size={15} />
        <ParagraphsSmall>Vikingodden Ollebukta 3 3126 Tønsberg</ParagraphsSmall>
      </address>
      <address className={styles["contact-info"]}>
        <FaEnvelope className={styles["contact-icon"]} />
        <a href="kontakt@sagafarmann.no">
          <ParagraphsSmall>kontakt@sagafarmann.no</ParagraphsSmall>
        </a>
      </address>
      <address className={styles["contact-info"]}>
        <FaPhone className={styles["contact-icon"]} size={15} />
        <a href="tel:+123 456 789">
          <ParagraphsSmall>90 90 80 22</ParagraphsSmall>
        </a>
      </address>
    </div>
  );
};

export default Contact;
