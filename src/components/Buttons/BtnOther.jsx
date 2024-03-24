import styles from "./BtnOther.module.scss";
import img from "../../images/arrowWhite.png";
import PropTypes from "prop-types";
import { useState } from "react";
import Callback from "../Callback/Callback";
import Blur from "../Blur/Blur";

const BtnOther = ({ text }) => {
  const [show, setShow] = useState(false);

  const toggleDetails = () => {
    setShow(!show);
  };

  return (
    <>
      <button className={styles.btn} onClick={toggleDetails}>
        <p className={styles.btn__text}>{text}</p>
        <img className={styles.btn__img} src={img} alt="" />
      </button>
      {show && <Callback toggleDetails={toggleDetails} />}
      {show && <Blur toggleDetails={toggleDetails} />}
    </>
  );
};

BtnOther.propTypes = {
  text: PropTypes.node,
  toggleDetails: PropTypes.func,
};

export default BtnOther;
