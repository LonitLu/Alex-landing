import BtnOther from "../Buttons/BtnOther";
import BtnWhite from "../Buttons/BtnWhite";
import Percent from "../MainFuter/Percent";
import Quantity from "../MainFuter/Quantity";
import styles from "./Main.module.scss";
import mentorImg from "../../images/mentor.png";
import useDeviceDetect from "../../halpers/useDeviceDetect";

const Main = () => {
  const { isMobile } = useDeviceDetect();
  const textDesktop =
    "Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью,  ваш успех зависит от ваших действий";
  const textMobile = "Ваш успех зависит от ваших действий";

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.title}>Создаю условия для вашего успеха</h1>
        <p className={styles.text}>{isMobile ? textMobile : textDesktop}</p>
        <div className={styles.buttons}>
          <BtnWhite />
          <BtnOther text="Бесплатная консультация" />
        </div>
        <div className={styles.main__futer}>
          <Quantity />
          <Percent />
        </div>
      </div>
      <img className={styles.mentor} src={mentorImg} alt="Ментор" />
    </main>
  );
};

export default Main;
