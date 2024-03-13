import { FunctionComponent } from "react";
import styles from "./FrameComponent8.module.css";

const FrameComponent8: FunctionComponent = () => {
  return (
    <section className={styles.instructionsInner}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.campaignSettingsParent}>
            <div className={styles.campaignSettings}>Campaign Settings</div>
            <div className={styles.rectangleWrapper}>
              <div className={styles.frameChild} />
            </div>
          </div>
        </div>
        <div className={styles.campaignSettingsRectangle}>
          <div className={styles.campaignSettingsRectangleChild} />
          <img
            className={styles.image25Icon}
            loading="lazy"
            alt=""
            src="/image-25@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
