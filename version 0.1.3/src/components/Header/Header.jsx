import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Header.module.scss";
import { Button } from "react-bootstrap";
import { FaBars, FaFilm, FaXmark } from "react-icons/fa";

const Header = (props) => {
  const { setSearch, setLinkFilm, setStartLoad, setPages } = props;

  const [clickBurger, setClickBurger] = useState(false);

  return (
    <>
      <div className={style.header}>
        <Link to={"/MovieAPP"} className={style.header__brand}>
          Смотри че нашёл <FaFilm />
        </Link>
        <form
          className={style.header__search}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Посик"
            onChange={(e) => setLinkFilm(e.target.value)}
          />
          <Button
            type="submit"
            className="buttonActive"
            onClick={() => {
              setSearch(true);
              setStartLoad(true);
              setPages(1);
            }}
          >
            Search
          </Button>
        </form>
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
        <ul className={style.mobileMenu}>
          <li>Скоро</li>
          <li>
            <a href="https://vk.me/moneysend/kroshechkin1" target="_blank">
              Донат
            </a>
          </li>
        </ul>
      )}
    </>
  );
};

export default Header;
