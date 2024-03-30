import BtnOther from "../Buttons/BtnOther";
import BtnWhite from "../Buttons/BtnWhite";
import Percent from "../MainFuter/Percent";
import Quantity from "../MainFuter/Quantity";
import styles from "./Main.module.scss";
import mentorImg from "../../images/mentor.png";
import useDeviceDetect from "../../helpers/useDeviceDetect";
import MenuMobileActive from "../Header/MenuMobile/MenuMobileActive";
import Callback from "../Callback/Callback";

const Main = () => {
  // определяем тип устройства (мобильное или десктоп)
  const { isMobile } = useDeviceDetect();
  // В зависимости от типа устройства, текст меняется
  const textDesktop =
    "Когда ваше время и энергия лучше сфокусированы, стремление к новым возможностям становится реальностью,  ваш успех зависит от ваших действий";
  const textMobile = "Ваш успех зависит от ваших действий";

  const textDesktopBtn = "Бесплатная консультация";
  const textMobileBtn = "Заказать звонок";

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.title}>Создаю условия для вашего успеха</h1>
        <p className={styles.text}>{isMobile ? textMobile : textDesktop}</p>
        <div className={styles.buttons}>
          <BtnWhite />
          <BtnOther text={isMobile ? textMobileBtn : textDesktopBtn} />
        </div>
        <div className={styles.main__futer}>
          <Quantity />
          <Percent />
        </div>
      </div>
      <img className={styles.mentor} src={mentorImg} alt="Ментор" />
      <MenuMobileActive />
      <Callback />
    </main>
  );
};

export default Main;
