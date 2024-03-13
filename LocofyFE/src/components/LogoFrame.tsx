import { FunctionComponent } from "react";
import styles from "./LogoFrame.module.css";

const LogoFrame: FunctionComponent = () => {
  return (
    <section className={styles.logoFrame}>
      <div className={styles.turigmaaiFrame}>
        <div className={styles.pagesFrame}>
          <div className={styles.frameTurigmaaiLogo}>
            <div className={styles.freeTextQueryArea}>
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
        <div className={styles.integratedCampaignScoreBy}>
          <h2 className={styles.averageCampaignScore}>
            Average campaign score across categories
          </h2>
          <form className={styles.lastCallAnalyticsTable}>
            <div className={styles.column}>
              <div className={styles.headerCell}>
                <b className={styles.category}>Category</b>
              </div>
              <div className={styles.itemCell}>
                <b className={styles.iceBreaker}>Ice Breaker</b>
              </div>
              <div className={styles.itemCell1}>
                <b className={styles.warmIntro}>Warm Intro</b>
              </div>
              <div className={styles.itemCell2}>
                <b className={styles.selfIntro}>Self Intro</b>
              </div>
              <div className={styles.itemCell3}>
                <b className={styles.purposeOfCall}>Purpose of Call</b>
              </div>
              <div className={styles.itemCell4}>
                <b className={styles.prospectChallenge}>Prospect Challenge</b>
              </div>
              <div className={styles.itemCell5}>
                <b className={styles.prospectCxoReference}>
                  Prospect CXO Reference
                </b>
              </div>
              <div className={styles.itemCell6}>
                <b className={styles.keyBenefits}>Key Benefits</b>
              </div>
              <div className={styles.itemCell7}>
                <b className={styles.caseStudies}>Case Studies</b>
              </div>
            </div>
            <div className={styles.column1}>
              <button className={styles.headerCell1}>
                <b className={styles.averageScore}>Average Score</b>
              </button>
              <button className={styles.itemCell8}>
                <div className={styles.freeQueryButton}>32.9</div>
              </button>
              <div className={styles.itemCell9}>
                <div className={styles.turigmaaiFrame1}>
                  <p className={styles.p}>34.15</p>
                </div>
              </div>
              <div className={styles.itemCell10}>
                <div className={styles.homeFrame}>34.15</div>
              </div>
              <div className={styles.itemCell11}>
                <div className={styles.integrationsFrame}>28.83</div>
              </div>
              <div className={styles.itemCell12}>
                <div className={styles.featuresFrame}>39.04</div>
              </div>
              <div className={styles.itemCell13}>
                <div className={styles.appDownloadFrame}>32.91</div>
              </div>
              <div className={styles.itemCell14}>
                <div className={styles.copyrightFrame}>
                  <p className={styles.p1}>33.33</p>
                </div>
              </div>
              <button className={styles.itemCell15}>
                <div className={styles.campaignFrame}>35.39</div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LogoFrame;
