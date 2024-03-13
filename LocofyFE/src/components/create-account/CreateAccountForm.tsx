import React, { FunctionComponent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../FrameBannerBlog.module.css";
import axios from "axios";

const CreateAccountForm: FunctionComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPasswword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const createAccountHandler = async (
    e: React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    try {
      if (password === confirmPassword) {
        let payload = {
          email,
          password,
        };
        await axios.post("http://localhost:4000/create-account", payload);
        initial();
        alert("Account Created");
      } else {
        alert("Confirm Password is Not Matched");
      }
    } catch (error) {
      alert("Failed to Create Account");
    }
  };

  const initial = () => {
    setEmail("");
    setPasswword("");
    setConfirmPassword("");
  };

  const onButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <main className={styles.frameBannerBlog}>
      <section className={styles.infoTurigmaiFrame}>
        <div className={styles.mailPhonecallFrame}>
          <h1 className={styles.resetPassword}>Create Account</h1>
        </div>
        <div className={styles.resetButton}>
          <img className={styles.backgoundIcon} alt="" src="/backgound.svg" />
          <div className={styles.lineSeparator}>
            <input
              placeholder="Enter Your login ID"
              value={email}
              className="w-full border-gray-300 focus:outline-none focus:border-none p-5 rounded-lg"
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />

            <input
              className="w-full border-gray-300 focus:outline-none focus:border-none p-5 rounded-lg"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPasswword(e.target.value)}
              type="text"
            />

            <input
              className="w-full border-gray-300 focus:outline-none focus:border-none p-5 rounded-lg"
              placeholder="Re-Enter new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="text"
            />

            <div className={styles.homeAboutUsIntegrationsFra}>
              <button className={styles.button3} onClick={createAccountHandler}>
                <b className={styles.resetPassword1}>Create Account</b>
              </button>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <button className={styles.button4} onClick={onButton1Click}>
              <b className={styles.login}>Login</b>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CreateAccountForm;
