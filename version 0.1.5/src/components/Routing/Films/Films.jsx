/*

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import style from "./Films.module.scss";

import PageFilms from "./../../Main/PageFilms";
import PagesCount from "../../../UI/PagesCount";

const Films = () => {
  const API_TOKEN = "4c9256a4-f1db-437b-9d26-69752332dae8";
  const [linkFilm, setLinkFilm] = useState("");
  const [countPage, setcountPage] = useState(1);
  const [films, setFilms] = useState();
  const [click, setClick] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setIsLoading(true);
    const searchFilms = async () => {
      setClick(false);
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${linkFilm}&page=${countPage}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_TOKEN,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "X-Requested-With",
          },
        }
      );
      const data = await response.json();

      console.log(data);
      setFilms(data);
      setIsLoading(false);
    };
    searchFilms();
  }, [click, countPage]);

  function search(e) {
    e.preventDefault();
  }
  return (
    <div className={style.Films__content}>
      <div className={style.header}>
        <Link to={"../"} className="header__brand">
          Move app
        </Link>
        <form className="header__search" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Посик"
            onChange={(e) => setLinkFilm(e.target.value)}
          />
          <button
            type="submit"
            className="button"
            onClick={() => setClick(true)}
          >
            Search
          </button>
        </form>
      </div>

      <div className="container">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <>
            {
              pageCountFilm[pageCountFilm.length - 1] == 1
                ? `найден ${pageCountFilm} фильм`
                : pageCountFilm <p 5
                ? `найдено ${pageCountFilm} фильма`
                : `найдено ${pageCountFilm} фильмов`
                *}
            <p>результат {films.searchFilmsCountResult}</p>
            <PageFilms movie={films} />
            {films.pagesCount > 1 && (
              <PagesCount
                pages={countPage}
                setPages={setcountPage}
                maxPages={films.pagesCount}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

*/

const Films = () => {
  return <div>Films</div>;
};

export default Films;
