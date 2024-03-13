import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SelfIntroItemCell from "./SelfIntroItemCell";
import styles from "./FramePreSalesAI.module.css";

const FramePreSalesAI: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCallerDashboardText1Click = useCallback(() => {
    navigate("/callerdashboard");
  }, [navigate]);

  const onCampaignResearchTextClick = useCallback(() => {
    navigate("/campaignresearch");
  }, [navigate]);

  return (
    <header className={styles.framePreSalesAI}>
      <div className={styles.topmenucomponent}>
        <h3 className={styles.turigmaai}>Turigma.ai</h3>
        <div className={styles.firstNamePhoneFrame}>
          <div className={styles.previousNextButtons}>
            <div className={styles.home}>Home</div>
            <div className={styles.callScriptTextbox}>
              <div className={styles.fAQsTextbox}>
                <div className={styles.presalesAi}> PreSales AI</div>
              </div>
              <nav className={styles.notepadTextbox}>
                <SelfIntroItemCell
                  onCallerDashboardTextClick={onCallerDashboardText1Click}
                  onCampaignResearchTextClick={onCampaignResearchTextClick}
                />
              </nav>
              <div className={styles.fAQsTextbox1}>
                <div className={styles.features}>Features</div>
              </div>
              <div className={styles.fAQsTextbox2}>
                <div className={styles.benefits}>Benefits</div>
              </div>
              <div className={styles.blog}>Blog</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FramePreSalesAI;
