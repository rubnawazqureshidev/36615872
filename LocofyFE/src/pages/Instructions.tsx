import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AsEasyFrame from "../components/AsEasyFrame";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import styles from "./Instructions.module.css";

const Instructions: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCallerDashboardTextClick = useCallback(() => {
    navigate("/callerdashboard");
  }, [navigate]);

  const onCampaignResearchTextClick = useCallback(() => {
    navigate("/campaignresearch");
  }, [navigate]);

  const onFeatureContainerClick = useCallback(() => {
    navigate("/campaignresearch");
  }, [navigate]);

  return (
    <div className={styles.instructions}>
      <header className={styles.callerFrame}>
        <div className={styles.feedbackManagerFrame}>
          <div className={styles.turigmaai}>Turigma.ai</div>
          <nav className={styles.instructionsFrame}>
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
      <AsEasyFrame />
      <FrameComponent9 />
      <div className={styles.instructionsChild} />
      <FrameComponent8 />
      <section className={styles.mainInstructionsText}>
        <div className={styles.callerDashboardFrame}>
          <div className={styles.feedbackManagerFrame1}>
            <div className={styles.feature} onClick={onFeatureContainerClick}>
              <b className={styles.startCampaign}>Start Campaign</b>
            </div>
          </div>
          <div className={styles.learnMoreAbout}>
            Learn More About Campaign Design
          </div>
        </div>
      </section>
      <FrameComponent7 />
    </div>
  );
};

export default Instructions;
