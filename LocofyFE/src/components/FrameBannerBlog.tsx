import React, { FunctionComponent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameBannerBlog.module.css";
import axios from "axios";

const FrameBannerBlog: FunctionComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPasswword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordHandler = async (
    e: React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    try {
      if (password === confirmPassword) {
        let payload = {
          email,
          password,
        };
        await axios.post("http://localhost:4000/reset-password", payload);
        setEmail("");
        setPasswword("");
        setConfirmPassword("");
        alert('Password has been reset')
      } else {
        alert("Confirm Password is Not Matched");
      }
    } catch (error) {
      alert("Failed to Reset Password");
    }
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
          <h1 className={styles.resetPassword}>Reset Password</h1>
        </div>
        <div className={styles.resetButton}>
          <img className={styles.backgoundIcon} alt="" src="/backgound.svg" />
          <div className={styles.lineSeparator}>
            <input
              placeholder="Enter Your login ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-gray-300 focus:outline-none focus:border-none p-5 rounded-lg"
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
              <button
                className={styles.button3}
                onClick={resetPasswordHandler}
              >
                <b className={styles.resetPassword1}>Reset Password</b>
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

export default FrameBannerBlog;
