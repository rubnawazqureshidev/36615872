import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Image2 from "./Image2";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  const navigate = useNavigate();
  
  const onGroupButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <section className={styles.frameWithTextWrapper}>
      <div className={styles.frameWithText}>
        <div className={styles.headerWithText}>
          <div
            className={styles.heroHeader}
            data-scroll-to="heroHeaderContainer"
          >
            <h1 className={styles.automateYourPresales}>
              Automate Your Presales
            </h1>
            <h1 className={styles.worlds1stPresalesContainer}>
              <p className={styles.worlds1stPresales}>
                World’s 1st PreSales Automation Platform
              </p>
              <p className={styles.forB2bEnterprises}>for B2B Enterprises</p>
            </h1>
            <button
              className={styles.rectangleParent}
              onClick={onGroupButtonClick}
            >
              <div className={styles.frameChild} />
              <b className={styles.getStarted}>Get Started</b>
            </button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.textNode}>-$85.20</div>
          <img className={styles.menuIcon} alt="" src="/menu.svg" />
          <img className={styles.filterIcon} alt="" src="/filter.svg" />
          <div className={styles.textNode1}>
            <div className={styles.line}>
              <div className={styles.logoWrapper}>
                <img
                  className={styles.logoIcon}
                  loading="lazy"
                  alt=""
                  src="/logo@2x.png"
                />
              </div>
              <div className={styles.search}>
                <div className={styles.frame} />
                <img className={styles.searchIcon} alt="" src="/search.svg" />
                <input
                  className={styles.searchHere}
                  placeholder="Search here..."
                  type="text"
                />
              </div>
            </div>
            <div className={styles.textNode2}>
              <img
                className={styles.notifyIcon}
                loading="lazy"
                alt=""
                src="/notify.svg"
              />
            </div>
          </div>
          <div className={styles.frameGroup} />
          <div className={styles.frameGroup1} />
          <div className={styles.wrapperUser}>
            <img className={styles.userIcon} alt="" src="/user@2x.png" />
          </div>
          <div className={styles.textNode3}>
            <div className={styles.menuParent}>
              <img className={styles.menuIcon1} alt="" src="/menu-1.svg" />
              <div className={styles.frameParent}>
                <div className={styles.frame1}>+$120.20</div>
                <div className={styles.bg} />
                <div className={styles.frame2}>+$120.20</div>
                <div className={styles.bg1} />
                <div className={styles.bg2} />
                <div className={styles.frame3}>+$120.20</div>
                <div className={styles.background} />
                <img className={styles.chipIcon} alt="" src="/chip@2x.png" />
                <div className={styles.line1} />
                <div className={styles.line2} />
                <div className={styles.line3} />
                <div className={styles.line4} />
                <div className={styles.textFrame}>
                  <div className={styles.november}>
                    <div className={styles.topTips}>
                      <Image2 utilityPages="35%" />
                      <Image2
                        utilityPages="65%"
                        propGap="11.1px"
                        propWidth="40.7px"
                        propWidth1="51.1px"
                        propFlex="unset"
                        propBackgroundColor="#a468fe"
                      />
                      <Image2
                        utilityPages="75%"
                        propGap="14.1px"
                        propWidth="37.3px"
                        propWidth1="unset"
                        propFlex="1"
                        propBackgroundColor="#fe8c68"
                      />
                      <Image2
                        utilityPages="75%"
                        propGap="11.4px"
                        propWidth="37.3px"
                        propWidth1="51.1px"
                        propFlex="unset"
                        propBackgroundColor="#ffbb54"
                      />
                    </div>
                  </div>
                  <div className={styles.home}>
                    <div className={styles.aboutUs}>
                      <div className={styles.integrations}>
                        <div className={styles.draw}>
                          <div className={styles.background1} />
                          <div className={styles.features}>
                            <div className={styles.contacts}>
                              <div className={styles.myProfile} />
                              <div className={styles.myProfile1} />
                              <div className={styles.myProfile2} />
                              <div className={styles.myProfile3} />
                              <img
                                className={styles.patternIcon}
                                alt=""
                                src="/pattern.svg"
                              />
                              <img
                                className={styles.patternIcon1}
                                alt=""
                                src="/pattern-1.svg"
                              />
                              <img
                                className={styles.hoverIcon}
                                loading="lazy"
                                alt=""
                                src="/hover.svg"
                              />
                            </div>
                            <div className={styles.headerContent}>
                              <div className={styles.novemberFrame}>
                                <div className={styles.marketingTagAnalysis}>
                                  <div className={styles.topTips1}>
                                    <div className={styles.longFactReader}>
                                      <div className={styles.automateReports}>
                                        <div
                                          className={
                                            styles.turigmaaiContactInfo
                                          }
                                        />
                                      </div>
                                      <div className={styles.income}>
                                        Income
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.homeHeader}>
                                    <div className={styles.aboutUsIntegrations}>
                                      <div className={styles.pricingFeatures}>
                                        <div className={styles.contacts1} />
                                      </div>
                                      <div className={styles.expenses}>
                                        Expenses
                                      </div>
                                    </div>
                                  </div>
                                  <div className={styles.accountResetPassword}>
                                    <button className={styles.allTime}>
                                      <div className={styles.btn} />
                                      <div className={styles.monthly}>
                                        Monthly
                                      </div>
                                      <div className={styles.mailFrame}>
                                        <img
                                          className={
                                            styles.keyboardArrowDownIcon
                                          }
                                          alt=""
                                          src="/keyboard-arrow-down.svg"
                                        />
                                      </div>
                                    </button>
                                  </div>
                                  <div className={styles.novemberSubheader}>
                                    <img
                                      className={styles.menuIcon2}
                                      alt=""
                                      src="/menu-2.svg"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className={styles.k}>30K</div>
                            </div>
                          </div>
                          <div className={styles.novemberFrame1}>
                            <div className={styles.k1}>15K</div>
                          </div>
                          <div className={styles.k2}>10K</div>
                          <div className={styles.marketingTagAnalysis1}>
                            <div className={styles.parent}>
                              <div className={styles.div}>0</div>
                              <div
                                className={styles.saasupAutomateFrameWrapper}
                              >
                                <div className={styles.saasupAutomateFrame}>
                                  <div className={styles.turigmaaiContactInfo1}>
                                    <div className={styles.jan}>Jan</div>
                                  </div>
                                  <div className={styles.turigmaaiContactInfo2}>
                                    <div className={styles.feb}>Feb</div>
                                  </div>
                                  <div className={styles.mar}>Mar</div>
                                  <div className={styles.turigmaaiContactInfo3}>
                                    <div className={styles.apr}>Apr</div>
                                  </div>
                                  <div className={styles.turigmaaiContactInfo4}>
                                    <div className={styles.may}>May</div>
                                  </div>
                                  <div className={styles.turigmaaiContactInfo5}>
                                    <div className={styles.jun}>Jun</div>
                                  </div>
                                  <div className={styles.turigmaaiContactInfo6}>
                                    <div className={styles.jul}>Jul</div>
                                  </div>
                                  <div className={styles.aug}>Aug</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.homeAboutUsIntegrationsFra}>
                          <div className={styles.accountFrame}>
                            <div className={styles.resetPasswordFrame}>
                              <div className={styles.cancelSubscriptionFrame}>
                                <div className={styles.myCard}>My Card</div>
                                <div className={styles.copyrightFrame}>
                                  <div className={styles.frameContainer}>
                                    <div className={styles.frameDiv}>
                                      <div className={styles.backgroundParent}>
                                        <div className={styles.background2} />
                                        <div className={styles.balanse}>
                                          $12,500
                                        </div>
                                      </div>
                                      <div className={styles.contentFrame}>
                                        <b className={styles.description}>
                                          USD
                                        </b>
                                      </div>
                                    </div>
                                    <div className={styles.lineParent}>
                                      <div className={styles.line5} />
                                      <div className={styles.line6} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.imageFrameParent}>
                              <div className={styles.imageFrame}>
                                <div className={styles.background3} />
                                <div className={styles.lastTransactions}>
                                  Last Transactions
                                </div>
                              </div>
                              <div className={styles.marketingAnalysis}>
                                <div className={styles.topTips2}>
                                  <div className={styles.turigmaaiLogo}>
                                    <div className={styles.bg3} />
                                    <b className={styles.mj}>MJ</b>
                                  </div>
                                  <div className={styles.lineWrapper}>
                                    <div className={styles.line7} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.aboutUsIntegrations1}>
                      <div className={styles.pricingFeatures1}>
                        <img
                          className={styles.bottomSectionIcon}
                          loading="lazy"
                          alt=""
                          src="/bottom-section.svg"
                        />
                      </div>
                      <div className={styles.appDownload}>
                        <div className={styles.footerCopyright}>
                          <div className={styles.headerFrame}>
                            <div className={styles.bg4} />
                            <b className={styles.an}>AN</b>
                          </div>
                          <div className={styles.lineContainer}>
                            <div className={styles.line8} />
                          </div>
                        </div>
                        <div className={styles.linkFrame}>
                          <div className={styles.imageFrame1}>
                            <div className={styles.bg5} />
                            <img
                              className={styles.textNodeIcon}
                              alt=""
                              src="/text-node.svg"
                            />
                          </div>
                          <div className={styles.textNode4}>
                            <div className={styles.line9} />
                          </div>
                        </div>
                        <div className={styles.textNode5}>
                          <div className={styles.mailCallFrame}>
                            <div className={styles.bg6} />
                            <div className={styles.bg7} />
                            <b className={styles.mj1}>MJ</b>
                          </div>
                          <div className={styles.frameGroup2}>
                            <div className={styles.line10} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
