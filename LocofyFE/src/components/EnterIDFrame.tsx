import { FunctionComponent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EnterIDFrame.module.css";
import axios from "axios";

const EnterIDFrame: FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onButtonClick = async (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      let payload = {
        email,
        password,
      };

      let response = await axios.post("http://localhost:4000/login", payload);
      localStorage.setItem("accessToken", response.data);
      window.location.href = "/callerdashboard";
    } catch (error) {
      alert("Invalid Login");
    }
  };

  // const onButton1Click = useCallback(() => {
  //   navigate("/resetpassword");
  // }, [navigate]);

  return (
    <section className={styles.enterIDFrame}>
      <div className={styles.enterPasswordButton}>
        <div className={styles.resetPasswordButton}>
          <h1 className={styles.login}>Login</h1>
        </div>
        <form className={styles.backgoundParent}>
          <img className={styles.backgoundIcon} alt="" src="/backgound.svg" />
          <div className={styles.loginButton}>
            <input
              className="w-full border-gray-300 focus:outline-none focus:border-none p-5 rounded-lg "
              placeholder="Enter Your login ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
            />

            <input
              className="w-full border-gray-300 focus:outline-none focus:border-none p-5 rounded-lg"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />

            <div className={styles.resetPassBtn}>
              <button
                className={styles.button2}
                onClick={(event) => onButtonClick(event)}
              >
                <b className={styles.login1}>Login</b>
              </button>
            </div>
          </div>
          <div className={styles.buttonEnterPswd}>
            <button
              className={styles.button3}
              onClick={() => navigate("/resetpassword")}
            >
              <b className={styles.resetPassword}>Reset Password</b>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnterIDFrame;
