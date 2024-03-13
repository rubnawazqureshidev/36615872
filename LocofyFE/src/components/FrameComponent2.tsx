import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  const onFeatureClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='heroHeaderContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={styles.downloadButtonWrapper}>
      <div className={styles.downloadButton}>
        <div className={styles.copyrightFrame}>
          <div
            className={styles.presalesaiFeaturesHeader}
            data-scroll-to="preSalesAIFeaturesHeaderContainer"
          >
            <div className={styles.featureWrapper}>
              <button className={styles.feature} onClick={onFeatureClick}>
                <b className={styles.goToThe}>Go To The Top</b>
              </button>
            </div>
            <h1 className={styles.disruptingPresalesWithContainer}>
              <p className={styles.disruptingPresales}>Disrupting PreSales</p>
              <p className={styles.withGenerativeAi}>
                with Generative AI Magic
              </p>
            </h1>
          </div>
        </div>
        <div className={styles.imageFrameParent}>
          <div className={styles.imageFrame}>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.passwordParent}>
                  <div className={styles.password}>
                    <div className={styles.rectangle} />
                    <div className={styles.password1}>Password</div>
                    <div className={styles.frameGroup}>
                      <div className={styles.marketingTagAnalysisWrapper}>
                        <div className={styles.marketingTagAnalysis}>
                          <div className={styles.rectangle1} />
                          <div className={styles.div}>**********</div>
                        </div>
                      </div>
                      <div className={styles.confirmPassword}>
                        Confirm Password
                      </div>
                    </div>
                    <div className={styles.passwordInner}>
                      <div className={styles.downloadButtonParent}>
                        <div className={styles.downloadButton1} />
                        <div className={styles.div1}>**********</div>
                      </div>
                    </div>
                    <button className={styles.rectangleParent}>
                      <div className={styles.rectangle2} />
                      <b className={styles.login}>LogIn</b>
                    </button>
                    <div className={styles.strokeParent}>
                      <div className={styles.stroke} />
                      <img
                        className={styles.dashboardIcon}
                        loading="lazy"
                        alt=""
                        src="/dashboard.svg"
                      />
                      <div className={styles.menuBar}>
                        <div className={styles.menuBarChild} />
                        <div className={styles.menuBarItem} />
                        <div className={styles.menuBarInner} />
                        <div className={styles.rectangleDiv} />
                        <div className={styles.menuBarChild1} />
                        <div className={styles.menuBarChild2} />
                        <div className={styles.menuBarChild3} />
                        <div className={styles.menuBarChild4} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.aiForPresalesAutomationParent}>
                    <h1 className={styles.aiForPresales}>
                      AI For PreSales Automation
                    </h1>
                    <h1 className={styles.hyperCustomizedCaller}>
                      Hyper customized Caller Scripts with your top sales
                      propositions customized for each prospect in your call
                      list. Real-time Sales Signal alerts based on prospect
                      activities.
                    </h1>
                  </div>
                </div>
              </div>
              <div className={styles.wrapperIconParent}>
                <div className={styles.wrapperIcon}>
                  <img
                    className={styles.icon}
                    loading="lazy"
                    alt=""
                    src="/icon.svg"
                  />
                </div>
                <h1 className={styles.advancedAnalytics}>Advanced Analytics</h1>
                <h1
                  className={styles.realTimeFeedbackTo}
                >{`Real-time feedback to Callers to improve micro-aspects of each call. Aggregated feedback to Managers to pinpoint improvements & support.`}</h1>
                <h2 className={styles.learnMore}>Learn More</h2>
              </div>
            </div>
            <h2 className={styles.learnMore1}>Learn More</h2>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.topTipsTextParent}>
              <div className={styles.topTipsText}>
                <div className={styles.wrapperIcon1}>
                  <img className={styles.icon1} alt="" src="/icon-1.svg" />
                </div>
              </div>
              <div className={styles.headerFrame}>
                <h1 className={styles.unprecedentedBenefits}>
                  Unprecedented Benefits
                </h1>
              </div>
              <h1 className={styles.lowerCampaignTimeContainer}>
                <p className={styles.lowerCampaignTime}>
                  90% lower campaign time
                </p>
                <p className={styles.moreSalesConversion}>
                  30% more sales conversion
                </p>
                <p
                  className={styles.empoweredHappy}
                >{`Empowered & happy callers`}</p>
              </h1>
              <div className={styles.headerFrame1}>
                <h2 className={styles.learnMore2}>Learn More</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
