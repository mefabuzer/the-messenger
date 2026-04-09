import { useRegistrationSectionStore } from "../../../stores/useRegistrationSectionStore";
import styles from "./MainSection.module.scss";

const AuthSection = () => {
  const { setRegistrationType, setRestoreType } = useRegistrationSectionStore(
    (state) => state,
  );

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
            <p>Пароль:</p>
            <input type="password" placeholder="Введите пароль..." />
          </section>
        </div>
        <div className={styles.buttons}>
          <button onSubmit={() => true}>Войти</button>
          <p>
            <button onClick={setRegistrationType}>Зарегистрироваться</button>
            <span> | </span>
            <button onClick={setRestoreType}>Восстановить</button>
          </p>
        </div>
      </form>
    </>
  );
};

export default AuthSection;
