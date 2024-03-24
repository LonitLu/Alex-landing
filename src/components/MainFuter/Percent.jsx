import KurseGbr from "../../helpers/KurseGbr";
import useDeviceDetect from "../../helpers/useDeviceDetect";
import styles from "./StylesFoter.module.scss";

const Percent = () => {
  const { isMobile } = useDeviceDetect();
  const textDesktop = "увеличение личной продуктивности";
  const textMobile = "продуктивности";

  return (
    <div className={styles.inner}>
      <div className={styles.sum}>
        <div className={styles.tooltip}>число равно курсу &quot;GBP&quot;</div>
        <KurseGbr />%
      </div>
      <div className={styles.text}>{isMobile ? textMobile : textDesktop}</div>
    </div>
  );
};

export default Percent;
