import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameFirstNamePhone.module.css";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { next, prev, search } from "../redux/slice/listSlice";

export type FrameFirstNamePhoneType = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
};

const FrameFirstNamePhone: FunctionComponent<FrameFirstNamePhoneType> = ({
  propWidth,
  propPadding,
  propFlex,
}) => {
  const frameFirstNamePhoneStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      flex: propFlex,
    };
  }, [propWidth, propPadding, propFlex]);

  const dispatch = useAppDispatch();
  const activeRecord = useAppSelector((state) => state.list.activeRecord);
  const records = useAppSelector((state) => state.list.records);

  return (
    <div
      className={styles.frameFirstNamePhone}
      style={frameFirstNamePhoneStyle}
    >
      <div className={styles.turigmaaiLabel}>
        <div className="gap-10">
          <p>
            <b className={styles.firstName}>
              First Name: {activeRecord && activeRecord.f_name}
            </b>
          </p>
          <p>
            <b className={styles.lastName}>
              Last Name: {activeRecord && activeRecord.l_name}
            </b>
          </p>

          <p>
            <b className={styles.firstName}>
              Phone: {activeRecord && activeRecord.phone}
            </b>
          </p>

          <p>
            <b className={styles.lastName}>
              Email: {activeRecord && activeRecord.email}
            </b>
          </p>

          <p>
            <b>Company: {activeRecord && activeRecord.company}</b>
            <b className={styles.location}>
              Location: {activeRecord && activeRecord.location}
            </b>
          </p>

          <p>
            <b className={styles.title}>
              Title: {activeRecord && activeRecord.title}
            </b>
          </p>
          <p>
            <b className={styles.campaignSNo}>
              Campaign S. No: {activeRecord && activeRecord.s_no}
            </b>
          </p>
        </div>
      </div>
      <div className={styles.emailText}>
        <div className={styles.previousbuttonFrame}>
          <img
            onClick={() => dispatch(prev())}
            className={styles.previousButtonIcon}
            loading="lazy"
            alt=""
            src="/previousbutton@2x.png"
          />
          <div className={styles.iocn}>
            <div className={styles.callScript}>
              <div className={styles.next}>Next</div>
            </div>
            <div className={styles.iconframe}>
              <div className={styles.iconframeChild} />
              <img
                onClick={() => dispatch(next())}
                className={styles.iocnIcon}
                loading="lazy"
                alt=""
                src="/iocn.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.turigmaaiFrame}>
            <select
              onChange={(e) => dispatch(search(e.target.value))}
              style={{ width: "100%", padding: "10px", borderRadius: "50px" }}
            >
              <option value="none">Search By Company</option>
              {records.map((record) => (
                <option key={record.index}>{record.company}</option>
              ))}
            </select>
            {/* <div className={styles.searchInputBoundingBox} /> */}
          </div>
          {/* <button className={styles.searchButton}>
            <b className={styles.search}>Search</b>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default FrameFirstNamePhone;
