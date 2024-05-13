import styles from "./CardSkeleton.module.css";
const CardSkeleton = () => {
  return (
    <div className={styles["skeleton-wrapper"]}>
      <div className={styles["s-container"]}>
        <div className={styles["s-center-container"]}>
          <div className={styles["s-image"]}></div>
          <div className={styles["s-content-container"]}>
            <div className={styles["s-header"]}></div>
            <div className={styles["s-text"]}></div>
            <div className={styles["s-text"]}></div>
            <div className={styles["s-text"]}></div>
          </div>
        </div>
      </div>
      <div className={styles["s-container"]}>
        <div className={styles["s-center-container"]}>
          <div className={styles["s-image"]}></div>
          <div className={styles["s-content-container"]}>
            <div className={styles["s-header"]}></div>
            <div className={styles["s-text"]}></div>
            <div className={styles["s-text"]}></div>
            <div className={styles["s-text"]}></div>
          </div>
        </div>
      </div>
      <div className={styles["s-container"]}>
        <div className={styles["s-center-container"]}>
          <div className={styles["s-image"]}></div>
          <div className={styles["s-content-container"]}>
            <div className={styles["s-header"]}></div>
            <div className={styles["s-text"]}></div>
            <div className={styles["s-text"]}></div>
            <div className={styles["s-text"]}></div>
          </div>
        </div>
      </div>
      <div className={styles["s-container"]}>
        <div className={styles["s-center-container"]}>
          <div className={styles["s-image"]}></div>
          <div className={styles["s-content-container"]}>
            <div className={styles["s-header"]}></div>
            <div className={styles["s-text"]}></div>
            <div className={styles["s-text"]}></div>
            <div className={styles["s-text"]}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardSkeleton;
