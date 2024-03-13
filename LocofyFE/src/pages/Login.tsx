import { FunctionComponent } from "react";
import EnterIDFrame from "../components/EnterIDFrame";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  return (
    <div className={styles.login}>
      <div className={styles.turigmaaiParent}>
        <h2 className={styles.turigmaai}>Turigma.ai</h2>
        <div className={styles.homePreSalesAIFramesWrapper}>
          <nav className={styles.homePreSalesAIFrames}>
            <div className={styles.home}>Home</div>
            <div className={styles.presalesAi}> PreSales AI</div>
            <div className={styles.features}>Features</div>
            <div className={styles.logoFrame}>
              <div className={styles.benefits}>Benefits</div>
              <div className={styles.homeText}>
                <div className={styles.home1}>Home</div>
              </div>
            </div>
            <div className={styles.utilityPagesFrame}>
              <div className={styles.presalesAi1}>Presales AI</div>
            </div>
            <div className={styles.presalesBenefitsBlogs}>
              <div className={styles.features1}>Features</div>
            </div>
            <div className={styles.presalesBenefitsBlogs1}>
              <div className={styles.benefits1}>Benefits</div>
            </div>
            <div className={styles.homeButton}>
              <div className={styles.blogs}>Blogs</div>
            </div>
          </nav>
        </div>
      </div>
      <section className={styles.bannerFrame}>
        <div className={styles.blogText}>
          <img className={styles.bannerIcon} alt="" src="/banner@2x.png" />
          <div className={styles.blog}>Blog</div>
        </div>
        <img
          className={styles.turigmaLogoTransparent1}
          loading="lazy"
          alt=""
          src="/turigma-logo-transparent-1@2x.png"
        />
      </section>
      <EnterIDFrame />
    </div>
  );
};

export default Login;
