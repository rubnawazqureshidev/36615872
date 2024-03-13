import { FunctionComponent, useCallback } from "react";
import styles from "./HomepageMenu.module.css";

const HomepageMenu: FunctionComponent = () => {
  const onPreSalesAITextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='preSalesAIFeaturesHeaderContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBenefitsText1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='benefitsSectionHeaderContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onEasyTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='easySectionHeaderContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPricingText1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='pricingSectionHeaderContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBlogText1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='blogSectionHeaderContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <nav className={styles.homepageMenu}>
      <nav className={styles.newUserSignupWrapper}>
        <nav className={styles.newUserSignup}>
          <h2 className={styles.presalesAi} onClick={onPreSalesAITextClick}>
            PreSales AI
          </h2>
          <h2 className={styles.benefits} onClick={onBenefitsText1Click}>
            Benefits
          </h2>
          <h2 className={styles.easy} onClick={onEasyTextClick}>
            Easy
          </h2>
          <h2 className={styles.pricing} onClick={onPricingText1Click}>
            Pricing
          </h2>
          <h2 className={styles.blog} onClick={onBlogText1Click}>
            Blog
          </h2>
        </nav>
      </nav>
    </nav>
  );
};

export default HomepageMenu;
