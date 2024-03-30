import styles from "./Callback.module.scss";
import img from "../../images/exit.svg";
import BtnForm from "../Buttons/BtnForm";
import PropTypes from "prop-types";
import "./Callback.scss";
import { useEffect, useState } from "react";

const Callback = ({ removeClass, addClass }) => {
  //функция handleClose, которая вызывает функцию removeClass при закрытии модального окна.
  const handleClose = () => {
    removeClass();
  };
  // валидация формы
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameActive, setNameActive] = useState(false);
  const [phoneActive, setPhoneActive] = useState(false);
  const [nameError, setNameError] = useState("Введите имя");
  const [phoneError, setPhoneError] = useState("Введите номер");
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (nameError || phoneError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [nameError, phoneError]);

  const nameHandler = (e) => {
    setName(e.target.value);
    const validName = /^[а-яА-ЯёЁa-zA-Z]+$/;
    if (!validName.test(String(e.target.value).toLowerCase())) {
      setNameError("Не корректное имя");
      if (!e.target.value) {
        setNameError("Введите имя");
      }
    } else {
      setNameError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setNameActive(true);
        break;
      case "phone":
        setPhoneActive(true);
        break;
    }
  };

  const phoneHandler = (e) => {
    setPhone(e.target.value);
    const validPhone = /^[0-9]*$/;
    if (
      e.target.value.length < 3 ||
      e.target.value.length > 15 ||
      !validPhone.test(Number(e.target.value))
    ) {
      setPhoneError("Не корректный номер");
      if (!e.target.value) {
        setPhoneError("Введите номер");
      }
    } else {
      setPhoneError("");
    }
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
            {nameActive && nameError && (
              <div className={styles.input__error}>{nameError}</div>
            )}
            <input
              onChange={(e) => nameHandler(e)}
              value={name}
              onBlur={(e) => blurHandler(e)}
              className={styles.input}
              type="text"
              id="name"
              name="name"
              placeholder="ИМЯ"
            />
          </label>

          <label htmlFor="tel">
            {phoneActive && phoneError && (
              <div className={styles.input__error}>{phoneError}</div>
            )}

            <input
              onChange={(e) => phoneHandler(e)}
              value={phone}
              onBlur={(e) => blurHandler(e)}
              className={styles.input}
              type="tel"
              id="phone"
              name="phone"
              placeholder="ТЕЛЕФОН"
            />
          </label>

          <label className={styles.checkbox}>
            <input type="checkbox" name="agree" />
            <span>Согласен на сохранение и обработку персональных данных</span>
          </label>
        </form>
        <BtnForm btnDisabled={!formValid} text="Заказать обратный звонок" />
      </div>
    </>
  );
};

Callback.propTypes = {
  removeClass: PropTypes.func,
  addClass: PropTypes.string,
};

export default Callback;
