import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <section className={styles.callerPerformanceFrameWrapper}>
      <div className={styles.callerPerformanceFrame}>
        <h1 className={styles.callerPerformance}>Caller Performance</h1>
        <div className={styles.summarytable}>
          <div className={styles.column}>
            <div className={styles.headerCell}>
              <b className={styles.category}>Category</b>
            </div>
            <div className={styles.itemCell}>
              <b className={styles.lastCallScore}>Last Call Score</b>
            </div>
            <div className={styles.itemCell1}>
              <b className={styles.todaysCallScore}>Today’s Call Score (avg)</b>
            </div>
            <div className={styles.itemCell2}>
              <b className={styles.averageCampaignScore}>
                Average Campaign Score
              </b>
            </div>
          </div>
          <div className={styles.column1}>
            <button className={styles.headerCell1}>
              <b className={styles.scoreOutOf}>Score (out of 16)</b>
            </button>
            <div className={styles.itemCell3}>
              <div className={styles.div}>15</div>
            </div>
            <button className={styles.itemCell4}>
              <div className={styles.div1}>{`11 `}</div>
            </button>
            <div className={styles.itemCell5}>
              <div className={styles.div2}>14</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
