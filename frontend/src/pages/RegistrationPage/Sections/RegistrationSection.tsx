import { useRegistrationSectionStore } from "../../../stores/useRegistrationSectionStore";
import { useRegistrationDataStore } from "../../../stores/useRegistrationDataStore";
import styles from "./MainSection.module.scss";
import { useEffect } from "react";

const RegistrationSection = () => {
  const { setAuthType } = useRegistrationSectionStore((state) => state);

  const {
    email,
    nickname,
    password,
    setNewEmail,
    setNewNickname,
    setNewPassword,
    setDefault,
  } = useRegistrationDataStore((state) => state);

  useEffect(() => {
    return () => {
      setDefault();
    };
  }, []);

  return (
    <>
      <h1>Регистрация</h1>

      <form action="" method="">
        <div className={styles.inputs}>
          <section className={styles.inputBody}>
            <p>Почта:</p>
            <input
              type="email"
              placeholder="Введите почту..."
              value={email}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </section>

          <section className={styles.inputBody}>
            <p>Пароль:</p>
            <input
              type="password"
              placeholder="Введите пароль..."
              value={password}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </section>

          <section className={styles.inputBody}>
            <p>Никнейм:</p>
            <input
              type="text"
              placeholder="Введите никнейм..."
              value={nickname}
              onChange={(e) => setNewNickname(e.target.value)}
            />
          </section>
        </div>
        <div className={styles.buttons}>
          <button onSubmit={() => true}>Регистрация</button>
          <p>
            <button onClick={setAuthType}>Войти в аккаунт</button>
          </p>
        </div>
      </form>
    </>
  );
};

export default RegistrationSection;
