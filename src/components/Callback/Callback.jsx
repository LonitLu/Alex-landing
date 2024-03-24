import styles from "./Callback.module.scss";
import img from "../../images/exit.svg";
import BtnForm from "../Buttons/BtnForm";
import PropTypes from "prop-types";

const Callback = ({ toggleDetails }) => {
  const handleClose = () => {
    toggleDetails();
  };

  return (
    <div className={styles.callback}>
      <img
        className={styles.exit}
        src={img}
        alt="Закрыть"
        onClick={handleClose}
      />
      <h2 className={styles.title}>
        Закажите <br />
        обратный звонок
      </h2>

      <form className={styles.form} action="">
        <label htmlFor="name">
          <input
            className={styles.input}
            type="text"
            id="name"
            name="name"
            placeholder="ИМЯ"
          />
        </label>

        <label htmlFor="tel">
          <input
            className={styles.input}
            type="tel"
            id="tel"
            name="tel"
            placeholder="ТЕЛЕФОН"
          />
        </label>

        <label className={styles.checkbox}>
          <input type="checkbox" name="agree" />
          <span>Согласен на сохранение и обработку персональных данных</span>
        </label>
      </form>
      <BtnForm text="Заказать обратный звонок" />
    </div>
  );
};

Callback.propTypes = {
  toggleDetails: PropTypes.node,
};

export default Callback;
