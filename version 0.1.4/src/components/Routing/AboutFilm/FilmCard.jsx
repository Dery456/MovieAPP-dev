import { Button } from "react-bootstrap";
import style from "./AboutFilm.module.scss";

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
    trailerUrl,
  } = props;
  return (
    <>
      <div className={style.pageFilm__header}>
        <img src={logoUrl} alt="" />
        <p className={style.header__slogan}>{slogan}</p>
      </div>
      <div className={style.pageFilm__content}>
        <div className={style.pageFilm__poster}>
          <img
            className={style.pageFilm__posterItem}
            src={posterUrl}
            alt={nameOriginal}
          />
        </div>
        <div className={style.pageFilm__info}>
          <h2>{nameRu ? nameRu : nameOriginal}</h2>
          <div className={style.pageFilm__infoRating}>
            <p>Imdb {ratingImdb}</p>
            <p>Кинопоиск {ratingKinopoisk}</p>
          </div>

          <div className={style.pageFilm__infoDescShort}>
            <p style={{ fontSize: "15px", color: "whitesmoke" }}>
              {shortDescription}
            </p>
          </div>
          <div className={style.pageFilm__infoGenere}>
            {genres.map((el, idx) => {
              return <p key={idx}>{el.genre}</p>;
            })}
          </div>
          <p className={style.pageFilm__infoYear}>{`${year}${
            countries.length !== 0 ? ", " + countries[0].country : ""
          }`}</p>
          <div className={style.pageFilm__buttonsBox}>
            <Button
              className={`buttonActive ${style.pageFilm__button}`}
              href={`https://yandex.ru/search/?text=смотреть ${nameOriginal}`}
              target="_blank"
            >
              Смотреть
            </Button>
            <Button
              className={`buttonActive ${style.pageFilm__button}`}
              href={
                // trailerUrl.url

                `https://www.youtube.com/results?search_query=трейлер ${nameOriginal}`
              }
              target="_blank"
            >
              Трейлер
            </Button>
          </div>
        </div>
      </div>
      <div className={style.pageFilm__desription}>
        <p style={{ fontSize: "15px", color: "whitesmoke" }}>{description}</p>
      </div>
    </>
  );
};

export default FilmCard;
