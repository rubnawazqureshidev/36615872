import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent10 from "../components/FrameComponent10";
import styles from "./About.module.css";

const About: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCallerDashboardTextClick = useCallback(() => {
    navigate("/callerdashboard");
  }, [navigate]);

  const onCampaignResearchTextClick = useCallback(() => {
    navigate("/campaignresearch");
  }, [navigate]);

  const onCampaignDesignContainerClick = useCallback(() => {
    navigate("/instructions");
  }, [navigate]);

  const onFeatureClick = useCallback(() => {
    navigate("/instructions");
  }, [navigate]);

  return (
    <div className={styles.about}>
      <header className={styles.subtitleFrame}>
        <div className={styles.callerDashboardFrame}>
          <h3 className={styles.turigmaai}>Turigma.ai</h3>
          <nav className={styles.turigmaaiFrame}>
            <nav className={styles.topMenuFrameComponent}>
              <div
                className={styles.callerDashboard}
                onClick={onCallerDashboardTextClick}
              >
                Caller Dashboard
              </div>
              <div className={styles.callerFeedback}>Caller Feedback</div>
              <div className={styles.managerDashboard}>Manager Dashboard</div>
              <div
                className={styles.campaignResearch}
                onClick={onCampaignResearchTextClick}
              >
                Campaign Research
              </div>
            </nav>
          </nav>
        </div>
      </header>
      <FrameComponent12 />
      <section className={styles.automationTurigma}>
        <div className={styles.callingScriptFrame}>
          <div className={styles.enterpriseAutomator}>
            <div className={styles.instructionsFrame}>
              <div className={styles.welcometextText}>
                <div className={styles.frameWelcometextframe}>
                  <h3 className={styles.welcomeToPresalesContainer}>
                    <span>
                      <p className={styles.welcomeToPresalesAiAutomat}>
                        <b>Welcome to PreSales AI Automation</b>
                      </p>
                      <p className={styles.turigmaTheWorlds1stEnter}>
                        <i>
                          Turigma: the world's 1st Enterprise-grade AI platform
                        </i>
                      </p>
                      <p className={styles.blankLine}>&nbsp;</p>
                      <ul className={styles.turigmaaiGeneratesAutomated}>
                        <li className={styles.turigmaaiGeneratesAutomated1}>
                          <span>
                            Turigma.ai generates automated Calling Script
                            customized for each Prospect.Turigma.ai also
                            provides real-time analysis of all calls to provide
                            instant improvement feedback.Turigma.ai helps track
                            overall camapign analytics, giving managers a
                            real-time pulse on progress and improvement
                            strategies
                          </span>
                        </li>
                        <li>
                          <span>
                            Turigma reduces campaign time from months to days.
                            It improves outcomes by 300% or more.Turigma
                            platform is built on 140+ man years and 10+ Million
                            records of proprietary data
                          </span>
                        </li>
                      </ul>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent11 />
          <div className={styles.enterpriseFrame}>
            <div className={styles.builtForBusiness}>
              <div className={styles.automatedBusiness}>
                <h3 className={styles.builtForEnterprisesContainer}>
                  <span>
                    <p className={styles.builtForEnterprises}>
                      <b>Built For Enterprises</b>
                    </p>
                    <p className={styles.blankLine1}>&nbsp;</p>
                    <ul className={styles.turigmaIsrAutomatesEachOf}>
                      <li className={styles.turigmaIsrAutomatesEachOf1}>
                        <span>
                          Turigma-ISR automates each of these steps and provides
                          automation for all key persona's involved:
                        </span>
                      </li>
                      <li className={styles.researchTeamEliminateCostl}>
                        <span>
                          Research Team: eliminate costly time conducting
                          campaign reserach and training
                        </span>
                      </li>
                      <li className={styles.callersPreparedCallingScri}>
                        <span>
                          Callers: Prepared calling scripts customized to each
                          Target. Automated Feedback on each call
                        </span>
                      </li>
                      <li>
                        <span>
                          Management: Campaign analytics, Caller performance
                          analytics, with drill downs to each call, time-trends,
                          areas of improvement etc.
                        </span>
                      </li>
                    </ul>
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.contactFrame}>
        <div className={styles.downloadAppFrame}>
          <div className={styles.learnMoreSection}>
            <div
              className={styles.campaignDesign}
              onClick={onCampaignDesignContainerClick}
            >
              <button className={styles.feature} onClick={onFeatureClick}>
                <b className={styles.learnMore}>Learn More</b>
              </button>
            </div>
          </div>
          <h1 className={styles.learnMoreAbout}>
            Learn More About Campaign Design
          </h1>
        </div>
      </section>
      <div className={styles.lineSeparator} />
      <FrameComponent10 />
    </div>
  );
};

export default About;
