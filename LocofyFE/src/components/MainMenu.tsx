import { FunctionComponent } from "react";
import styles from "./MainMenu.module.css";

const MainMenu: FunctionComponent = () => {
  return (
    <footer className={styles.mainMenu}>
      <div className={styles.submenu}>
        <div className={styles.tagAnalysisImage}>
          <div className={styles.tagMarketingFrame}>
            <div className={styles.turigmaaiContact}>
              <h1 className={styles.turigmaai}>Turigma.ai</h1>
              <h1 className={styles.aLeadingSilicon}>
                A leading Silicon Valley pioneer in AI automation of enterprise
                PreSales
              </h1>
            </div>
            <div className={styles.contacSupport}>
              <div className={styles.mailPhonecall}>
                <div className={styles.mailInfoturigmaai}>
                  <img
                    className={styles.mailIcon}
                    loading="lazy"
                    alt=""
                    src="/mail.svg"
                  />
                </div>
                <h1 className={styles.infoturigmaai}>info@turigma.ai</h1>
              </div>
              <div className={styles.mailPhonecall1}>
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
          <div className={styles.homeFrame}>
            <div className={styles.aboutUsIntegrationsFrame}>
              <div className={styles.myProfileAccountFrame}>
                <b className={styles.pages}>Pages</b>
                <div className={styles.appDownloadContent} />
              </div>
              <div className={styles.utilityFrame}>
                <h1 className={styles.utilityPages}>Utility Pages</h1>
                <div className={styles.aboutUsFrame} />
              </div>
            </div>
            <div className={styles.integrationsFrame}>
              <h1 className={styles.homeAboutUsContainer}>
                <p className={styles.home}>Home</p>
                <p className={styles.aboutUs}>About Us</p>
                <p className={styles.integrations}>
                  <b className={styles.integrations1}>Integrations</b>
                  <span></span>
                </p>
                <p className={styles.pricing}>Pricing</p>
                <p className={styles.features}>Features</p>
                <p className={styles.contactUs}>Contact Us</p>
              </h1>
              <div className={styles.featuresFrame}>
                <h1 className={styles.myProfileAccountContainer}>
                  <p className={styles.myProfile}>My Profile</p>
                  <p className={styles.account}>Account</p>
                  <p className={styles.resetPassword}>Reset Password</p>
                  <p className={styles.cancelSubscription}>
                    Cancel Subscription
                  </p>
                </h1>
              </div>
            </div>
          </div>
          <textarea className={styles.appDownload} rows={10} cols={12} />
        </div>
        <div className={styles.cancelSubscriptionFrame}>
          <div className={styles.copyrightFrame}>
            <h1 className={styles.copyrightTurigmaai}>
              Copyright © Turigma.ai
            </h1>
            <div className={styles.copyrightFrameInner}>
              <div className={styles.parent}>
                <h2 className={styles.h2}></h2>
                <h2 className={styles.h21}></h2>
                <h2 className={styles.h22}></h2>
                <h2 className={styles.h23}></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainMenu;
