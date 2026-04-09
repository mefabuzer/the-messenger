import styles from "./RegistrationSection.module.scss";

const RegistrationSection = () => {
  return (
    <section className={styles.body}>
      <h1>Регистрация</h1>
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

          <section className={styles.inputBody}>
            <p>Никнейм:</p>
            <input type="text" placeholder="Введите никнейм..." />
          </section>
        </div>
        <div className={styles.buttons}>
          <button onSubmit={() => true}>Регистрация</button>
          <p>
            <a href="https://google.com">Войти в аккаунт</a>
            <span> | </span>
            <a href="https://google.com">Восстановить</a>
          </p>
        </div>
      </form>
    </section>
  );
};

export default RegistrationSection;
