import { FunctionComponent } from "react";
import FrameFirstNamePhone from "./FrameFirstNamePhone";
import styles from "./Link.module.css";

const Link: FunctionComponent = () => {
  return (
    <section className={styles.link}>
      <FrameFirstNamePhone
        propWidth="unset"
        propPadding="var(--padding-0) var(--padding-9xs) var(--padding-0) var(--padding-11xs)"
        propFlex="1"
      />
    </section>
  );
};

export default Link;
