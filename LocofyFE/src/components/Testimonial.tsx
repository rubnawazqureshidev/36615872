import { FunctionComponent } from "react";
import styles from "./Testimonial.module.css";

const Testimonial: FunctionComponent = () => {
  return (
    <div className={styles.testimonial}>
      <img className={styles.backgroundIcon} alt="" src="/background.svg" />
      <img
        className={styles.backgroundIcon1}
        alt=""
        src="/background-1@2x.png"
      />
      <div className={styles.logoWrapper}>
        <div className={styles.lineWrapper}>
          <div className={styles.frameWrapper}>
            <button className={styles.testimonial1}>
              <b className={styles.goToThe}>Go To The Top</b>
            </button>
          </div>
          <h1 className={styles.trustedBySales}>Trusted by Sales Leaders.</h1>
        </div>
      </div>
      <div className={styles.guideTexts}>
        <div className={styles.tagAnalysisFrames}>
          <div className={styles.brandImageFrame}>
            <h1 className={styles.h1}>“</h1>
          </div>
          <div className={styles.contactDataFrame}>
            <div className={styles.mailSectionNode}>
              <div className={styles.phonecallButtonNode}>
                <div className={styles.bg} />
                <h1 className={styles.h11}></h1>
              </div>
              <h1 className={styles.outboundPresalesCalling}>
                “Outbound PreSales calling used to be a hated task with a lot of
                manual preparation, frustrating workflows and slow results.
                Turigma.ai has waved a magic wand for us. The power of
                generative AI is unbelievable”
              </h1>
            </div>
            <div className={styles.textFrameWrapper}>
              <div className={styles.textFrame}>
                <div className={styles.bg1} />
                <h1 className={styles.h12}></h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.november}>
          <div className={styles.readMoreLink}>
            <div className={styles.tagMarketing}>
              <img className={styles.imageIcon} alt="" src="/image-1@2x.png" />
            </div>
            <div className={styles.frameInfo}>
              <h1 className={styles.jamesToriff}>James Toriff</h1>
              <div className={styles.lineSeparator}>
                <h1 className={styles.presalesHead}>PreSales Head</h1>
              </div>
            </div>
            <div className={styles.automateReports}>
              <img
                className={styles.starIcon}
                loading="lazy"
                alt=""
                src="/star@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
