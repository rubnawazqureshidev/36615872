import { FunctionComponent, useCallback } from "react";
import TextContainer from "../components/TextContainer";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import IntegrationsText from "../components/IntegrationsText";
import FrameComponent1 from "../components/FrameComponent1";
import Testimonial from "../components/Testimonial";
import UtilityPages from "../components/UtilityPages";
import TextNode from "../components/TextNode";
import MainMenu from "../components/MainMenu";
import styles from "./Homepage.module.css";

const Homepage: FunctionComponent = () => {
  const onFeatureClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='heroHeaderContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.homepage}>
      <TextContainer />
      <FrameComponent3 />
      <FrameComponent2 />
      <section className={styles.imageMarker}>
        <div
          className={styles.benefitsSectionHeader}
          data-scroll-to="benefitsSectionHeaderContainer"
        >
          <button className={styles.feature} onClick={onFeatureClick}>
            <b className={styles.goToThe}>Go To The Top</b>
          </button>
          <div className={styles.homeText}>
            <h1 className={styles.benefits}>Benefits</h1>
          </div>
        </div>
      </section>
      <IntegrationsText />
      <FrameComponent1 />
      <section className={styles.headerWrapper}>
        <Testimonial />
        <UtilityPages />
      </section>
      <img
        className={styles.heroBackgroundIcon}
        alt=""
        src="/herobackground.svg"
      />
      <TextNode />
      <MainMenu />
    </div>
  );
};

export default Homepage;
