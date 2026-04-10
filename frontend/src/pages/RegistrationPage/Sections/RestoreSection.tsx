import { useEffect, useState } from "react";
import { useRegistrationSectionStore } from "@stores/useRegistrationSectionStore";
import styles from "./MainSection.module.scss";
import { useRestoreDataStore } from "@stores/useRestoreDataStore";

const RestoreSection = () => {
  const { actions: sectionActions } = useRegistrationSectionStore(
    (state) => state,
  );

  const [isFirst, setIsFirst] = useState(true);

  function onSendCode(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    setIsFirst(false);
  }

  const {
    email,
    password,
    code,

    actions: dataActions,
  } = useRestoreDataStore((state) => state);

  useEffect(() => {
    return () => {
      dataActions.setDefault();
    };
  }, []);

  return (
    <>
      <h1>Восстановить пароль</h1>

      <form action="" method="">
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
            <p>Новый пароль:</p>
            <input
              type="password"
              placeholder="Введите новый пароль..."
              value={password}
              onChange={(e) => dataActions.setNewPassword(e.target.value)}
            />
          </section>

          <section className={styles.inputBody}>
            <p>Код из сообщения:</p>
            <input
              type="password"
              placeholder="Введите код из сообщения..."
              value={code}
              onChange={(e) => dataActions.setNewCode(e.target.value)}
            />

            <p className={styles.miniButtonBody}>
              <button onClick={(e) => onSendCode(e)}>
                {isFirst ? "Отправить код на почту" : "Отправить код повторно"}
              </button>
            </p>
          </section>
        </div>

        <div className={styles.buttons}>
          <button onSubmit={() => true}>Изменить пароль</button>

          <p className={styles.miniButtonBody}>
            <button onClick={sectionActions.setAuthType}>
              Войти в аккаунт
            </button>
          </p>
        </div>
      </form>
    </>
  );
};

export default RestoreSection;
