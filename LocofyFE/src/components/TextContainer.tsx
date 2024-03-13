import { FunctionComponent, useCallback } from "react";
import HomepageMenu from "./HomepageMenu";
import { useNavigate } from "react-router-dom";
import styles from "./TextContainer.module.css";
import { useAppSelector } from "../redux/hooks";

const TextContainer: FunctionComponent = () => {
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.textContainer}>
      <header className={styles.frameGroup}>
        <div className={styles.november}>
          <h1 className={styles.turigmaai}>Turigma.ai</h1>
        </div>
        {user === null && (
          <div className={styles.image}>
            <nav className={styles.text}>
              <HomepageMenu />
            </nav>

            <div
              className={styles.loginButton}
              onClick={onLoginButtonContainerClick}
            >
              <b className={styles.signIn}>Sign In</b>
            </div>
          </div>
        )}

        {user && (
          <div className={styles.image}>
            <nav className={styles.text}>
              <HomepageMenu />
            </nav>

            <div
              className={styles.loginButton}
              onClick={onLoginButtonContainerClick}
            >
              <b
                className={styles.signIn}
                onClick={() => {
                  localStorage.removeItem("accessToken");
                  navigate("/");
                }}
              >
                Logout
              </b>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default TextContainer;
