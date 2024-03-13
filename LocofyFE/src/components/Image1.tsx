import { FunctionComponent } from "react";
import styles from "./Image1.module.css";

export type Image1Type = {
  image?: string;
};

const Image1: FunctionComponent<Image1Type> = ({ image }) => {
  return (
    <div className={styles.image}>
      <img className={styles.imageIcon} alt="" src={image} />
      <button className={styles.tag}>
        <b className={styles.marketing}>Marketing</b>
      </button>
      <button className={styles.tag1}>
        <b className={styles.analysis}>Analysis</b>
      </button>
    </div>
  );
};

export default Image1;
