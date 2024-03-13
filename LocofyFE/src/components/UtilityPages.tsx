import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent from "./FrameComponent";
import styles from "./UtilityPages.module.css";

const UtilityPages: FunctionComponent = () => {
  const navigate = useNavigate();

  const onBtnClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='heroHeaderContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButton3Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.utilityPages}>
      <div className={styles.homeAboutUs}>
        <div
          className={styles.pricingSectionHeader}
          data-scroll-to="pricingSectionHeaderContainer"
        >
          <button className={styles.btn} onClick={onBtnClick}>
            <div className={styles.btnChild} />
            <b className={styles.goToThe}>Go to The Top</b>
          </button>
          <h1 className={styles.pricing}>Pricing</h1>
        </div>
      </div>
      <div className={styles.accountOptionsParent}>
        <div className={styles.accountOptions}>
          <div className={styles.resetPassword}>
            <div className={styles.header}>
              <div className={styles.textBlock}>
                <button className={styles.pricing1}>
                  <b className={styles.goToThe1}>Go To The Top</b>
                </button>
                <h1 className={styles.simpleAndFlexible}>
                  Simple and flexible pricing
                </h1>
                <h1 className={styles.simpleTransparentPricing}>
                  Simple, transparent pricing. Guaranteed 100X Return on
                  Investment.
                </h1>
                <h1 className={styles.acceptedPaymentMethodsContainer}>
                  <p className={styles.acceptedPaymentMethods}>
                    Accepted Payment Methods
                  </p>
                </h1>
                <div className={styles.image}>
                  <div className={styles.image19Parent}>
                    <img
                      className={styles.image19Icon}
                      loading="lazy"
                      alt=""
                      src="/image-19@2x.png"
                    />
                    <img
                      className={styles.image20Icon}
                      loading="lazy"
                      alt=""
                      src="/image-20@2x.png"
                    />
                    <img
                      className={styles.image21Icon}
                      loading="lazy"
                      alt=""
                      src="/image-21@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.turigmaai}>
              <div className={styles.pages}>
                <img
                  className={styles.backgroundIcon}
                  alt=""
                  src="/background.svg"
                />
                <div className={styles.utilityPages1}>
                  <div className={styles.home}>
                    <div className={styles.aboutUs}>
                      <div className={styles.integrations}>
                        <h1 className={styles.basic}>Basic</h1>
                      </div>
                      <button className={styles.button}>
                        <b className={styles.save30}>Save 30%</b>
                      </button>
                    </div>
                  </div>
                  <div className={styles.features}>
                    <div className={styles.contact}>
                      <div className={styles.appDownload} />
                      <div className={styles.footer}>
                        <h1 className={styles.callForPricing}>
                          Call for pricing
                        </h1>
                      </div>
                      <div className={styles.billedYearlyWrapper}>
                        <button className={styles.billedYearly}>
                          <div className={styles.billedPerCampaign}>
                            Billed per campaign
                          </div>
                        </button>
                      </div>
                      <div className={styles.appDownload1} />
                    </div>
                  </div>
                  <h1 className={styles.unlimitedMembersUnlimitedContainer}>
                    <p className={styles.unlimitedMembers}>Unlimited members</p>
                    <p className={styles.p}></p>
                    <p className={styles.unlimitedFeedback}>
                      <b className={styles.unlimited}>Unlimited</b>
                      <span> feedback</span>
                    </p>
                    <p className={styles.p1}></p>
                  </h1>
                </div>
                <button className={styles.button1}>
                  <b className={styles.getStarted}>Get Started</b>
                </button>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.backgroundParent}>
                <img
                  className={styles.backgroundIcon1}
                  alt=""
                  src="/background.svg"
                />
                <div className={styles.frameWrapper}>
                  <div className={styles.advancedParent}>
                    <h1 className={styles.advanced}>Advanced</h1>
                    <div className={styles.buttonWrapper}>
                      <button className={styles.button2}>
                        <b className={styles.popular}>Popular</b>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.callForPricingParent}>
                    <h1 className={styles.callForPricing1}>Call for pricing</h1>
                    <div className={styles.billedYearlyContainer}>
                      <button className={styles.billedYearly1}>
                        <div className={styles.billedPerCampaign1}>
                          Billed per campaign
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <h1 className={styles.unlimitedMembersUnlimitedContainer1}>
                  <p className={styles.unlimitedMembers1}>Unlimited members</p>
                  <p className={styles.p2}></p>
                  <p className={styles.unlimitedFeedback1}>
                    <b className={styles.unlimited1}>Unlimited</b>
                    <span> feedback</span>
                  </p>
                  <p className={styles.p3}></p>
                  <p className={styles.callerFeedback}>Caller feedback</p>
                  <p className={styles.p4}></p>
                  <p className={styles.managerDashboard}>Manager Dashboard</p>
                  <p className={styles.p5}></p>
                  <p className={styles.realTimeProspectAlerts}>
                    Real-time Prospect Alerts
                  </p>
                  <p className={styles.p6}></p>
                </h1>
                <div className={styles.buttonContainer}>
                  <button className={styles.button3} onClick={onButton3Click}>
                    <b className={styles.getStarted1}>Get Started</b>
                  </button>
                </div>
              </div>
              <div className={styles.lineWrapper}>
                <div className={styles.frameChild} />
              </div>
              <div className={styles.frameItem} />
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              <div className={styles.text}>
                <h1 className={styles.startYourTrial}>
                  Start your trial today
                </h1>
                <h1 className={styles.callUsToday}>
                  Call us today for a no-commitment pilot. You will see results
                  in days. Guaranteed.
                </h1>
              </div>
              <div className={styles.button4}>
                <div className={styles.button5}>
                  <h2 className={styles.yourMailHere}>your mail here...</h2>
                </div>
                <button className={styles.button6}>
                  <b className={styles.getStarted2}>Get Started</b>
                </button>
              </div>
            </div>
          </div>
          <div className={styles.backgroundGroup}>
            <img
              className={styles.backgroundIcon2}
              alt=""
              src="/background-2@2x.png"
            />
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.headerContainerParent}>
                  <div className={styles.headerContainer}>
                    <h1 className={styles.departments}>Departments</h1>
                  </div>
                  <div className={styles.text1}>
                    <img
                      className={styles.downloadIcon}
                      loading="lazy"
                      alt=""
                      src="/download.svg"
                    />
                    <img
                      className={styles.moreIcon}
                      loading="lazy"
                      alt=""
                      src="/more.svg"
                    />
                  </div>
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.mapParent}>
                    <img
                      className={styles.mapIcon}
                      loading="lazy"
                      alt=""
                      src="/map.svg"
                    />
                    <div className={styles.overall100}>
                      <p className={styles.overall}>Overall</p>
                      <p className={styles.p7}>100%</p>
                    </div>
                  </div>
                  <div className={styles.text2}>
                    <FrameComponent dentist="Dentist" frame="10%" />
                    <FrameComponent
                      dentist="Cardiology"
                      frame="25%"
                      propWidth="125.9px"
                      propBorder="0px solid var(--color-blueviolet-100)"
                      propAlignSelf="stretch"
                      propWidth1="unset"
                    />
                    <FrameComponent
                      dentist={`Ear Nose & Throat`}
                      frame="20%"
                      propWidth="unset"
                      propBorder="0px solid var(--color-violet)"
                      propAlignSelf="unset"
                      propWidth1="131.8px"
                    />
                    <FrameComponent
                      dentist="Dermatologist"
                      frame="50%"
                      propWidth="unset"
                      propBorder="0px solid var(--color-mediumspringgreen)"
                      propAlignSelf="unset"
                      propWidth1="131.8px"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.text3}>
              <div className={styles.line}>
                <div className={styles.textWrapper}>
                  <div className={styles.text4}>
                    <h1 className={styles.currentBalance}>Current Balance</h1>
                    <div className={styles.headerFrame}>$85,250</div>
                    <div className={styles.textNode}>
                      <div className={styles.line1}>
                        <img
                          className={styles.arrowUpwardIcon}
                          loading="lazy"
                          alt=""
                          src="/arrow-upward.svg"
                        />
                      </div>
                      <div className={styles.textNode1}>2.8%</div>
                    </div>
                  </div>
                </div>
                <div className={styles.textNode2}>
                  <div className={styles.bg} />
                  <div className={styles.image1}>65%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UtilityPages;
