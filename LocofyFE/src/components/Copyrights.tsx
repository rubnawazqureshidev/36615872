import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Copyrights.module.css";

export type CopyrightsType = {
  line?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propMaxHeight?: CSSProperties["maxHeight"];
  propHeight?: CSSProperties["height"];
};

const Copyrights: FunctionComponent<CopyrightsType> = ({
  line,
  propAlignSelf,
  propWidth,
  propMaxHeight,
  propHeight,
}) => {
  const copyrightsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const lineIconStyle: CSSProperties = useMemo(() => {
    return {
      maxHeight: propMaxHeight,
      height: propHeight,
    };
  }, [propMaxHeight, propHeight]);

  return (
    <div className={styles.copyrights} style={copyrightsStyle}>
      <img
        className={styles.lineIcon}
        loading="lazy"
        alt=""
        src={line}
        style={lineIconStyle}
      />
      <div className={styles.copyrights1}>
        <div className={styles.copyrightTurigmaai}>Copyright © Turigma.ai</div>
        <div className={styles.socialMedia}>
          <div className={styles.div}></div>
          <div className={styles.div1}></div>
          <div className={styles.div2}></div>
          <div className={styles.div3}></div>
        </div>
      </div>
    </div>
  );
};

export default Copyrights;
