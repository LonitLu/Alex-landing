import styles from "./BtnWhite.module.scss";
import img from "../../images/arrowBlue.png";
import useDeviceDetect from "../../helpers/useDeviceDetect";

const BtnWhite = () => {
  // определяем тип устройства (мобильное или десктоп)
  const { isMobile } = useDeviceDetect();
  // В зависимости от типа устройства, текст кнопки меняется
  const textDesktop = "Записаться на консультацию";
  const textMobile = "Записаться";

  return (
    <button className={styles.btn}>
      <p className={styles.btn__text}>{isMobile ? textMobile : textDesktop}</p>
      <img className={styles.btn__img} src={img} alt="" />
    </button>
  );
};

export default BtnWhite;
