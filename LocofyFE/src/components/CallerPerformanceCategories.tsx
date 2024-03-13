import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CallerPerformanceCategories.module.css";

export type CallerPerformanceCategoriesType = {
  caller1Performance?: string;
  callerScoreOverTimeMaxCat?: string;
  image27?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
};

const CallerPerformanceCategories: FunctionComponent<
  CallerPerformanceCategoriesType
> = ({
  caller1Performance,
  callerScoreOverTimeMaxCat,
  image27,
  propAlignSelf,
  propWidth,
  propHeight,
}) => {
  const callerPerformanceCategoriesStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const image27IconStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <section
      className={styles.callerPerformanceCategories}
      style={callerPerformanceCategoriesStyle}
    >
      <div className={styles.dayBasedCategories}>
        <h1 className={styles.caller1Performance}>{caller1Performance}</h1>
        <h2 className={styles.callerScoreOver}>{callerScoreOverTimeMaxCat}</h2>
        <img
          className={styles.image27Icon}
          loading="lazy"
          alt=""
          src={image27}
          style={image27IconStyle}
        />
      </div>
    </section>
  );
};

export default CallerPerformanceCategories;
