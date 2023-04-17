import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import { FaFilm } from "react-icons/fa";
import NavBarBox from "../Main/NavBarBox";

const Header = (props) => {
  const [clickBurger, setClickBurger] = useState(false);

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
    <>
      <div className={style.header}>
        <Link to={"/MovieAPP"} className={style.header__brand}>
          Смотри че нашёл <FaFilm />
        </Link>
        <NavBarBox />
        <div
          className={`${style.burger}  ${clickBurger ? style.active : ""}`}
          onClick={() => {
            setClickBurger(clickBurger ? false : true);
            if (!clickBurger) {
              document.body.classList.add("lock");
            } else {
              document.body.classList.remove("lock");
            }
          }}
        >
          <span></span>
        </div>
      </div>
      {clickBurger && (
        <div className={style.mobileMenu}>
          <ul className={style.navBar__link}>
            <li>
              <Link
                to={"./podborka"}
                className={style.navBar__linkItem}
                onClick={() => {
                  setClickBurger(false);
                  document.body.classList.remove("lock");
                }}
              >
                Подборка
              </Link>
            </li>
            <li>
              <Link
                to={"./top250"}
                className={style.navBar__linkItem}
                onClick={() => {
                  setClickBurger(false);
                  document.body.classList.remove("lock");
                }}
              >
                Топ 250 фильмов
              </Link>
            </li>

            <li>
              <Link
                to={"./premieres"}
                className={style.navBar__linkItem}
                onClick={() => {
                  setClickBurger(false);
                  document.body.classList.remove("lock");
                }}
              >
                Кино премьеры
              </Link>
            </li>
            <li>
              <Link
                to={`./films/${bundleFilms[Math.round(Math.random() * 10)]}`}
                onClick={() => {
                  setClickBurger(false);
                  document.body.classList.remove("lock");
                }}
                className={style.navBar__linkItem}
              >
                Случайный фильм
              </Link>
            </li>
            <li>
              <Link
                to={"./search"}
                className={style.navBar__linkItem}
                onClick={() => {
                  setClickBurger(false);
                  document.body.classList.remove("lock");
                }}
              >
                Поиск
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
