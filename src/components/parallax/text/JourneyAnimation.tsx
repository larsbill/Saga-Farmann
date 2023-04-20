import React, { useState, useRef, useEffect } from "react";
import styles from "./JourneyAnimation.module.css";
import Image from "next/image";
import ParagraphsBig from "@/components/typography/paragraphs/ParagraphsBig";
import HeadingTwo from "@/components/typography/headings/HeadingTwo";
import { JourneyComponentProps } from "../interfaces";

const JourneyAnimation = ({ data, i }: JourneyComponentProps) => {
  const [imageIsVisible, setImageIsVisible] = useState<boolean>(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const imageAnimationRef = useRef<HTMLDivElement>(null);

  console.log(imageIsVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setImageIsVisible(entry.isIntersecting);
        if (entry.isIntersecting === true) {
          setAnimationTriggered(true);
        }
      },
      {
        threshold: 0.6,
      }
    );
    observer.observe(imageAnimationRef.current!);
  }, []);

  return (
    <div
      ref={imageAnimationRef}
      className={`${styles["journey-slide-wrapper"]}`}
    >
      <div
        className={`${styles["image-container"]}  ${
          imageIsVisible || animationTriggered ? styles["show"] : styles[""]
        }`}
      >
        <Image
          className={styles["image"]}
          width={960}
          height={640}
          src={
            "https://dev.sagafarmann.com/wp/wp-content/uploads/website-core-images/DJI_0858.jpg"
          }
          alt="Journey image"
        ></Image>
      </div>
      <div
        className={`${styles["journey-text-container"]} ${
          imageIsVisible || animationTriggered ? styles["show"] : styles[""]
        }`}
      >
        {data.acf.stage.map((stage) => (
          <>
            <div
              className={`${styles["heading"]}  ${
                imageIsVisible || animationTriggered
                  ? styles["show"]
                  : styles[""]
              }`}
            >
              <HeadingTwo>{stage.stage_heading}</HeadingTwo>
            </div>
            {stage.stage_text_area.map((text) => (
              <div
                className={`${styles["text"]}  ${
                  imageIsVisible || animationTriggered
                    ? styles["show"]
                    : styles[""]
                }`}
              >
                <ParagraphsBig>{text.stage_text}</ParagraphsBig>
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export default JourneyAnimation;
