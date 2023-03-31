import { queryByAttribute } from "@testing-library/react";

import { useEffect, useState } from "react";
import { dataFilm } from "../../data/obj";
import CaruselBox from "../caruselBox/CaruselBox";
import Button from "../../UI/Button/Button";
import MovieEL from "./MovieEL";

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
  /*
  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await fetch(URL_RANDOM_MOVIES, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": API_TOKEN,
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
  }, []);
  */
  /*
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await new Promise((resolve, reject) => {
          setTimeout(() => {
            const items = dataFilm;
            resolve(items);
            setIsLoading(false);
          }, 2);
        });
        const resData = await res;
        console.log(resData);
        setMovie(resData);
      } catch (err) {
        return <h1>Failed to fetch 402</h1>;
      }
    };
    getMovie();
  }, []);
*/
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
        </>
      )}
    </div>
  );
};

export default MainContent;
