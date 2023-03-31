import { useLocation } from "react-router-dom";
import MovieEL from "./MovieEL";
import "./PageFilms.scss";

const PageFilms = ({ movie }) => {
  const location = useLocation();

  return (
    <div className="container">
      <>
        <div className="content">
          {movie.films.map((el, idx) => {
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
        </div>
      </>
    </div>
  );
};

export default PageFilms;
