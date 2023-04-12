import React from "react";

const FilmCard = (props) => {
  const {
    logoUrl,
    posterUrl,
    nameOriginal,
    nameRu,
    ratingImdb,
    ratingKinopoisk,
    shortDescription,
    genres,
    countries,
    description,
    slogan,
    year,
  } = props;
  return (
    <>
      <div className="pageFilm__header">
        <img src={logoUrl} alt="" />
        <p className="header__slogan">{slogan}</p>
      </div>
      <div className="pageFilm__content">
        <div className="pageFilm__poster">
          <img
            className="pageFilm__poster-item"
            src={posterUrl}
            alt={nameOriginal}
          />
        </div>
        <div className="pageFilm__info">
          <h2>{nameRu ? nameRu : nameOriginal}</h2>
          <div className="pageFilm__info-rating">
            <p>Imdb {ratingImdb}</p>
            <p>Кинопоиск {ratingKinopoisk}</p>
          </div>

          <div className="pageFilm__info-descShort">
            <p style={{ fontSize: "15px", color: "whitesmoke" }}>
              {shortDescription}
            </p>
          </div>
          <div className="pageFilm__info-genere">
            {genres.map((el, idx) => {
              return <p key={idx}>{el.genre}</p>;
            })}
          </div>
          <p className="pageFilm__info-year">{`${year}${
            countries.length !== 0 ? ", " + countries[0].country : ""
          }`}</p>
          <a
            className="button pageFilm__button"
            href={`https://yandex.ru/search/?text=смотреть ${nameOriginal}`}
            target="_blank"
          >
            Смотреть
          </a>
          <a
            className="button-gray pageFilm__button"
            href={`https://www.youtube.com/results?search_query=трейлер ${nameOriginal}`}
            target="_blank"
          >
            Трейлер
          </a>
        </div>
      </div>
      <div className="pageFilm__desription">
        <p style={{ fontSize: "15px", color: "whitesmoke" }}>{description}</p>
      </div>
    </>
  );
};

export default FilmCard;
