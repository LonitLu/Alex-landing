import stylesForm from "./BtnForm.module.scss";
import img from "../../images/arrowWhite.png";
import PropTypes from "prop-types";
// import { useState } from "react";
// import Callback from "../Callback/Callback";

const BtnOther = ({ text }) => {
  // const [show, setShow] = useState(false);

  // const toggleDetails = () => {
  //   setShow(!show);
  // };

  return (
    <>
      {/* <button className={stylesForm.btn} onClick={toggleDetails}> */}
      <button className={stylesForm.btn}>
        <p className={stylesForm.btn__text}>{text}</p>
        <img className={stylesForm.btn__img} src={img} alt="" />
      </button>
      {/* {show && <Callback toggleDetails={toggleDetails} />} */}
    </>
  );
};

BtnOther.propTypes = {
  text: PropTypes.node,
};

export default BtnOther;
