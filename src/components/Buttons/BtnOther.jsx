import styles from "./BtnOther.module.scss";
import img from "../../images/arrowWhite.png";
import PropTypes from "prop-types";
import { useState } from "react";
import Callback from "../Callback/Callback";

const BtnOther = ({ text }) => {
  const [show, setShow] = useState(false);

  const toggleDetails = () => {
    setShow(!show);
  };

  return (
    <>
      <button className={styles.btn} onClick={toggleDetails}>
        <p className={styles.btn__text}>{text}</p>
        <div className={styles.btn__img}>
          <img src={img} alt="" />
        </div>
      </button>
      {show && <Callback toggleDetails={toggleDetails} />}
    </>
  );
};


BtnOther.propTypes = {
  text: PropTypes.node,
};

export default BtnOther;
