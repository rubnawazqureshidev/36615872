import { FunctionComponent } from "react";
import CopyrightLineNode from "./CopyrightLineNode";
import styles from "./AppDownloadNode.module.css";

const AppDownloadNode: FunctionComponent = () => {
  return (
    <section className={styles.appDownloadNode}>
      <CopyrightLineNode />
    </section>
  );
};

export default AppDownloadNode;
