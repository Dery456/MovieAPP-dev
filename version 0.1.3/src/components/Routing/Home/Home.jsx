import { useState, useEffect } from "react";
import { FaChevronRight, FaFilter } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

import style from "./Home.module.scss";
import "./../../animation.scss";

import CaruselBox from "./../../caruselBox/CaruselBox";
import Header from "./../../Header/Header";
import PageFilms from "./../../Main/PageFilms";
import PagesCount from "./../../../UI/PagesCount";

import countries from "./../../../data/object/countries";
import genere from "./../../../data/object/genres";
import FilterMain from "./../../../UI/Filter/FilterMain";
import { sortBy, typeBy } from "./../../../data/object/sortBy";
import getMovies from "../../../Functions/getMovies";

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
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const [search, setSearch] = useState(false);

  const [inputValueCountry, setInputValueCountry] = useState([]);
  const [inputValueGenre, setInputValueGenre] = useState([]);

  const [linkType, setLinkType] = useState("FILM");
  const [linkSort, setLinkSort] = useState("RATING");

  const [inputDropType, setInputDropType] = useState("Тип");
  const [inputDropSort, setInputDropSort] = useState("Сортирвоать по");

  const [firstRaiting, setFirstRaiting] = useState([1, 0]);
  const [lastRaiting, setLastRaiting] = useState(10);

  const [firstYear, setFirstYear] = useState([1950, 73]);
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
    getMovies(
      startLoad ? URL_INDEX : URL_TOP_HUN,
      setMovie,
      setIsLoading,
      API_TOKEN
    );
  }, [pages, search]);

  const animationMenuHandler = () => {
    const filterWrapper = document.querySelector(
      ".FilterMain_wrapperFilter__RNaJp"
    );
    filterWrapper.console.log(filterWrapper);
  };

  return (
    <div className={style.home}>
      <Header
        setSearch={setSearch}
        setLinkFilm={setLinkFilm}
        setLinkApi={setLinkApi}
        setStartLoad={setStartLoad}
        setPages={setPages}
      />
      <h2 className={style.home__premier}>Кино премьеры</h2>
      <CaruselBox />
      <div className={style.home__heroBox}>
        <h2 className={style.home__heroContent}>
          {linkFilm
            ? `${linkFilm}  ${
                movie.total ? `найдено${movie.total}` : "ничего не найдено"
              }`
            : "Подборка"}
        </h2>
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
      <div
        className={style.showFilter}
        onClick={(e) => {
          e.stopPropagation();
          setShowFilterMenu(true);
        }}
      >
        <FaFilter />
      </div>
      {showFilterMenu && (
        <>
          <FilterMain
            classNames="filter"
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
            showFilterMenu={showFilterMenu}
            setShowFilterMenu={setShowFilterMenu}
          />
          <div
            className={style.absolute}
            onClick={() => {
              setShowFilterMenu(false);
            }}
          ></div>
        </>
      )}
    </div>
  );
};

export default Home;
