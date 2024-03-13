import { FunctionComponent } from "react";
import styles from "./LineSeparator.module.css";

const LineSeparator: FunctionComponent = () => {
  return (
    <div className={styles.lineSeparator}>
      <div className={styles.turigmaaiHeaderFrame}>
        <div className={styles.frequentlyAskedQuestionsTex}>
          <div className={styles.rectangleFrameProspectError}>
            <h1 className={styles.aiCoPilot}>AI Co-pilot</h1>
            <div className={styles.getAnswerButton}>
              <div className={styles.turigmaaiLogo} />
            </div>
          </div>
          <div className={styles.utilityPageParent}>
            <button className={styles.button}>
              <b className={styles.getAnswer}>Get Answer</b>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.line} />
    </div>
  );
};

export default LineSeparator;
