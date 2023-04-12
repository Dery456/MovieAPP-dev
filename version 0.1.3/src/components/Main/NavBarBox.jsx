import { Link, NavLink } from "react-router-dom";
import style from "./NavBarBox.module.scss";

const NavBarBox = () => {
  return (
    <nav className={style.navBar}>
      <ul className={style.navBar__link}>
        <li>
          <NavLink to={"."} className={style.navBar__linkItem}>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to={"./podborka"} className={style.navBar__linkItem}>
            Подборка
          </NavLink>
        </li>
        <li>
          <NavLink to={"./top250"} className={style.navBar__linkItem}>
            Топ 250 фильмов
          </NavLink>
        </li>

        <li>
          <NavLink to={"./premieres"} className={style.navBar__linkItem}>
            Кино премьеры
          </NavLink>
        </li>
        <li>
          <NavLink to={"./random_movie"} className={style.navBar__linkItem}>
            Случайный фильм
          </NavLink>
        </li>
        <li>
          <NavLink to={"./"} className={style.navBar__linkItem}>
            Поиск
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarBox;
