import { FunctionComponent, useCallback } from "react";
import Image1 from "./Image1";
import styles from "./TextNode.module.css";

const TextNode: FunctionComponent = () => {
  const onBlogClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='heroHeaderContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={styles.textNode}>
      <div className={styles.textNode1}>
        <div className={styles.line}>
          <div
            className={styles.blogSectionHeader}
            data-scroll-to="blogSectionHeaderContainer"
          >
            <div className={styles.blogWrapper}>
              <button className={styles.blog} onClick={onBlogClick}>
                <b className={styles.blog1}>GO TO THE TOP</b>
              </button>
            </div>
            <h1 className={styles.mostPopularArticles}>
              Most popular articles
            </h1>
          </div>
        </div>
        <div className={styles.blogs}>
          <div className={styles.easySectionSubheader}>
            <div className={styles.companyFrame}>
              <b className={styles.createAccount}>{`01. Upload Campaign `}</b>
            </div>
            <textarea
              className={styles.companyFrame1}
              placeholder="02. AI Automates PreSales"
              rows={6}
              cols={16}
            />
            <div className={styles.companyFrame2}>
              <b className={styles.trackAnalytics}>03. Instant Results</b>
            </div>
          </div>

          <div className={styles.posts}>
            <div className={styles.post}>
              <img src="/image-3@2x.png" />
              <p className="my-2 p-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <button className="button text-sm mx-4">Read More</button>
            </div>

            <div className={styles.post}>
              <img src="/image-3@2x.png" />
              <p className="my-2 p-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
              <button className="button text-sm mx-4">Read More</button>
            </div>

            <div className={styles.post}>
              <img src="/image-3@2x.png" />
              <p className="my-2 p-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                
              </p>
              <button className="button text-sm mx-4">Read More</button>
            </div>
          </div>
        </div>
        {/* <img className={styles.frameContainerIcon} loading="lazy" alt="" /> */}
      </div>
    </section>
  );
};

export default TextNode;
