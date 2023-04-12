import { Link } from "react-router-dom";

import style from "./MovieEL.module.scss";
import { FaRegCircle } from "react-icons/fa";

const MovieEL = (props) => {
  const {
    rating,
    country,
    genres,
    FilmName,
    FilmId,
    poster,
    location = {},
  } = props;

  function sortRating(rating) {
    if (rating > 10) {
      return rating / 10;
    } else {
      return rating;
    }
  }
  const ratingComplite = sortRating(rating);

  function definitionLinks(location, currentLocation) {
    switch (location) {
      case "/MovieAPP/films":
        return FilmId.toString();
        break;
      case "/MovieAPP/":
        return `films/${FilmId.toString()}`;
        break;
      case `${currentLocation}`:
        return `../films/${FilmId.toString()}`;
    }
  }

  return (
    <Link
      to={definitionLinks(location.pathname, location.pathname)}
      style={{ textDecoration: "none" }}
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

          <div className={style.ratingDesktop}>
            <FaRegCircle
              icon="fa-regular fa-circle"
              className={`${
                rating > 6 ? "highR" : rating > 4 ? "mediumR" : "lowR"
              } ${style.rating__circle}`}
            />
            <p className={style.rating__num}>{ratingComplite}</p>
          </div>

          <div className={style.mobileInfo}>
            <div className={style.specif}>
              <h3 className={style.heroFilm}>{FilmName}</h3>
              <div className={style.inform}>
                {country.map((el, idx) => (
                  <p key={idx} className="buttonActive">
                    {el.country}
                  </p>
                ))}
                {genres.map((el, idx) => (
                  <p key={idx} className="buttonActive">
                    {el.genre}
                  </p>
                ))}
              </div>
              <div className={style.rating}>
                <FaRegCircle
                  icon="fa-regular fa-circle"
                  className={`${
                    rating > 6 ? "highR" : rating > 4 ? "mediumR" : "lowR"
                  } ${style.rating__circle}`}
                />
                <p className={style.rating__num}>{ratingComplite}</p>
              </div>
            </div>
          </div>
          <span></span>
          <div className={style.overWolf}>{FilmName}</div>
        </div>
      </div>
    </Link>
  );
};

export default MovieEL;
