import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import style from "./Search.module.scss";

import FilterMain from "../../../UI/Filter/FilterMain";
import PageFilms from "../../Main/PageFilms";
import PagesCount from "../../../UI/PagesCount";

import getMovies from "../../../Functions/getMovies";
import countries from "../../../data/object/countries";
import genere from "../../../data/object/genres";
import { sortBy, typeBy } from "../../../data/object/sortBy";
import { FaFilter } from "react-icons/fa";
import NavBarBox from "../../Main/NavBarBox";

const Search = () => {
  const [movie, setMovie] = useState({});
  const [isLoadingMovie, setIsLoadingMovie] = useState(false);
  const [pages, setPages] = useState(1);

  const [showLoad, setShowLoad] = useState(false);
  const [startLoad, setStartLoad] = useState(false);

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

  const API_TOKEN = "4c9256a4-f1db-437b-9d26-69752332dae8";
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

  useEffect(() => {
    setSearch(false);
    setIsLoadingMovie(true);

    window.scrollTo({ top: 0 });
    getMovies(
      startLoad ? URL_INDEX : "",
      setMovie,
      setIsLoadingMovie,
      API_TOKEN
    );
  }, [pages, search]);

  return (
    <div className={style.Search}>
      <form className={style.form} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Посик"
          onChange={(e) => setLinkFilm(e.target.value)}
        />
        <Button
          type="submit"
          className={`buttonActive ${style.button}`}
          onClick={() => {
            setShowLoad(true);
            setSearch(true);
            setStartLoad(true);
            setPages(1);
          }}
        >
          Найти
        </Button>
      </form>
      <div
        className={style.showFilter}
        onClick={(e) => {
          e.stopPropagation();
          setShowFilterMenu(true);
        }}
      >
        <FaFilter />
      </div>
      {showLoad && (
        <>
          {isLoadingMovie ? (
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
        </>
      )}

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
            setShowLoad={setShowLoad}
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

export default Search;
