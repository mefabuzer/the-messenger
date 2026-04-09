import { useRegistrationSectionStore } from "../../../stores/useRegistrationSectionStore";
import styles from "./MainSection.module.scss";

const RestoreSection = () => {
  const { setAuthType } = useRegistrationSectionStore((state) => state);

  return (
    <>
      <h1>Войти в аккаунт</h1>

      <form action="" method="">
        <div className={styles.inputs}>
          <section className={styles.inputBody}>
            <p>Почта:</p>
            <input type="email" placeholder="Введите почту..." />
          </section>

          <section className={styles.inputBody}>
            <p>Новый пароль:</p>
            <input type="password" placeholder="Введите новый пароль..." />
          </section>

          <section className={styles.inputBody}>
            <p>Код из сообщения:</p>
            <input type="password" placeholder="Введите код из сообщения..." />
          </section>
        </div>
        <div className={styles.buttons}>
          <button onSubmit={() => true}>Изменить пароль</button>
          <p>
            <button onClick={setAuthType}>Войти в аккаунт</button>
          </p>
        </div>
      </form>
    </>
  );
};

export default RestoreSection;
