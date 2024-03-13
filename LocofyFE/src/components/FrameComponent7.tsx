import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent7.module.css";

const FrameComponent7: FunctionComponent = () => {
  const navigate = useNavigate();

  const onIntegrationsFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <footer className={styles.lineParent}>
      <div className={styles.line} />
      <div className={styles.utilityPagesText}>
        <div className={styles.homeFrame}>
          <div className={styles.aboutUsFrame}>
            <div
              className={styles.integrationsFrame}
              onClick={onIntegrationsFrameContainerClick}
            >
              <div className={styles.pageSeparator}>
                <div className={styles.home}>
                  <div className={styles.turigmaai}>Turigma.ai</div>
                </div>
                <div className={styles.home1}>
                  <div className={styles.aLeadingSilicon}>
                    A leading Silicon Valley pioneer in AI automation of
                    enterprise PreSales
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
              <div className={styles.homeSections}>
                <div className={styles.aboutUs}>
                  <div className={styles.integrations}>
                    <b className={styles.pages}>Pages</b>
                    <div className={styles.line1} />
                  </div>
                  <div className={styles.contact}>
                    <b className={styles.utilityPages}>Utility Pages</b>
                    <div className={styles.line2} />
                  </div>
                </div>
                <div className={styles.appDownload}>
                  <div className={styles.homeAboutUsContainer}>
                    <p className={styles.home2}>Home</p>
                    <p className={styles.aboutUs1}>About Us</p>
                    <p className={styles.integrations1}>
                      <b className={styles.integrations2}>Integrations</b>
                      <span></span>
                    </p>
                    <p className={styles.pricing}>Pricing</p>
                    <p className={styles.features}>Features</p>
                    <p className={styles.contactUs}>Contact Us</p>
                  </div>
                  <div className={styles.myProfileAccountResetPasswWrapper}>
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
              <div className={styles.appDownload1}>
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
      </div>
    </footer>
  );
};

export default FrameComponent7;
