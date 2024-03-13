import { FunctionComponent, useMemo, type CSSProperties } from "react";
import SelfIntroItemCell from "./SelfIntroItemCell";
import styles from "./InputFieldContainer.module.css";

export type InputFieldContainerType = {
  /** Style props */
  contactInfoSectionPadding?: CSSProperties["padding"];

  /** Action props */
  onTurigmaaiTextClick?: () => void;
  onCallerDashboardTextClick?: () => void;
  onCampaignResearchTextClick?: () => void;
};

const InputFieldContainer: FunctionComponent<InputFieldContainerType> = ({
  contactInfoSectionPadding,
  onTurigmaaiTextClick,
  onCallerDashboardTextClick,
  onCampaignResearchTextClick,
}) => {
  const inputFieldContainerStyle: CSSProperties = useMemo(() => {
    return {
      padding: contactInfoSectionPadding,
    };
  }, [contactInfoSectionPadding]);

  return (
    <header
      className={styles.inputFieldContainer}
      style={inputFieldContainerStyle}
    >
      <div className={styles.contactInfoSection}>
        <h3 className={styles.turigmaai} onClick={onTurigmaaiTextClick}>
          Turigma.ai
        </h3>
        <nav className={styles.subheaderSection}>
          <SelfIntroItemCell
            onCallerDashboardTextClick={onCallerDashboardTextClick}
            onCampaignResearchTextClick={onCampaignResearchTextClick}
          />
        </nav>
      </div>
    </header>
  );
};

export default InputFieldContainer;
