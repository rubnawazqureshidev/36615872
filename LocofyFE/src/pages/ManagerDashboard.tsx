import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import InputFieldContainer from "../components/InputFieldContainer";
import LogoFrame from "../components/LogoFrame";
import Lastcallanalytics from "../components/Lastcallanalytics";
import CallerPerformanceCategories from "../components/CallerPerformanceCategories";
import ItemCell from "../components/ItemCell";
import CaseStudiesCell from "../components/CaseStudiesCell";
import FrameComponent5 from "../components/FrameComponent5";
import styles from "./ManagerDashboard.module.css";

const ManagerDashboard: FunctionComponent = () => {
  const navigate = useNavigate();

  const onTurigmaaiTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCallerDashboardTextClick = useCallback(() => {
    navigate("/callerdashboard");
  }, [navigate]);

  const onCampaignResearchTextClick = useCallback(() => {
    navigate("/campaignresearch");
  }, [navigate]);

  return (
    <div className={styles.managerdashboard}>
      <InputFieldContainer
        contactInfoSectionPadding="var(--padding-0) var(--padding-40xl) var(--padding-20xl)"
        onTurigmaaiTextClick={onTurigmaaiTextClick}
        onCallerDashboardTextClick={onCallerDashboardTextClick}
        onCampaignResearchTextClick={onCampaignResearchTextClick}
      />
      <section className={styles.prospectChallengeItemCell}>
        <div className={styles.prospectCXORefItemCell}>
          <h1 className={styles.campaignPerformance}>Campaign Performance</h1>
          <div className={styles.caseStudiesItemCell}>
            <div className={styles.pageSubtitle}>
              Integrated Management Dashboard
            </div>
          </div>
        </div>
      </section>
      <LogoFrame />
      <div className={styles.footerLinks}>
        <div className={styles.line} />
      </div>
      <Lastcallanalytics />
      <CallerPerformanceCategories
        caller1Performance="Caller 1 Performance:"
        callerScoreOverTimeMaxCat="Caller score over time (max category score = 3)"
        image27="/image-27@2x.png"
      />
      <CallerPerformanceCategories
        caller1Performance="Caller 1 Performance (details)"
        callerScoreOverTimeMaxCat="Caller 1 performance across categories and time"
        image27="/image-27-1@2x.png"
        propAlignSelf="unset"
        propWidth="1385px"
        propHeight="578px"
      />
      <ItemCell />
      <CaseStudiesCell />
      <FrameComponent5 />
    </div>
  );
};

export default ManagerDashboard;
