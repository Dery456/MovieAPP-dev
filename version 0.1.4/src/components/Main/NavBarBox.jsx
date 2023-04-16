import { Link, NavLink } from "react-router-dom";
import style from "./NavBarBox.module.scss";

const NavBarBox = () => {
  const bundleFilms = [
    "1267348",
    "4368100",
    "4448519",
    "762738",
    "1318868",
    "1143242",
    "1392550",
    "840821",
    "361",
    "1009536",
    "1332213",
  ];

  return (
    <nav className={style.navBar}>
      <ul className={style.navBar__link}>
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
          <NavLink
            to={`./films/${bundleFilms[Math.round(Math.random() * 10)]}`}
            className={style.navBar__linkItem}
          >
            Случайный фильм
          </NavLink>
        </li>
        <li>
          <NavLink to={"./search"} className={style.navBar__linkItem}>
            Поиск
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarBox;
