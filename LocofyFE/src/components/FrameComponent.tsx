import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  dentist?: string;
  frame?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propBorder?: CSSProperties["border"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  dentist,
  frame,
  propWidth,
  propBorder,
  propAlignSelf,
  propWidth1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameStyle: CSSProperties = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth1,
    };
  }, [propAlignSelf, propWidth1]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.frameGroup}>
        <div className={styles.frame} style={frameStyle} />
        <h1 className={styles.dentist}>{dentist}</h1>
      </div>
      <div className={styles.text} style={textStyle}>
        <div className={styles.frame1}>{frame}</div>
      </div>
    </div>
  );
};

export default FrameComponent;
