import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../UI/Button/Button";
import "./MovieEL.scss";

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
      <div className="cardFilms">
        {/*<h3>{FilmId}</h3>*/}
        <div className="posterHover">
          <img className="poster" src={poster} alt="poster" title={FilmName} />
          <div className="overWolf">{FilmName}</div>
        </div>
      </div>
    </Link>
  );
};

export default MovieEL;
