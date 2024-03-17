import styles from "./StylesFoter.module.scss";
import DateSum from "../../halpers/DateSum";

const Quantity = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.sum}>
        <div className={styles.tooltip}>Сумма цифровых значений даты</div>
        <DateSum />
      </div>
      <div className={styles.text}>техник для достижения целей</div>
    </div>
  );
};

export default Quantity;
