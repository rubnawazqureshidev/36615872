import { FunctionComponent, useMemo, type CSSProperties } from "react";
import Component from "./Component";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  propWidth,
  propPadding,
  propAlignSelf,
}) => {
  const uploadDocComponentStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propPadding, propAlignSelf]);

  return (
    <div className={styles.uploadDocComponent} style={uploadDocComponentStyle}>
      <Component />
    </div>
  );
};

export default FrameComponent6;
