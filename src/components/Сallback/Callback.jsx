import styles from "./Callback.module.scss";
import img from "../../images/exit.svg";
import BtnOther from "../Buttons/BtnOther";

const Callback = () => {
  return (
    <div className={styles.Callback}>
      <img className={styles.exit} src={img} alt="Закрыть" />
      <h2 className={styles.title}>Закажите обратный звонок</h2>

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
      <BtnOther text="Заказать обратный звонок" />
    </div>
  );
};

export default Callback;
