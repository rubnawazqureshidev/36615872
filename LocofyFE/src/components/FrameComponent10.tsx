import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent10.module.css";

const FrameComponent10: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIntegrationsLabelContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <footer className={styles.homeAboutUsWrapper}>
      <div className={styles.homeAboutUs}>
        <div className={styles.pagesText}>
          <div
            className={styles.integrationsLabel}
            onClick={onIntegrationsLabelContainerClick}
          >
            <div className={styles.callingScriptFrame}>
              <div className={styles.turigmaaiFrame}>
                <h3 className={styles.turigmaai}>Turigma.ai</h3>
              </div>
              <div className={styles.turigmaaiFrame1}>
                <div className={styles.aLeadingSilicon}>
                  A leading Silicon Valley pioneer in AI automation of
                  enterprise PreSales
                </div>
              </div>
              <div className={styles.turigmaaiLogo}>
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
              <div className={styles.turigmaaiLogo1}>
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
            <div className={styles.homeFrame}>
              <div className={styles.utilityPagesFrame}>
                <div className={styles.textContent}>
                  <b className={styles.pages}>Pages</b>
                  <div className={styles.resetPasswordCancelSubscrip} />
                </div>
                <div className={styles.rectangleShape}>
                  <h3 className={styles.utilityPages}>Utility Pages</h3>
                  <div className={styles.line} />
                </div>
              </div>
              <div className={styles.appLogo}>
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
                <div className={styles.accountInfo}>
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
        <div className={styles.copyrights}>
          <img
            className={styles.lineIcon}
            loading="lazy"
            alt=""
            src="/line.svg"
          />
          <div className={styles.copyrights1}>
            <div className={styles.copyrightTurigmaai}>
              Copyright © Turigma.ai
            </div>
            <div className={styles.socialMedia}>
              <div className={styles.div1}></div>
              <div className={styles.div2}></div>
              <div className={styles.div3}></div>
              <div className={styles.div4}></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent10;
