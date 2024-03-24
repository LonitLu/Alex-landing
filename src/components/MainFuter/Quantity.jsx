import styles from "./StylesFoter.module.scss";
import DateSum from "../../helpers/DateSum";
import useDeviceDetect from "../../helpers/useDeviceDetect";

const Quantity = () => {
  const { isMobile } = useDeviceDetect();
  const textDesktop = "техник для достижения целей";
  const textMobile = "техники";

  return (
    <div className={styles.inner}>
      <div className={styles.sum}>
        <div className={styles.tooltip}>Сумма цифровых значений даты</div>
        <DateSum />+
      </div>
      <div className={styles.text}>{isMobile ? textMobile : textDesktop}</div>
    </div>
  );
};

export default Quantity;
