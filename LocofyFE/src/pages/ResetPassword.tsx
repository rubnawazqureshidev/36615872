import { FunctionComponent } from "react";
import FrameBannerBlog from "../components/FrameBannerBlog";
import styles from "./ResetPassword.module.css";

const ResetPassword: FunctionComponent = () => {
  return (
    <div className={styles.resetpassword}>
      <div className={styles.frameTurigmaai}>
        <h2 className={styles.turigmaai}>Turigma.ai</h2>
        <div className={styles.fRAMEHomePresalesAI}>
          <nav className={styles.fRAMEBenefitsBlogs}>
            <div className={styles.home}>Home</div>
            <div className={styles.presalesAi}> PreSales AI</div>
            <div className={styles.features}>Features</div>
            <div className={styles.buttonEnterID}>
              <div className={styles.benefits}>Benefits</div>
              <div className={styles.fRAMEConfirmPassword}>
                <div className={styles.home1}>Home</div>
              </div>
            </div>
            <div className={styles.buttonNewPass}>
              <div className={styles.presalesAi1}>Presales AI</div>
            </div>
            <div className={styles.featuresBenefitsFrame}>
              <div className={styles.features1}>Features</div>
            </div>
            <div className={styles.featuresBenefitsFrame1}>
              <div className={styles.benefits1}>Benefits</div>
            </div>
            <div className={styles.featuresBenefitsFrame2}>
              <div className={styles.blogs}>Blogs</div>
            </div>
          </nav>
        </div>
      </div>
      <FrameBannerBlog />
      <div className={styles.frameParent}>
        <div className={styles.bannerParent}>
          <img className={styles.bannerIcon} alt="" src="/banner@2x.png" />
          <div className={styles.blog}>Blog</div>
        </div>
        <img
          className={styles.turigmaLogoTransparent1}
          loading="lazy"
          alt=""
          src="/turigma-logo-transparent-1@2x.png"
        />
      </div>
    </div>
  );
};

export default ResetPassword;
