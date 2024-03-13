import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./AboutUsPages.module.css";

export type AboutUsPagesType = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propWidth1?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];

  /** Action props */
  onAboutUsPagesClick?: () => void;
};

const AboutUsPages: FunctionComponent<AboutUsPagesType> = ({
  propWidth,
  propFlex,
  propWidth1,
  propPadding,
  onAboutUsPagesClick,
}) => {
  const aboutUsPagesStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      padding: propPadding,
    };
  }, [propWidth1, propPadding]);

  return (
    <div
      className={styles.aboutUsPages}
      onClick={onAboutUsPagesClick}
      style={aboutUsPagesStyle}
    >
      <div className={styles.mailInfoFrame}>
        <div className={styles.mailinfoturigmaaiFrame}>
          <h3 className={styles.turigmaai}>Turigma.ai</h3>
          <div className={styles.aLeadingSilicon}>
            A leading Silicon Valley pioneer in AI automation of enterprise
            PreSales
          </div>
        </div>
        <div className={styles.textInputFieldFrame}>
          <div className={styles.mailphonecall}>
            <div className={styles.infoboxNest}>
              <img
                className={styles.mailIcon}
                loading="lazy"
                alt=""
                src="/mail.svg"
              />
            </div>
            <div className={styles.infoturigmaai}>info@turigma.ai</div>
          </div>
          <div className={styles.mailphonecall1}>
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
      <div className={styles.frameParent}>
        <div className={styles.frameGroup} style={frameDiv1Style}>
          <div className={styles.pagesParent}>
            <b className={styles.pages}>Pages</b>
            <div className={styles.line} />
          </div>
          <div className={styles.framesChildren}>
            <h3 className={styles.utilityPages}>Utility Pages</h3>
            <div className={styles.line1} />
          </div>
        </div>
        <div className={styles.appDownloadCallToAction}>
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
          <div className={styles.accountPage}>
            <div className={styles.myProfileAccountContainer}>
              <p className={styles.myProfile}>My Profile</p>
              <p className={styles.account}>Account</p>
              <p className={styles.resetPassword}>Reset Password</p>
              <p className={styles.cancelSubscription}>Cancel Subscription</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.appDownload}>
        <div className={styles.content} />
      </div>
    </div>
  );
};

export default AboutUsPages;
