import styles from "./Header.module.scss";
import logoImg from "../../images/logo.svg";
import phoneImg from "../../images/phone.svg";
import MenuMobile from "./MenuMobile/MenuMobile";

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#">
        <img src={logoImg} alt="Логотип" />
      </a>

      <nav className={styles.nav}>
        <ul>
          <li className={styles.nav__item}>
            <a href="#">Обо мне</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">Наставничество</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">Мероприятия</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">Кейсы</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">Отзывы</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </nav>

      <ul className={styles.nav__right}>
        <MenuMobile />

        <li>
          <a href="tel:+73451233445">
            <img src={phoneImg} alt="телефон: +73451233445" />
          </a>
        </li>
        <li>
          <a className={styles.phone__num} href="tel:+73451233445">
            8-345-123-34-45
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
