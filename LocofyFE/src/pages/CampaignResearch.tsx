import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SelfIntroItemCell from "../components/SelfIntroItemCell";
import FrameComponent6 from "../components/FrameComponent6";
import AboutUsPages from "../components/AboutUsPages";
import Copyrights from "../components/Copyrights";
import styles from "./CampaignResearch.module.css";

const CampaignResearch: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCallerDashboardTextClick = useCallback(() => {
    navigate("/callerdashboard");
  }, [navigate]);

  const onCampaignResearchText1Click = useCallback(() => {
    navigate("/campaignresearch");
  }, [navigate]);

  const onTurigmaaiLabelContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.campaignresearch}>
      <header className={styles.frameCampaignResearch}>
        <div className={styles.fRAMETurigmaaiLabel}>
          <h3 className={styles.turigmaai}>Turigma.ai</h3>
          <nav className={styles.fRAMETopmenuframecomponen}>
            <SelfIntroItemCell
              onCallerDashboardTextClick={onCallerDashboardTextClick}
              onCampaignResearchTextClick={onCampaignResearchText1Click}
            />
          </nav>
        </div>
      </header>
      <section className={styles.campaignResearchFrame}>
        <div className={styles.automatedTurigmaiAIResearc}>
          <div className={styles.worldsLeadingAutomatedPresa}>
            <div className={styles.rectangleUploadDocuments}>
              <h1 className={styles.campaignResearch}>Campaign Research</h1>
              <div className={styles.framePagesubtitle}>
                <div className={styles.pageSubtitle}>
                  Setup and launch in minutes
                </div>
              </div>
            </div>
          </div>
          <h1 className={styles.turigmaAiAutomated}>
            Turigma AI Automated Research
          </h1>
          <div className={styles.worlds1stFully}>
            World’s 1st fully automated PreSales campaign research. Reduce
            months to minutes.
          </div>
        </div>
      </section>
      <section className={styles.featureStartAnalysis}>
        <div className={styles.frameUtilityPages}>
          <div className={styles.rectangleUploadDocumentsLab}>
            <div className={styles.uploadCampaignFile} />
            <h3 className={styles.uploadSellSideDocuments}>
              Upload Sell-side documents
            </h3>
          </div>
          <FrameComponent6 />
        </div>
      </section>
      <section className={styles.campaignresearchInner}>
        <div className={styles.uploadCampaignSetupFileExParent}>
          <h3 className={styles.uploadCampaignSetup}>
            Upload Campaign Setup File (Excel)
          </h3>
          <FrameComponent6
            propWidth="unset"
            propPadding="var(--padding-0) var(--padding-0) var(--padding-0) var(--padding-11xs)"
            propAlignSelf="stretch"
          />
        </div>
      </section>
      <section className={styles.featureWrapper}>
        <div className={styles.feature}>
          <h1 className={styles.startAnalysis}>Start Analysis</h1>
        </div>
      </section>
      <footer className={styles.line}>
        <div className={styles.analysisLine} />
        <div className={styles.frameSeries}>
          <div className={styles.frameSeries1}>
            <div className={styles.frameSeries2}>
              <AboutUsPages
                propWidth="unset"
                propFlex="1"
                propWidth1="417px"
                propPadding="var(--padding-0) var(--padding-xl) var(--padding-0) var(--padding-0)"
                onAboutUsPagesClick={onTurigmaaiLabelContainerClick}
              />
            </div>
            <Copyrights
              line="/line.svg"
              propAlignSelf="stretch"
              propWidth="unset"
              propMaxHeight="unset"
              propHeight="1px"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CampaignResearch;
