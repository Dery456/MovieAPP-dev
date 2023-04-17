import { useState } from "react";

import style from "./Home.module.scss";

import CaruselBox from "./../../caruselBox/CaruselBox";

import countries from "./../../../data/object/countries";
import genere from "./../../../data/object/genres";

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

  const premieres = `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2023&month=MARCH`;

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
  /*
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
*/
  /*
  const animationMenuHandler = () => {
    const filterWrapper = document.querySelector(
      ".FilterMain_wrapperFilter__RNaJp"
    );
    filterWrapper.console.log(filterWrapper);
  };
*/
  return (
    <div className={style.home}>
      <div className={style.home__heroBox}>
        <h2 className={style.home__heroContent}>Кино премьеры</h2>
      </div>
      <CaruselBox films={premieres} />
      <div className={style.home__heroBox}>
        <h2 className={style.home__heroContent}>Подборка</h2>
      </div>
      {<CaruselBox films={URL_TOP_HUN} />}
      <div className={style.home__heroBox}>
        <h2 className={style.home__heroContent}>Топ 250 фильмов</h2>
      </div>
      {<CaruselBox films={URL_TOP_MOVIES} />}
      {/*isLoading ? (
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
      )
      }
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
      */}
    </div>
  );
};

export default Home;
