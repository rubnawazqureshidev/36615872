import { FunctionComponent } from "react";
import styles from "./PhoneCallInfo.module.css";

const PhoneCallInfo: FunctionComponent = () => {
  return (
    <section className={styles.phoneCallInfo}>
      <div className={styles.lastCallAnalyticsFrame}>
        <h1 className={styles.lastCallAnalytics}>
          Last Call Analytics (detail)
        </h1>
        <form className={styles.lastCallAnalyticsTable}>
          <div className={styles.column}>
            <div className={styles.headerCell}>
              <b className={styles.category}>Category</b>
            </div>
            <div className={styles.itemCell}>
              <b className={styles.iceBreaker}>Ice Breaker</b>
            </div>
            <div className={styles.itemCell1}>
              <b className={styles.warmIntro}>Warm Intro</b>
            </div>
            <div className={styles.itemCell2}>
              <b className={styles.selfIntro}>Self Intro</b>
            </div>
            <div className={styles.itemCell3}>
              <b className={styles.purposeOfCall}>Purpose of Call</b>
            </div>
            <button className={styles.itemCell4}>
              <b className={styles.prospectChallenge}>Prospect Challenge</b>
            </button>
            <div className={styles.itemCell5}>
              <b className={styles.prospectCxoReference}>
                Prospect CXO Reference
              </b>
            </div>
            <div className={styles.itemCell6}>
              <b className={styles.customer}>Customer</b>
            </div>
            <div className={styles.itemCell7}>
              <b className={styles.customer1}>Customer</b>
            </div>
          </div>
          <div className={styles.column1}>
            <button className={styles.headerCell1}>
              <b className={styles.response1}>Response 1</b>
            </button>
            <div className={styles.itemCell8}>
              <div className={styles.response11}>response 1</div>
            </div>
            <div className={styles.itemCell9}>
              <div className={styles.response12}>response 1</div>
            </div>
            <div className={styles.itemCell10} />
            <div className={styles.itemCell11}>
              <div className={styles.response13}>response 1</div>
            </div>
            <div className={styles.itemCell12}>
              <div className={styles.response14}>response 1</div>
            </div>
            <div className={styles.itemCell13}>
              <div className={styles.response15}>response 1</div>
            </div>
            <div className={styles.itemCell14}>
              <div className={styles.response16}>response 1</div>
            </div>
            <div className={styles.itemCell15}>
              <div className={styles.response17}>response 1</div>
            </div>
          </div>
          <div className={styles.column2}>
            <button className={styles.headerCell2}>
              <b className={styles.response2}>Response 2</b>
            </button>
            <div className={styles.itemCell16}>
              <div className={styles.response21}>response 2</div>
            </div>
            <div className={styles.itemCell17} />
            <div className={styles.itemCell18} />
            <div className={styles.itemCell19} />
            <div className={styles.itemCell20}>
              <div className={styles.response22}>response 2</div>
            </div>
            <div className={styles.itemCell21}>
              <div className={styles.response23}>response 2</div>
            </div>
            <div className={styles.itemCell22} />
            <div className={styles.itemCell23}>
              <div className={styles.response24}>response 2</div>
            </div>
          </div>
          <div className={styles.column3}>
            <div className={styles.headerCell3}>
              <h2 className={styles.ratingXOf}>Rating (x of 3)</h2>
            </div>
            <div className={styles.itemCell24}>
              <div className={styles.div}>3</div>
            </div>
            <div className={styles.itemCell25}>
              <b className={styles.b}>2</b>
            </div>
            <div className={styles.itemCell26}>
              <b className={styles.b1}>1</b>
            </div>
            <div className={styles.itemCell27}>
              <b className={styles.b2}>2</b>
            </div>
            <div className={styles.itemCell28}>
              <b className={styles.b3}>3</b>
            </div>
            <div className={styles.itemCell29}>
              <b className={styles.b4}>3</b>
            </div>
            <div className={styles.itemCell30}>
              <b className={styles.b5}>2</b>
            </div>
            <div className={styles.itemCell31}>
              <b className={styles.b6}>3</b>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PhoneCallInfo;
