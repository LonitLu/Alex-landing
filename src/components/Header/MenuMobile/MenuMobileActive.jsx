import "./MenuMobileActive.scss";
import PropTypes from "prop-types";


const MenuMobileActive = ({ addClass }) => {
  return (
    <>
      <nav className={`nav__mobile ${addClass}`}>
        <ul>
          <li className="nav__item">
            <a href="#">Обо мне</a>
          </li>
          <li className="nav__item">
            <a href="#">Наставничество</a>
          </li>
          <li className="nav__item">
            <a href="#">Мероприятия</a>
          </li>
          <li className="nav__item">
            <a href="#">Кейсы</a>
          </li>
          <li className="nav__item">
            <a href="#">Отзывы</a>
          </li>
          <li className="nav__item">
            <a href="#">Контакты</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

MenuMobileActive.propTypes = {
  addClass: PropTypes.func,
};

export default MenuMobileActive;
