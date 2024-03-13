import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <section className={styles.textNodeWrapper}>
      <div className={styles.textNode}>
        <div className={styles.line}>
          <div className={styles.image}>
            <img className={styles.icon} alt="" src="/icon-3.svg" />
            <h1 className={styles.createYourAccountContainer}>
              <p className={styles.createYourAccount}>Create your account</p>
              <p className={styles.startYourWork}>{`& start your work`}</p>
            </h1>
          </div>
          <h1
            className={styles.theSystemAnd}
          >{`The system and workflow is designed by a team of AI and PreSales experts. It blends in your existing workflow. Just create a login and upload your campaign doc to begin. See results in minutes. `}</h1>
          <button className={styles.button} onClick={onButtonClick}>
            <b className={styles.getStarted}>Get Started</b>
          </button>
        </div>
        <img
          className={styles.easyImageIcon}
          loading="lazy"
          alt=""
          src="/easyimage@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent1;
