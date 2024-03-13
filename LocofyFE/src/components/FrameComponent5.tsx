import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Copyrights from "./Copyrights";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAboutUsFrameClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPagesContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <footer className={styles.pagesFrameWrapper}>
      <div className={styles.pagesFrame}>
        <div className={styles.homeFrame}>
          <div className={styles.aboutUsFrame} onClick={onAboutUsFrameClick}>
            <div className={styles.integrationsFrame}>
              <div className={styles.mailinfoturigmaai}>
                <div className={styles.logo} onClick={onLogoContainerClick}>
                  <h3 className={styles.turigmaai}>Turigma.ai</h3>
                </div>
                <div className={styles.aLeadingSilicon}>
                  A leading Silicon Valley pioneer in AI automation of
                  enterprise PreSales
                </div>
              </div>
              <div className={styles.appDownloadFrame}>
                <div className={styles.frameTurigmaai}>
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
                <div className={styles.frameTurigmaai1}>
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
            </div>
            <div className={styles.pages}>
              <div className={styles.pages1} onClick={onPagesContainerClick}>
                <h3 className={styles.pages2}>Pages</h3>
                <div className={styles.integrationsLine} />
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
              </div>
            </div>
            <div className={styles.myProfileAccountResetCance}>
              <h3 className={styles.utilityPages}>Utility Pages</h3>
              <div className={styles.cancelSubscription} />
              <div className={styles.myProfileAccountContainer}>
                <p className={styles.myProfile}>My Profile</p>
                <p className={styles.account}>Account</p>
                <p className={styles.resetPassword}>Reset Password</p>
                <p className={styles.cancelSubscription1}>
                  Cancel Subscription
                </p>
              </div>
            </div>
            <div className={styles.appDownload}>
              <div className={styles.content} />
            </div>
          </div>
        </div>
        <Copyrights
          line="/line.svg"
          propAlignSelf="stretch"
          propWidth="unset"
          propMaxHeight="100%"
          propHeight="unset"
        />
      </div>
    </footer>
  );
};

export default FrameComponent5;
