import stylesForm from "./BtnForm.module.scss";
import img from "../../images/arrowWhite.png";
import PropTypes from "prop-types";
import { useState } from "react";
import CallbackEnd from "../CallbackEnd/CallbackEnd";

const BtnForm = ({ text }) => {
  // хука useState используется для управления видимостью элементов.
  const [show, setShow] = useState(false);

  const toggleDetails = () => {
    setShow(!show);
  };

  return (
    <>
      <button className={stylesForm.btn} onClick={toggleDetails}>
        <p className={stylesForm.btn__text}>{text}</p>
        <img className={stylesForm.btn__img} src={img} alt="" />
      </button>
      {/* Когда `show` равно `true`, компонент будет отображен на
      странице */}
      {show && <CallbackEnd toggleDetails={toggleDetails} />}
    </>
  );
};

BtnForm.propTypes = {
  text: PropTypes.node,
};

export default BtnForm;
