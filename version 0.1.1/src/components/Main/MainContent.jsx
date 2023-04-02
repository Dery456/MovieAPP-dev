import { useEffect, useState } from "react";

import Button from "../../UI/Button/Button";
import MovieEL from "./MovieEL";
import FilterMain from "../Routing/FilterMain";

import countries from "../../data/countries";
import genere from "../../data/genres";

const API_TOKEN = "4c9256a4-f1db-437b-9d26-69752332dae8";
const URL_TOP_MOVIES =
  "https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=4";
const URL_KINOPOISK =
  "https://kinopoiskapiunofficial.tech/documentation/api/main-page/";

const URL_SERVER = "http://localhost:8000/";
const URL_MAIN = "http://localhost:3000/";

const MainContent = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [pages, setPages] = useState(1);

  //start FIlter
  const [search, setSearch] = useState(false);

  const [inputValueCountry, setInputValueCountry] = useState([]);
  const [inputValueGenre, setInputValueGenre] = useState([]);

  const [firstRaiting, setFirstRaiting] = useState([5, 0]);
  const [lastRaiting, setLastRaiting] = useState(10);

  const [firstYear, setFirstYear] = useState([2022, 0]);
  const [lastYear, setLastYear] = useState(2023);

  const country = countries.find(
    (el) => el.country === inputValueCountry[inputValueCountry.length - 1]
  );
  const gener = genere.find(
    (el) => el.genre === inputValueGenre[inputValueGenre.length - 1]
  );

  // end filter

  useEffect(() => {
    setIsLoading(true);
    window.scrollTo({ top: 0 });
    const getMovies = async () => {
      try {
        const res = await fetch(
          `https://kinopoiskapiunofficial.tech/api/v2.2/films?${
            country ? `countries=${country.id}&` : ""
          }${
            gener ? `genres=${gener.id}&` : ""
          }order=RATING&type=ALL&ratingFrom=${parseInt(
            firstRaiting[0]
          )}&ratingTo=${parseInt(lastRaiting)}&yearFrom=${parseInt(
            firstYear[0]
          )}&yearTo=${parseInt(lastYear)}&page=${pages}`,
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
  }, [pages, search]);

  return (
    <div className="container">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="content">
            {movie.films.map((el, idx) => {
              return (
                <MovieEL
                  key={idx}
                  FilmName={el.nameRu ? el.nameRu : el.nameOriginal}
                  FilmId={el.filmId}
                  poster={el.posterUrl}
                />
              );
            })}
          </div>
          <div className="pagin">
            <Button
              func={() => {
                if (pages > 1) {
                  setPages(pages - 1);
                }
              }}
            >
              Назад
            </Button>
            <p className="counter">{pages}</p>
            <Button
              func={() => {
                if (pages < movie.pagesCount) {
                  setPages(pages + 1);
                }
              }}
            >
              Вперед
            </Button>
          </div>
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
          />
        </>
      )}
    </div>
  );
};

export default MainContent;
