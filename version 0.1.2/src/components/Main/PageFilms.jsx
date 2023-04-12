import { useLocation } from "react-router-dom";
import MovieEL from "./MovieEL";
import style from "./PageFilms.module.scss";

const PageFilms = ({ movie }) => {
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
