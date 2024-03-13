import { FunctionComponent } from "react";
import styles from "./Column.module.css";

export type ColumnType = {
  day1?: string;
};

const Column: FunctionComponent<ColumnType> = ({ day1 }) => {
  return (
    <div className={styles.column}>
      <button className={styles.headerCell}>
        <b className={styles.day1}>{day1}</b>
      </button>
      <button className={styles.itemCell}>
        <div className={styles.div}> 1</div>
      </button>
      <div className={styles.itemCell1}>
        <div className={styles.div1}>1</div>
      </div>
      <div className={styles.itemCell2}>
        <div className={styles.div2}>0</div>
      </div>
      <div className={styles.itemCell3}>
        <div className={styles.div3}>0</div>
      </div>
      <div className={styles.itemCell4}>
        <div className={styles.div4}>2</div>
      </div>
      <div className={styles.itemCell5}>
        <div className={styles.div5}>0</div>
      </div>
      <div className={styles.itemCell6}>
        <div className={styles.div6}>
          <p className={styles.p}>0</p>
        </div>
      </div>
      <div className={styles.itemCell7}>
        <div className={styles.div7}>2</div>
      </div>
    </div>
  );
};

export default Column;
