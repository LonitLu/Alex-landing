import styles from "./BtnOther.module.scss";
import img from "../../images/arrowWhite.png";
import PropTypes from "prop-types";
import { useState } from "react";
import Callback from "../Callback/Callback";
import BlurForm from "../Blur/BlurForm";

const BtnOther = ({ text }) => {
  // хука useState используется для управления видимостью элементов.
  const [show, setShow] = useState(false);

  const toggleDetails = () => {
    setShow(!show);
  };

  const removeClass = () => {
    setShow(false);
  };

  return (
    <>
      <button className={styles.btn} onClick={toggleDetails}>
        <p className={styles.btn__text}>{text}</p>
        <img className={styles.btn__img} src={img} alt="" />
      </button>
      <Callback
        // управляет классами компонента на основе значений переменных `show` и `removeClass`
        addClass={show ? "callbackActive" : ""}
        removeClass={removeClass}
      />
      {/* Когда `show` равно `true`, компонент будет отображен на
      странице */}
      {show && <BlurForm toggleDetails={toggleDetails} />}
    </>
  );
};

BtnOther.propTypes = {
  text: PropTypes.node,
  toggleDetails: PropTypes.func,
};

export default BtnOther;
