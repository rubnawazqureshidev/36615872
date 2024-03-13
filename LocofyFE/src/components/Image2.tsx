import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Image2.module.css";

export type Image2Type = {
  utilityPages?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
};

const Image2: FunctionComponent<Image2Type> = ({
  utilityPages,
  propGap,
  propWidth,
  propWidth1,
  propFlex,
  propBackgroundColor,
}) => {
  const imageStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const turigmaaiStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const infoturigmaaiStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      flex: propFlex,
    };
  }, [propWidth1, propFlex]);

  const bgStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={styles.image} style={imageStyle}>
      <div className={styles.bg} />
      <div className={styles.marketingAnalysis}>
        <div className={styles.tag}>
          <div className={styles.frame} />
          <div className={styles.turigmaai} style={turigmaaiStyle} />
          <div className={styles.mail} />
        </div>
      </div>
      <div className={styles.infoturigmaai} style={infoturigmaaiStyle}>
        <div className={styles.bg1} style={bgStyle} />
        <div className={styles.utilityPages}>{utilityPages}</div>
      </div>
    </div>
  );
};

export default Image2;
