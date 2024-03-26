import stylesForm from "./BtnForm.module.scss";
import img from "../../images/arrowWhite.png";
import PropTypes from "prop-types";
import { useState } from "react";
import CallbackEnd from "../CallbackEnd/CallbackEnd";
// import Callback from "../Callback/Callback";

const BtnForm = ({ text }) => {
  const [show, setShow] = useState(false);

  const toggleDetails = () => {
    setShow(!show);
  };

  // const toggleDetailsFalse = () => {
  //   setShow(false);
  // };

  return (
    <>
      <button className={stylesForm.btn} onClick={toggleDetails}>
        <p className={stylesForm.btn__text}>{text}</p>
        <img className={stylesForm.btn__img} src={img} alt="" />
      </button>
      {show && <CallbackEnd toggleDetails={toggleDetails} />}
      {/* {show && <Callback toggleDetails={toggleDetailsFalse} />} */}
    </>
  );
};

BtnForm.propTypes = {
  text: PropTypes.node,
};

export default BtnForm;
