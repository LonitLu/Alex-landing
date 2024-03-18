import styles from "./BtnOther.module.scss";
import img from "../../images/arrowWhite.png";
import PropTypes from "prop-types";

const BtnOther = ({ text }) => {
  return (
    <button className={styles.btn}>
      <p className={styles.btn__text}>{text}</p>
      <div className={styles.btn__img}>
        <img src={img} alt="" />
      </div>
    </button>
  );
};

BtnOther.propTypes = {
  text: PropTypes.node,
};

export default BtnOther;
