import ParagraphsSmall from "@/components/typography/paragraphs/paragraphsSmall";
import Image from "next/image";
import React from "react";
import styles from "./modal.module.css";
import { IoCloseSharp } from "react-icons/io5";
import ModalLinks from "./modalLinks/modalLinks";

interface ModalProps {
  onCloseClick: () => void;
  title: string;
  text: string;
}

const Modal = ({ onCloseClick, title, text }: ModalProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles["text-container"]}>
        <div className={styles["close-btn-container"]} onClick={onCloseClick}>
          <IoCloseSharp size={40} className={styles["modal-close-icon"]} />
        </div>
        <h2 className={styles["modal-heading"]}>{title}</h2>
        <div className={styles["paragraph-container"]}>
          <p className={styles["modal-paragraph"]}>{text}</p>
        </div>
        <ModalLinks />
      </div>
      <div className={styles["image-container"]}>
        <Image
          src="/assets/destination.jpg"
          alt="test"
          width={1000}
          height={400}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Modal;
