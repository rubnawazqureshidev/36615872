import { FunctionComponent } from "react";
import styles from "./SecondaryButton.module.css";

const SecondaryButton: FunctionComponent = () => {
  return (
    <section className={styles.secondaryButton}>
      <div className={styles.textInput}>
        <div className={styles.label}>
          <h1 className={styles.callerFeedback}>Caller Feedback</h1>
          <div className={styles.pageSubtitleWrapper}>
            <div className={styles.pageSubtitle}>
              Setup and launch in minutes
            </div>
          </div>
        </div>
        <div className={styles.textWrapper}>
          <div className={styles.text}>
            <div className={styles.copyrightsFrame}>
              <h1 className={styles.instructions}>Instructions</h1>
            </div>
            <div className={styles.thisDashboardProvidesContainer}>
              <p
                className={styles.thisDashboardProvides}
              >{`This dashboard provides detailed analysis of Caller's performance. `}</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.itShowsPerformance}>
                It shows performance on each suggested step of the Calling
                Script
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondaryButton;
