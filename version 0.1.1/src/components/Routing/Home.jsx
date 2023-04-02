import { useState, useEffect } from "react";

import "./Home.scss";

import CaruselBox from "../caruselBox/CaruselBox";
import Header from "../Header/Header";
import PageFilms from "../Main/PageFilms";
import PromiseDe from "../PromiseDe";
import PagesCount from "../../UI/PagesCount";

import countries from "../../data/countries";
import genere from "../../data/genres";
import FilterMain from "./FilterMain";
import { sortBy, typeBy } from "../../data/sortBy";

const Home = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState(1);
  const [startLoad, setStartLoad] = useState(false);

  const [linkApi, setLinkApi] = useState();

  //start search
  const [linkFilm, setLinkFilm] = useState();
  //end search

  //start FIlter
  const [search, setSearch] = useState(false);

  const [inputValueCountry, setInputValueCountry] = useState([]);
  const [inputValueGenre, setInputValueGenre] = useState([]);

  const [linkType, setLinkType] = useState("FILM");
  const [linkSort, setLinkSort] = useState("RATING");

  const [inputDropType, setInputDropType] = useState("Тип");
  const [inputDropSort, setInputDropSort] = useState("Сортирвоать по");

  const [firstRaiting, setFirstRaiting] = useState([1, 0]);
  const [lastRaiting, setLastRaiting] = useState(10);

  const [firstYear, setFirstYear] = useState([1950, 0]);
  const [lastYear, setLastYear] = useState(2023);

  const country = countries.find(
    (el) => el.country === inputValueCountry[inputValueCountry.length - 1]
  );
  const gener = genere.find(
    (el) => el.genre === inputValueGenre[inputValueGenre.length - 1]
  );

  // end filter

  //URL

  const API_TOKEN = "4c9256a4-f1db-437b-9d26-69752332dae8";
  const URL_TOP_MOVIES = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${pages}`;
  const URL_TOP_AWAIT = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_AWAIT_FILMS&page=${pages}`;
  const URL_TOP_HUN = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${pages}`;

  const URL_INDEX = `https://kinopoiskapiunofficial.tech/api/v2.2/films?${
    country ? `countries=${country.id}&` : ""
  }${
    gener ? `genres=${gener.id}&` : ""
  }order=${linkSort}&type=${linkType}&ratingFrom=${parseInt(
    firstRaiting[0]
  )}&ratingTo=${parseInt(lastRaiting)}&yearFrom=${parseInt(
    firstYear[0]
  )}&yearTo=${parseInt(lastYear)}${
    linkFilm ? `&keyword=${linkFilm}` : ""
  }&page=${pages}`;

  const URL_SERVER = "http://localhost:8000/";
  const URL_MAIN = "http://localhost:3000/";

  useEffect(() => {
    setSearch(false);
    setIsLoading(true);
    window.scrollTo({ top: 0 });
    const getMovies = async () => {
      try {
        const res = await fetch(startLoad ? URL_INDEX : URL_TOP_HUN, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_TOKEN,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "X-Requested-With",
          },
        });
        const resData = await res.json();
        console.log(resData);
        setMovie(resData);
      } catch (err) {
        return <h1>Failed to fetch 402</h1>;
      }

      setIsLoading(false);
    };
    getMovies();
  }, [pages, search]);

  return (
    <div className="home">
      <Header
        setSearch={setSearch}
        setLinkFilm={setLinkFilm}
        setLinkApi={setLinkApi}
        setStartLoad={setStartLoad}
        setPages={setPages}
      />
      <h2 className="home__premier">Кино премьеры</h2>
      <CaruselBox />
      <h2 className="home__heroContent">
        {linkFilm
          ? `${linkFilm}  ${movie.total ? `найдено${movie.total}` : ""}`
          : "Фильмы"}
      </h2>
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

      <FilterMain
        search={search}
        setSearch={setSearch}
        inputValueCountry={inputValueCountry}
        setInputValueCountry={setInputValueCountry}
        inputValueGenre={inputValueGenre}
        setInputValueGenre={setInputValueGenre}
        firstRaiting={firstRaiting}
        setFirstRaiting={setFirstRaiting}
        lastRaiting={lastRaiting}
        setLastRaiting={setLastRaiting}
        firstYear={firstYear}
        setFirstYear={setFirstYear}
        lastYear={lastYear}
        setLastYear={setLastYear}
        inputDropType={inputDropType}
        setInputDropType={setInputDropType}
        inputDropSort={inputDropSort}
        setInputDropSort={setInputDropSort}
        setStartLoad={setStartLoad}
        setPages={setPages}
        sortBy={sortBy}
        typeBy={typeBy}
        setLinkType={setLinkType}
        setLinkSort={setLinkSort}
      />
    </div>
  );
};

export default Home;
