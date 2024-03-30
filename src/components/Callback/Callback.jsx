import styles from "./Callback.module.scss";
import img from "../../images/exit.svg";
import BtnForm from "../Buttons/BtnForm";
import PropTypes from "prop-types";
import "./Callback.scss";

const Callback = ({ removeClass, addClass }) => {
  //функция handleClose, которая вызывает функцию removeClass при закрытии модального окна.
  const handleClose = () => {
    removeClass();
  };

  return (
    <>
      <div className={`${styles.callback} ${addClass}`}>
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
    </>
  );
};

Callback.propTypes = {
  removeClass: PropTypes.func,
  addClass: PropTypes.string,
};

export default Callback;
