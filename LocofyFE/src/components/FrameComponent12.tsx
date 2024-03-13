import { FunctionComponent } from "react";
import styles from "./FrameComponent12.module.css";

const FrameComponent12: FunctionComponent = () => {
  return (
    <section className={styles.frameB}>
      <div className={styles.backgroundRectangleParent}>
        <div className={styles.backgroundRectangle}>
          <div className={styles.preSalesAutomationFrame}>
            <h1 className={styles.about}>About</h1>
            <div className={styles.pageTitle}>
              <div className={styles.pageSubtitle}>
                Setup and launch in minutes
              </div>
            </div>
          </div>
        </div>
        <div className={styles.enterpriseAutomationFrame}>
          <div className={styles.learnMoreButton}>
            <div className={styles.turigmaTaglineText}>
              <h1 className={styles.aboutTurigmaai}>About Turigma.ai</h1>
            </div>
            <div className={styles.learnMoreButtonChild} />
          </div>
          <div className={styles.featureFrame}>
            <div className={styles.theWorlds1st}>
              The world’s 1st automated PreSales for ISRs / SDRs and sales
              executives
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent12;
