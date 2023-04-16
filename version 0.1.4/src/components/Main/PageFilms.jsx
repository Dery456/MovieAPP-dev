import { useLocation } from "react-router-dom";
import MovieEL from "./MovieEL";
import style from "./PageFilms.module.scss";
import raiting from "../../data/object/raiting";

const PageFilms = ({ movie, styleSearch = false }) => {
  const location = useLocation();

  return (
    <div className={style.container}>
      <>
        <div className={style.content}>
          {movie.films &&
            movie.films.map((el, idx) => {
              return (
                <MovieEL
                  key={idx}
                  rating={parseInt(el.rating)}
                  country={[...el.countries.slice(0, 2)]}
                  genres={[...el.genres.slice(0, 2)]}
                  FilmName={el.nameRu ? el.nameRu : el.nameOriginal}
                  FilmId={el.filmId}
                  poster={el.posterUrl}
                  location={location}
                />
              );
            })}
          {movie.items &&
            movie.items.map((el, idx) => {
              return (
                <MovieEL
                  key={idx}
                  rating={el.ratingKinopoisk}
                  country={[...el.countries]}
                  genres={[...el.genres]}
                  FilmName={el.nameRu ? el.nameRu : el.nameOriginal}
                  FilmId={el.kinopoiskId}
                  poster={el.posterUrl}
                  location={location}
                />
              );
            })}
        </div>
      </>
    </div>
  );
};

export default PageFilms;
