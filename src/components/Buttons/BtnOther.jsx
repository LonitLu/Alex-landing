import styles from "./BtnOther.module.scss";
import img from "../../images/arrowWhite.png";

const BtnOther = () => {
  return (
    <button className={styles.btn}>
      <p className={styles.btn__text}>Бесплатная консультация</p>
      <div className={styles.btn__img}>
        <img src={img} alt="" />
      </div>
    </button>
  );
};

export default BtnOther;
