import BtnOther from "../Buttons/BtnOther";
import BtnWhite from "../Buttons/BtnWhite";
import Percent from "../MainFuter/Percent";
import Quantity from "../MainFuter/Quantity";
import styles from "./Main.module.scss";
import mentorImg from "../../images/mentor.png";


const Main = () => {

  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.title}>Создаю условия для вашего успеха</h1>
        <p>
          Когда ваше время и энергия лучше сфокусированы, стремление к новым
          возможностям становится реальностью, ваш успех зависит от ваших
          действий
        </p>

        <div className={styles.buttons}>
          <BtnWhite />
          <BtnOther text="Бесплатная консультация" />
        </div>

        <div className={styles.main__futer}>
          <Quantity />
          <Percent />
        </div>
      </div>
      <div className={styles.mentor}>
        <img src={mentorImg} alt="Ментор" />
      </div>
    </main>
  );
};

export default Main;
