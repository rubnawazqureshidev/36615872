import { FunctionComponent } from "react";
import styles from "./Component.module.css";

const Component: FunctionComponent = () => {
  return (
    <div className={styles.component2}>
      <div className={styles.image26Parent}>
        <img
          className={styles.image26Icon}
          loading="lazy"
          alt=""
          src="/image-26@2x.png"
        />
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <h1 className={styles.uploadDocuments}>Upload Documents</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component;
