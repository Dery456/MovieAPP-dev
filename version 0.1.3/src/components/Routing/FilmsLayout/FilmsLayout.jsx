import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import style from "./../Home/Home.module.scss";
import styleMain from "./FilmsLayout.module.scss";

import Header from "../../Header/Header";
import PageFilms from "../../Main/PageFilms";
import PagesCount from "../../../UI/PagesCount";

import getMovies from "../../../Functions/getMovies";
import { useContext } from "react";
import TestContext from "../../../context/TestContext";

const FilmsLayout = () => {
  const test = useContext(TestContext);
  console.log(test);

  const params = useParams();

  const [info, setInfo] = useState();
  const [movie, setMovie] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState(1);
  const [linkFilm, setLinkFilm] = useState();

  const API_TOKEN = "4c9256a4-f1db-437b-9d26-69752332dae8";
  const URLS_OBJ = {
    top250: `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${pages}`,
    podborka: `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${pages}`,
    random_movie: `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${pages}`,
    premieres: `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2023&month=MARCH`,
  };

  function definitionName(location) {
    switch (location) {
      case "top250":
        setInfo("ТОП 250");
        break;
      case "podborka":
        setInfo("Подборка");
        break;
      case "premieres":
        setInfo("Премьеры");
        break;
      case "random_movie":
        setInfo("Случайный фильм");
        break;
    }
  }

  const URL_PODBORKA = "";

  //definitionLocation(info);
  useEffect(() => {
    setIsLoading(true);

    definitionName(params.slug);

    window.scrollTo({ top: 0 });
    getMovies(URLS_OBJ[params.slug], setMovie, setIsLoading, API_TOKEN);
  }, [pages, params]);

  return (
    <div>
      <Header />
      <div className={style.home__heroBox}>
        <h2 className={style.home__heroContent}>{info}</h2>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <PageFilms movie={movie} />
          <PagesCount
            total={movie.total ? movie.total : 21}
            setPages={setPages}
            pages={pages}
            maxPages={movie.totalPages || movie.pagesCount}
          />
        </>
      )}
    </div>
  );
};

export default FilmsLayout;
