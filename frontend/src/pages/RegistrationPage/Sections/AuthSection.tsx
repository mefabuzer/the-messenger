import { useEffect } from "react";
import { useAuthDataStore } from "@stores/useAuthDataStore";
import { useRegistrationSectionStore } from "@stores/useRegistrationSectionStore";
import styles from "./MainSection.module.scss";

const AuthSection = () => {
  const { actions: sectionActions } = useRegistrationSectionStore(
    (state) => state,
  );

  const {
    email,
    password,

    actions: dataActions,
  } = useAuthDataStore((state) => state);

  useEffect(() => {
    return () => {
      dataActions.setDefault();
    };
  }, []);

  return (
    <>
      <h1>Войти в аккаунт</h1>

      <div>
        <div className={styles.inputs}>
          <section className={styles.inputBody}>
            <p>Почта:</p>
            <input
              type="email"
              placeholder="Введите почту..."
              value={email}
              onChange={(e) => dataActions.setNewEmail(e.target.value)}
            />
          </section>

          <section className={styles.inputBody}>
            <p>Пароль:</p>
            <input
              type="password"
              placeholder="Введите пароль..."
              value={password}
              onChange={(e) => dataActions.setNewPassword(e.target.value)}
            />
          </section>
        </div>

        <div className={styles.buttons}>
          <button onSubmit={() => true}>Войти</button>

          <p className={styles.miniButtonBody}>
            <button onClick={sectionActions.setRegistrationType}>
              Зарегистрироваться
            </button>

            <span> | </span>

            <button onClick={sectionActions.setRestoreType}>
              Восстановить
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default AuthSection;
