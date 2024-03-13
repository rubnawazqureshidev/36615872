import { FunctionComponent } from "react";
import styles from "./CopyrightLineNode.module.css";

const CopyrightLineNode: FunctionComponent = () => {
  return (
    <div className={styles.copyrightLineNode}>
      <div className={styles.freeTextQuestionFrameParent}>
        <div className={styles.freeTextQuestionFrame}>
          <h1 className={styles.askAnyQuestion}>Ask Any Question</h1>
          <h2 className={styles.enterFreeText}>
            Enter free text question re call analytics:
          </h2>
        </div>
        <textarea className={styles.pagesFrame} rows={13} cols={51} />
      </div>
      <button className={styles.freeQueryButton}>
        <div className={styles.runFreeText}>Run Free Text Query</div>
      </button>
    </div>
  );
};

export default CopyrightLineNode;
