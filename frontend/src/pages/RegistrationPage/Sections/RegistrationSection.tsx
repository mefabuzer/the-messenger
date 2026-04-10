import { useRegistrationSectionStore } from "../../../stores/useRegistrationSectionStore";
import { useRegistrationDataStore } from "../../../stores/useRegistrationDataStore";
import styles from "./MainSection.module.scss";
import { useEffect } from "react";
import { useAlertsStore } from "@stores/useAlertsStore";
import { isEmailCorrectly } from "@functionals/isEmailCorrectly";
import { useErrorDelay } from "@hooks/useErrorDelay";

const RegistrationSection = () => {
  const { actions: sectionActions } = useRegistrationSectionStore(
    (state) => state,
  );

  const { actions: alertsActions } = useAlertsStore((state) => state);

  const [emailError, setEmailError] = useErrorDelay(1000);
  const [passwordError, setPasswordError] = useErrorDelay(1000);
  const [usernameError, setUsernameError] = useErrorDelay(1000);

  const {
    email,
    username,
    password,

    actions: dataActions,
  } = useRegistrationDataStore((state) => state);

  useEffect(() => {
    return () => {
      dataActions.setDefault();
    };
  }, []);

  async function sendData(email: string, password: string, username: string) {
    let resultErrorMessage = "";

    if (!isEmailCorrectly(email)) {
      resultErrorMessage = "Почта введена неверно! ";
      setEmailError(true);
    }

    if (!(password.length >= 5 && password.length <= 20)) {
      resultErrorMessage += "Пароль должен быть от 5 до 20 символов! ";
      setPasswordError(true);
    }

    if (username.length === 0) {
      resultErrorMessage += "Ваш юзернейм не может быть пустым! ";
      setUsernameError(true);
    }

    resultErrorMessage = resultErrorMessage.slice(0, -1);
    if (resultErrorMessage.length !== 0) {
      alertsActions.addErrorAlert(resultErrorMessage);
      return;
    }
  }

  return (
    <>
      <h1>Регистрация</h1>

      <div>
        <div className={styles.inputs}>
          <section className={styles.inputBody}>
            <p>Почта:</p>
            <input
              type="email"
              placeholder="Введите почту..."
              value={email}
              onChange={(e) => dataActions.setNewEmail(e.target.value)}
              className={`${styles.input} ${emailError ? styles.errorInput : ""}`}
            />
          </section>

          <section className={styles.inputBody}>
            <p>Пароль:</p>
            <input
              type="password"
              placeholder="Введите пароль..."
              value={password}
              onChange={(e) => dataActions.setNewPassword(e.target.value)}
              className={`${styles.input} ${passwordError ? styles.errorInput : ""}`}
            />
          </section>

          <section className={styles.inputBody}>
            <p>Юзернейм:</p>
            <input
              type="text"
              placeholder="Введите юзернейм..."
              value={username}
              onChange={(e) => dataActions.setNewUsername(e.target.value)}
              className={`${styles.input} ${usernameError ? styles.errorInput : ""}`}
            />
          </section>
        </div>

        <div className={styles.buttons}>
          <button onClick={() => sendData(email, password, username)}>
            Регистрация
          </button>

          <p className={styles.miniButtonBody}>
            <button onClick={sectionActions.setAuthType}>
              Войти в аккаунт
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegistrationSection;
