import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#">
        <img src="src/images/logo.svg" alt="Логотип" />
      </a>
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="#">Обо мне</a>
          </li>
          <li>
            <a href="#">Наставничество</a>
          </li>
          <li>
            <a href="#">Мероприятия</a>
          </li>
          <li>
            <a href="#">Кейсы</a>
          </li>
          <li>
            <a href="#">Отзывы</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </nav>
      <ul className={styles.phone}>
        <li>
          <a href="tel:+73451233445">
            <img src="src/images/phone.svg" alt="телефон: +73451233445" />
          </a>
        </li>
        <li>
          <a className={styles.phone__num} href="tel:+73451233445">8-345-123-34-45</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
