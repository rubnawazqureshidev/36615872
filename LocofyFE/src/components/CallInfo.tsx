import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AboutUsPages from "./AboutUsPages";
import Copyrights from "./Copyrights";
import styles from "./CallInfo.module.css";

const CallInfo: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAboutUsPagesClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <footer className={styles.callInfo}>
      <div className={styles.homeHeader}>
        <AboutUsPages onAboutUsPagesClick={onAboutUsPagesClick} />
        <div className={styles.cancelSubscription}>
          <Copyrights
            line="/line1.svg"
            propAlignSelf="unset"
            propWidth="1346px"
            propMaxHeight="100%"
            propHeight="unset"
          />
        </div>
      </div>
    </footer>
  );
};

export default CallInfo;
