import KurseGbr from "../../helpers/KurseGbr";
import useDeviceDetect from "../../helpers/useDeviceDetect";
import styles from "./StylesFoter.module.scss";

const Percent = () => {
  // определяем тип устройства (мобильное или десктоп)
  const { isMobile } = useDeviceDetect();
  // В зависимости от типа устройства, текст меняется
  const textDesktop = "увеличение личной продуктивности";
  const textMobile = "продуктивности";

  return (
    <div className={styles.inner}>
      <div className={styles.sum}>
        {/* &quot;GBP&quot;==="GBR" &quot обозначение символа "двойные кавычки"*/}
        <div className={styles.tooltip}>число равно курсу &quot;GBP&quot;</div>
        <KurseGbr />%
      </div>
      <div className={styles.text}>{isMobile ? textMobile : textDesktop}</div>
    </div>
  );
};

export default Percent;
