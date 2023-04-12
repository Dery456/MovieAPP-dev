import { Link } from "react-router-dom";

import style from "./MovieEL.module.scss";

const MovieEL = (props) => {
  const { FilmName, FilmId, poster, location = {} } = props;

  return (
    <Link
      to={
        location.pathname === "/MovieAPP/films"
          ? FilmId.toString()
          : `films/${FilmId.toString()}`
      }
    >
      <div className={style.cardFilms}>
        {/*<h3>{FilmId}</h3>*/}
        <div className={style.posterHover}>
          <img
            className={style.poster}
            src={poster}
            alt="poster"
            title={FilmName}
          />
          <div className={style.overWolf}>{FilmName}</div>
        </div>
      </div>
    </Link>
  );
};

export default MovieEL;
