import { FunctionComponent, useState } from "react";
import styles from "./TurigmaaiFrame.module.css";
import axios from "axios";

const TurigmaaiFrame: FunctionComponent = () => {
  const [a1, setA1] = useState(false);
  const [a2, setA2] = useState(false);
  const [a3, setA3] = useState(false);
  const [note, setNote] = useState("");

  const saveButtonHandler = async () => {
    let payload = {
      q1: "Prospect title in-correct",
      a1: a1,
      q2: "Prospect phone number wrong",
      a2: a2,
      q3: "Prospect didn’t answer",
      a3: a3,
      note,
    };
    let config = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    };
    const response = await axios.post(
      "http://localhost:4000/assessments",
      payload,
      config
    );
    if (response.status === 200) {
      initialState();
      alert("Assessment has been submitted, Thank You");
    }
  };

  const initialState = () => {
    setA1(false);
    setA2(false);
    setA3(false);
    setNote("");
  };

  return (
    <div className={styles.turigmaaiFrame}>
      <div className={styles.utilityPages}>
        <div className={styles.homeAboutUs}>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={a1}
              onChange={(e) => setA1(e.target.checked)}
            />
            <div className={styles.prospectTitleInCorrect}>
              Prospect title in-correct
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={a2}
              onChange={(e) => setA2(e.target.checked)}
            />
            <div className={styles.prospectTitleInCorrect}>
            Prospect phone number wrong
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={a3}
              onChange={(e) => setA3(e.target.checked)}
            />
            <div className={styles.prospectTitleInCorrect}>
            Prospect didn’t answer
            </div>
          </div>

        </div>
        <div className={styles.callNotesText}>
          <h3 className={styles.callNotes}>Call Notes</h3>
          <div className="w-full">
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={10}
              className="w-full"
            />
          </div>
          <button
            onClick={saveButtonHandler}
            style={{ padding: "10px 20px", backgroundColor: "blue", color: "white" }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TurigmaaiFrame;
