import styles from "./BtnOther.module.scss";
import img from "../../images/arrowWhite.png";
import PropTypes from "prop-types";
import { useState } from "react";
import Callback from "../Callback/Callback";
import useDeviceDetect from "../../halpers/useDeviceDetect";

const BtnOther = ({ text }) => {
  const { isMobile } = useDeviceDetect();
  const textDesktop = "Бесплатная консультация";
  const textMobile = "Заказать звонок";

  const [show, setShow] = useState(false);

  const toggleDetails = () => {
    setShow(!show);
  };

  return (
    <>
      <button className={styles.btn} onClick={toggleDetails}>
        <p className={styles.btn__text}>{isMobile ? textMobile : textDesktop}</p>
        <img className={styles.btn__img} src={img} alt="" />
      </button>
      {show && <Callback toggleDetails={toggleDetails} />}
    </>
  );
};

BtnOther.propTypes = {
  text: PropTypes.node,
};

export default BtnOther;
