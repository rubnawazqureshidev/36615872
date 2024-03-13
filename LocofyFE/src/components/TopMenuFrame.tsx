import { FunctionComponent, useEffect, useState } from "react";
import FrameFirstNamePhone from "./FrameFirstNamePhone";
import styles from "./TopMenuFrame.module.css";
import axios from "axios";
import { useAppSelector } from "../redux/hooks";
import { Button, Modal } from "flowbite-react";

const TopMenuFrame: FunctionComponent = () => {
  const [openModal, setOpenModal] = useState(false);
  const activeRecord = useAppSelector((state) => state.list.activeRecord);
  const [selectedFaq, setSelectedFaq] = useState<any>(null);

  const viewHandler = (payload: any) => {
    setOpenModal(true);
    setSelectedFaq(payload);
  };

  return (
    <div className={styles.topMenuFrame}>
      <div className={styles.frameParent}>
        <div className={styles.frameFirstNamePhoneParent}>
          <FrameFirstNamePhone />
          <div className={styles.callScript}>
            <img
              className={styles.backgroundIcon}
              alt=""
              src="/background.svg"
            />
            <h1 className={styles.callScript1}>Call Script</h1>
            <div className={styles.loremIpsumDolorContainer}>
              <p className={styles.loremIpsumDolor}>
                {activeRecord && activeRecord.call_script}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.faq}>
          <h1 className={styles.frequentlyAskedQuestions}>
            Frequently Asked Questions
          </h1>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.aICopilotWrapper}>
            <div className={styles.aICopilot}>
              <div className={styles.faqParent}>
                <div
                  style={{
                    display: "flex",
                    gap: 25,
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    className="bg-slate-100 border cursor-pointer p-4 rounded-sm w-12/12 lg:w-4/12 text-2xl"
                    onClick={() =>
                      viewHandler({ a: activeRecord.a1, q: activeRecord.q1 })
                    }
                  >
                    {activeRecord && activeRecord.q1}
                  </button>

                  <button
                    className="bg-slate-100 border cursor-pointer p-4 rounded-sm w-12/12 lg:w-4/12 text-2xl"
                    onClick={() =>
                      viewHandler({ a: activeRecord.a2, q: activeRecord.q2 })
                    }
                  >
                    {activeRecord && activeRecord.q2}
                  </button>

                  <button
                    className="bg-slate-100 border cursor-pointer p-4 rounded-sm w-12/12 lg:w-4/12 text-2xl"
                    onClick={() =>
                      viewHandler({ a: activeRecord.a3, q: activeRecord.q3 })
                    }
                  >
                    {activeRecord && activeRecord.q3}
                  </button>

                  <button
                    className="bg-slate-100 border cursor-pointer p-4 rounded-sm w-12/12 lg:w-4/12 text-2xl"
                    onClick={() =>
                      viewHandler({ a: activeRecord.a4, q: activeRecord.q4 })
                    }
                  >
                    {activeRecord && activeRecord.q4}
                  </button>

                  <button
                    className="bg-slate-100 border cursor-pointer p-4 rounded-sm w-12/12 lg:w-4/12 text-2xl"
                    onClick={() =>
                      viewHandler({ a: activeRecord.a5, q: activeRecord.q5 })
                    }
                  >
                    {activeRecord && activeRecord.q5}
                  </button>

                  <button
                    className="bg-slate-100 border cursor-pointer p-4 rounded-sm w-12/12 lg:w-4/12 text-2xl"
                    onClick={() =>
                      viewHandler({ a: activeRecord.a6, q: activeRecord.q6 })
                    }
                  >
                    {activeRecord && activeRecord.q6}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.callNotes}>
          <h1 className={styles.notepad}>Notepad</h1>
        </div>
      </div>

      {selectedFaq && (
        <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>{selectedFaq.q}</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {selectedFaq.a}
              </p>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default TopMenuFrame;
