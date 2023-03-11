import React, { ReactNode } from "react";
import styles from "./headings.module.css";

interface HeadingProps {
  children: ReactNode;
  dark?: boolean;
}

const HeadingOne = ({ children, dark = false }: HeadingProps) => {
  const heading = dark;

  return heading ? (
    <h1
      className={`${styles.heading} ${styles["heading-one"]} ${styles["dark"]} `}
    >
      {children}
    </h1>
  ) : (
    <h1
      className={`${styles.heading} ${styles["heading-one"]} ${styles["light"]}`}
    >
      {children}
    </h1>
  );
};

export default HeadingOne;
