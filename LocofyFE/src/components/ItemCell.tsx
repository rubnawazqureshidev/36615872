import { FunctionComponent } from "react";
import Column from "./Column";
import styles from "./ItemCell.module.css";

const ItemCell: FunctionComponent = () => {
  return (
    <section className={styles.itemCell}>
      <div className={styles.lastCallAnalyticsFrame}>
        <h2 className={styles.caller1Performance}>
          Caller 1 performance by category
        </h2>
        <form className={styles.lastCallAnalyticsTable}>
          <div className={styles.column}>
            <div className={styles.headerCell}>
              <b className={styles.category}>Category</b>
            </div>
            <div className={styles.itemCell1}>
              <b className={styles.iceBreaker}>Ice Breaker</b>
            </div>
            <div className={styles.itemCell2}>
              <b className={styles.warmIntro}>Warm Intro</b>
            </div>
            <div className={styles.itemCell3}>
              <b className={styles.selfIntro}>Self Intro</b>
            </div>
            <button className={styles.itemCell4}>
              <b className={styles.purposeOfCall}>Purpose of Call</b>
            </button>
            <div className={styles.itemCell5}>
              <b className={styles.prospectChallenge}>Prospect Challenge</b>
            </div>
            <div className={styles.itemCell6}>
              <b className={styles.prospectCxoReference}>
                Prospect CXO Reference
              </b>
            </div>
            <div className={styles.itemCell7}>
              <b className={styles.keyBenefits}>Key Benefits</b>
            </div>
            <div className={styles.itemCell8}>
              <b className={styles.caseStudies}>Case Studies</b>
            </div>
          </div>
          <Column day1="Day 1" />
          <Column day1="Day 2" />
          <Column day1="Day 3" />
          <Column day1="Day 4" />
          <Column day1="Day 5" />
          <Column day1="Day 6" />
          <Column day1="Day 7" />
          <Column day1="Day 8" />
        </form>
      </div>
    </section>
  );
};

export default ItemCell;
