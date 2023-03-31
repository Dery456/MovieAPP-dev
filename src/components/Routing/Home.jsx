import { useState, useEffect } from "react";

import CaruselBox from "../caruselBox/CaruselBox";
import Header from "../Header/Header";
import MainContent from "../Main/MainContent";
import PageFilms from "../Main/PageFilms";
import PromiseDe from "../PromiseDe";

import "./Home.scss";
import PagesCount from "../../UI/PagesCount";

const Home = () => {
  const API_TOKEN = "4c9256a4-f1db-437b-9d26-69752332dae8";
  const URL_TOP_MOVIES =
    "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=4";
  const URL_KINOPOISK =
    "https://kinopoiskapiunofficial.tech/documentation/api/main-page/";

  const URL_SERVER = "http://localhost:8000/";
  const URL_MAIN = "http://localhost:3000/";

  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    window.scrollTo({ top: 0 });
    const getMovies = async () => {
      try {
        const res = await fetch(
          `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${pages}`,
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
        const resData = await res.json();
        console.log(resData);
        setMovie(resData);
      } catch (err) {
        return <h1>Failed to fetch 402</h1>;
      }

      setIsLoading(false);
    };
    getMovies();
  }, [pages]);

  return (
    <div className="home">
      <Header />
      <h2 className="home__premier">Кино премьеры</h2>
      <CaruselBox />
      <h2 className="home__heroContent">Топ 250 фильмов</h2>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <PageFilms movie={movie} />
          <PagesCount
            setPages={setPages}
            pages={pages}
            maxPages={movie.pagesCount}
          />
        </>
      )}

      <PromiseDe />
    </div>
  );
};

export default Home;
