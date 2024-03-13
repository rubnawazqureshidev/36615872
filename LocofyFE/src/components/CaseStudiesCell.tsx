import { FunctionComponent } from "react";
import CopyrightLineNode from "./CopyrightLineNode";
import styles from "./CaseStudiesCell.module.css";

const CaseStudiesCell: FunctionComponent = () => {
  return (
    <section className={styles.caseStudiesCell}>
      <div className={styles.caseStudiesCellInner}>
        <CopyrightLineNode />
      </div>
      <div className={styles.line} />
    </section>
  );
};

export default CaseStudiesCell;
