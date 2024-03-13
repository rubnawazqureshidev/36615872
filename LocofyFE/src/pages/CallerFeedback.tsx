import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import InputFieldContainer from "../components/InputFieldContainer";
import SecondaryButton from "../components/SecondaryButton";
import Link from "../components/Link";
import FrameComponent4 from "../components/FrameComponent4";
import PhoneCallInfo from "../components/PhoneCallInfo";
import AppDownloadNode from "../components/AppDownloadNode";
import CallInfo from "../components/CallInfo";
import styles from "./CallerFeedback.module.css";

const CallerFeedback: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCallerDashboardTextClick = useCallback(() => {
    navigate("/callerdashboard");
  }, [navigate]);

  const onCampaignResearchTextClick = useCallback(() => {
    navigate("/campaignresearch");
  }, [navigate]);

  return (
    <div className={styles.callerfeedback}>
      <InputFieldContainer
        onCallerDashboardTextClick={onCallerDashboardTextClick}
        onCampaignResearchTextClick={onCampaignResearchTextClick}
      />
      <SecondaryButton />
      <Link />
      <FrameComponent4 />
      <PhoneCallInfo />
      <AppDownloadNode />
      <div className={styles.categoryResponseCellFrame} />
      <CallInfo />
    </div>
  );
};

export default CallerFeedback;
