import "./MenuMobileActive.scss";
import PropTypes from "prop-types";


const MenuMobileActive = ({ addClass }) => {
  return (
    <>
      <nav className={`nav__mobile ${addClass}`}>
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
    </>
  );
};

MenuMobileActive.propTypes = {
  addClass: PropTypes.func,
};

export default MenuMobileActive;
