import styles from "./BtnWhite.module.scss";
import img from "../../images/arrowBlue.png";

const BtnWhite = () => {
  return (
    <button className={styles.btn}>
      <p className={styles.btn__text}>Записаться на консультацию</p>
      <div className={styles.btn__img}>
        <img src={img} alt="" />
      </div>
    </button>
  );
};

export default BtnWhite;
