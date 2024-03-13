import { FunctionComponent } from "react";
import styles from "./AsEasyFrame.module.css";

const AsEasyFrame: FunctionComponent = () => {
  return (
    <section className={styles.asEasyFrame}>
      <div className={styles.settingUpFrame}>
        <div className={styles.sellsideTabFrame}>
          <div className={styles.buysideTabFrame}>
            <div className={styles.imageFrame}>
              <div className={styles.setupInstructionsText}>
                <div className={styles.setupInstructions}>
                  Setup Instructions
                </div>
                <div className={styles.campaignSettingsRectangle}>
                  <div className={styles.pageSubtitle}>
                    Setup and launch in minutes
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.asEasyAs}>As Easy as 1-2-3</div>
          </div>
        </div>
        <div className={styles.learnMoreFrame}>
          <div className={styles.settingUpAContainer}>
            <p className={styles.settingUpA}>
              Setting up a campaign is as simple as uploading basic data via an
              Excel file
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.theProvidedExcel}>
              The provided Excel input file template has 3 tabs. Each of them is
              described below
            </p>
          </div>
        </div>
        <div className={styles.buysidetabframe}>
          <div className={styles.homeFrame}>
            <div className={styles.sellSideTab}>Sell-side Tab</div>
            <div className={styles.homeFrameInner}>
              <div className={styles.frameChild} />
            </div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.frameItem} />
            <img
              className={styles.image23Icon}
              loading="lazy"
              alt=""
              src="/image-23@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AsEasyFrame;
