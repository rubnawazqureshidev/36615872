import { FunctionComponent } from "react";
import styles from "./Lastcallanalytics.module.css";

const Lastcallanalytics: FunctionComponent = () => {
  return (
    <section className={styles.lastcallanalytics}>
      <div className={styles.framewithheaderandcolumns}>
        <div className={styles.columnheaders}>
          <h1 className={styles.selectCallerNumber}>Select Caller Number</h1>
          <div className={styles.callerSelectorFrame}>
            <div className={styles.icebreakercell}>
              <img
                className={styles.previousButtonIcon}
                loading="lazy"
                alt=""
                src="/previousbutton1@2x.png"
              />
              <div className={styles.itemCellItemCellItemCell}>
                <div className={styles.iceBreaker}>
                  <div className={styles.next}>Next</div>
                </div>
                <div className={styles.rectangle}>
                  <div className={styles.rectangleChild} />
                  <img
                    className={styles.iocnIcon}
                    loading="lazy"
                    alt=""
                    src="/iocn.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.casestudiescell}>
              <div className={styles.askquestionbutton}>
                <div className={styles.freetextqueryfield}>
                  <div className={styles.searchInputBoundingBox} />
                </div>
                <div className={styles.searchButton}>
                  <b className={styles.select}>Select</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.integrations}>
          <h2 className={styles.callerNumberSelected}>
            Caller number selected: 1
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Lastcallanalytics;
