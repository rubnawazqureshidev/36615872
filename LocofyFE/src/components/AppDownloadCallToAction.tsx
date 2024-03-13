import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Copyrights from "./Copyrights";
import styles from "./AppDownloadCallToAction.module.css";

const AppDownloadCallToAction: FunctionComponent = () => {
  const navigate = useNavigate();

  const onInfoForMailingOrCallingClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <footer className={styles.appDownloadCallToAction}>
      <div className={styles.pageTextParent}>
        <div
          className={styles.infoForMailingOrCalling}
          onClick={onInfoForMailingOrCallingClick}
        >
          <div className={styles.mainFrame}>
            <div className={styles.subframe}>
              <h3 className={styles.turigmaai}>Turigma.ai</h3>
            </div>
            <div className={styles.subframe1}>
              <div className={styles.aLeadingSilicon}>
                A leading Silicon Valley pioneer in AI automation of enterprise
                PreSales
              </div>
            </div>
            <div className={styles.turigmaaiFrame}>
              <div className={styles.mailWrapper}>
                <img
                  className={styles.mailIcon}
                  loading="lazy"
                  alt=""
                  src="/mail.svg"
                />
              </div>
              <div className={styles.infoturigmaai}>info@turigma.ai</div>
            </div>
            <div className={styles.turigmaaiFrame1}>
              <div className={styles.phoneCallWrapper}>
                <img
                  className={styles.phoneCallIcon}
                  loading="lazy"
                  alt=""
                  src="/phonecall.svg"
                />
              </div>
              <div className={styles.div}>408-418-8163</div>
            </div>
          </div>
          <div className={styles.company}>
            <div className={styles.frameParent}>
              <div className={styles.pagesParent}>
                <b className={styles.pages}>Pages</b>
                <div className={styles.pages1} />
              </div>
              <div className={styles.utilityPagesParent}>
                <h3 className={styles.utilityPages}>Utility Pages</h3>
                <div className={styles.line} />
              </div>
            </div>
            <div className={styles.footerLabel}>
              <div className={styles.homeAboutUsContainer}>
                <p className={styles.home}>Home</p>
                <p className={styles.aboutUs}>About Us</p>
                <p className={styles.integrations}>
                  <b className={styles.integrations1}>Integrations</b>
                  <span></span>
                </p>
                <p className={styles.pricing}>Pricing</p>
                <p className={styles.features}>Features</p>
                <p className={styles.contactUs}>Contact Us</p>
              </div>
              <div className={styles.features1}>
                <div className={styles.myProfileAccountContainer}>
                  <p className={styles.myProfile}>My Profile</p>
                  <p className={styles.account}>Account</p>
                  <p className={styles.resetPassword}>Reset Password</p>
                  <p className={styles.cancelSubscription}>
                    Cancel Subscription
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.appDownload}>
            <div className={styles.content} />
          </div>
        </div>
      </div>
      <Copyrights line="/line.svg" />
    </footer>
  );
};

export default AppDownloadCallToAction;
