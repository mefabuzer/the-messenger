import styles from "./RegistrationPage.module.scss";
import background from "../../utils/icons/background_image_registration_page.png";
import RegistrationSection from "./RegistrationSection/RegistrationSection";

const RegistrationPage = () => {
  return (
    <main className={styles.page}>
      <img src={background} alt="Фоновое изображение" />

      <RegistrationSection />
    </main>
  );
};

export default RegistrationPage;
