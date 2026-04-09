import styles from "./RegistrationPage.module.scss";
import background from "../../utils/icons/background_image_registration_page.png";
import MainSection from "./Sections/MainSection";

const RegistrationPage = () => {
  return (
    <main className={styles.page}>
      <img src={background} alt="Фоновое изображение" />

      <MainSection />
    </main>
  );
};

export default RegistrationPage;
