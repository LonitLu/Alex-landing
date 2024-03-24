import styles from "./CallbackEnd.module.scss";
import img from "../../images/exit.svg";
import logoImg from "../../images/logo.svg";
import PropTypes from "prop-types";

const CallbackEnd = ({ toggleDetails }) => {
  const handleClose = () => {
    toggleDetails();
  };

  return (
    <div className={styles.callbackEnd}>
      <img
        className={styles.exit}
        src={img}
        alt="Закрыть"
        onClick={handleClose}
      />
      <h4>Спасибо за заявку</h4>
      <p>Я обязательно свяжусь с вами в ближайшее время.</p>
      <a className={styles.logo} href="#">
        <img src={logoImg} alt="Логотип" />
      </a>
    </div>
  );
};

CallbackEnd.propTypes = {
  toggleDetails: PropTypes.func,
};

export default CallbackEnd;
