import styles from "./BtnWhite.module.scss";
import img from "../../images/arrowBlue.png";
import useDeviceDetect from "../../helpers/useDeviceDetect";

const BtnWhite = () => {
  const { isMobile } = useDeviceDetect();
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
