import KurseGbr from "../../halpers/KurseGbr";
import styles from "./StylesFoter.module.scss";

const Percent = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.sum}>
        <div className={styles.tooltip}>число равно курсу &quot;GBP&quot;</div>
        <KurseGbr />
      </div>
      <div className={styles.text}>увеличение личной продуктивности</div>
    </div>
  );
};

export default Percent;
