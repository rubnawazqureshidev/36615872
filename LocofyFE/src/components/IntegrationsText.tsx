import { FunctionComponent, useCallback } from "react";
import styles from "./IntegrationsText.module.css";

const IntegrationsText: FunctionComponent = () => {
  const onBtnClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='heroHeaderContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={styles.integrationsText}>
      <div className={styles.pricingText}>
        <div className={styles.featuresText}>
          <div className={styles.contactText}>
          <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
            <div className={styles.benefitsSectionText}>
              <div className={styles.cancelSubscription}>
                <div className={styles.quickStartSaas}>Quick-start SaaS</div>
                <div className={styles.noTrainingOrContainer}>
                  <p
                    className={styles.noTrainingOr}
                  >{`No training or setup required. `}</p>
                  <p
                    className={styles.meshesIntoYour}
                  >{`Meshes into your existing workflow and IT setup. `}</p>
                  <p className={styles.seeResultsIn}>
                    See results in minutes, not months
                  </p>
                </div>
                <div className={styles.utilityPagesText}>
                  <img className={styles.icon} alt="" src="/icon-2.svg" />
                  <div className={styles.content}>
                    <b className={styles.costEffective}>Cost Effective</b>
                    <div className={styles.saves90Cost}>
                      Saves 90% cost, while improving outcomes.
                    </div>
                  </div>
                </div>
              </div>
            </div>

          
          </div>
        </div>
        {/* <img
          className={styles.backgroundIcon}
          loading="lazy"
          alt=""
          src="/background.svg"
        /> */}
      </div>
      <div className={styles.easySectionHeaderWrapper}>
        <div
          className={styles.easySectionHeader}
          data-scroll-to="easySectionHeaderContainer"
        >
          <div className={styles.textNode}>
            <button className={styles.btn} onClick={onBtnClick}>
              <div className={styles.btnChild} />
              <b className={styles.goToThe}>Go to The Top</b>
            </button>
          </div>
          <h1 className={styles.easeOfUse}>Ease of Use</h1>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsText;
