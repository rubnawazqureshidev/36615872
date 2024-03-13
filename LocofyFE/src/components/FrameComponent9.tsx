import { FunctionComponent } from "react";
import styles from "./FrameComponent9.module.css";

const FrameComponent9: FunctionComponent = () => {
  return (
    <section className={styles.instructionsInner}>
      <div className={styles.frameParent}>
        <div className={styles.buySideTabParent}>
          <div className={styles.buySideTab}>Buy-side Tab</div>
          <div className={styles.rectangleWrapper}>
            <div className={styles.frameChild} />
          </div>
        </div>
        <div className={styles.image24Wrapper}>
          <img
            className={styles.image24Icon}
            loading="lazy"
            alt=""
            src="/image-24@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent9;
