import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./Header.module.scss";

const Header = (props) => {
  const { search, setSearch, setClick, setLinkFilm, setStartLoad, setPages } =
    props;

  return (
    <div className={style.header}>
      <Link to={"./"} className={style.header__brand}>
        Move app
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
        <button
          type="submit"
          className="btn"
          onClick={() => {
            setSearch(true);
            setStartLoad(true);
            setPages(1);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
