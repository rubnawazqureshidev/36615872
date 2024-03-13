import { FunctionComponent, useEffect, useState } from "react";
import FramePreSalesAI from "../components/FramePreSalesAI";
import TopMenuFrame from "../components/TopMenuFrame";
import TurigmaaiFrame from "../components/TurigmaaiFrame";
import LineSeparator from "../components/LineSeparator";
import AppDownloadCallToAction from "../components/AppDownloadCallToAction";
import styles from "./CallerDashboard.module.css";
import axios from "axios";
import { setRecords } from "../redux/slice/listSlice";
import { useAppDispatch } from "../redux/hooks";

const CallerDashboard: FunctionComponent = () => {
  const dispatch = useAppDispatch();

  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/faqs");
    dispatch(setRecords(response.data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.callerdashboard}>
      <FramePreSalesAI />
      <div className={styles.utilityPagesTextbox}>
        <div className={styles.homeAboutUsLinks}>
          <div className={styles.integrationsTextbox}>
            <div className={styles.appDownloadContent}>
              <h1 className={styles.callerDashboard}>Caller Dashboard</h1>
              <div className={styles.copyrightsFrame}>
                <div className={styles.pageSubtitle}>
                  All you need to create call magic
                </div>
              </div>
            </div>
          </div>
          <TopMenuFrame />
          <TurigmaaiFrame />
        </div>
      </div>
      <LineSeparator />
      <main className={styles.footerCopyrightsFrame}>
        <AppDownloadCallToAction />
      </main>
      <img className={styles.lineIcon} alt="" src="/line-1.svg" />
    </div>
  );
};

export default CallerDashboard;
