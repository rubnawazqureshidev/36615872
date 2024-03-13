import { FunctionComponent } from "react";
import styles from "./SelfIntroItemCell.module.css";

export type SelfIntroItemCellType = {
  /** Action props */
  onCallerDashboardTextClick?: () => void;
  onCampaignResearchTextClick?: () => void;
};

const SelfIntroItemCell: FunctionComponent<SelfIntroItemCellType> = ({
  onCallerDashboardTextClick,
  onCampaignResearchTextClick,
}) => {
  return (
    <nav className={styles.selfIntroItemCell}>
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
  );
};

export default SelfIntroItemCell;
