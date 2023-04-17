import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import InfiniteCarousel from "react-leaf-carousel";

import style from "./AboutFilm.module.scss";

import FilmCard from "./FilmCard";
import { Button } from "react-bootstrap";
import { FaChevronLeft } from "react-icons/fa";

const AboutFilm = () => {
  const history = useNavigate();
  const back = () => history(-1);

  const params = useParams();
  const [isNewLink, setIsNewLink] = useState(params.kinopoiskId);

  const API_URL_VIDIO = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${isNewLink}`;
  const API_URL_SIMILARS = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${isNewLink}/similars`;

  const API_TOKEN = "4c9256a4-f1db-437b-9d26-69752332dae8";
  const [film, setFilm] = useState();
  const [similars, setSimilars] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMain, setIsLoadingMain] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setIsLoading(true);
    setIsLoadingMain(true);
    const getSimilarMovie = async () => {
      try {
        const res = await fetch(
          `https://kinopoiskapiunofficial.tech/api/v2.2/films/${params.kinopoiskId}/similars`,
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
        setSimilars(resData);
        setIsLoading(false);
      } catch (err) {
        return <h1>Failed to fetch 402</h1>;
      }
    };

    const getfilm = async () => {
      try {
        const result = await fetch(
          `https://kinopoiskapiunofficial.tech/api/v2.2/films/${params.kinopoiskId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "X-API-KEY": API_TOKEN,
            },
          }
        );

        const resultData = await result.json();
        console.log(resultData);
        setFilm(resultData);
        setIsLoadingMain(false);
      } catch (err) {
        return <h1>Failed to fetch 402</h1>;
      }
    };

    getSimilarMovie();
    getfilm();
  }, [isNewLink]);

  const { innerWidth: width } = window;

  function searchScale(width) {
    if (width > 767) {
      return 1.2;
    } else if (width < 481) {
      return 0.5;
    } else {
      return 0.8;
    }
  }

  // потом передать эту функцию в контекст или редакс

  if (isLoadingMain) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div className="conteiner">
        <div className={style.pageFilm}>
          <FilmCard
            logoUrl={film.logoUrl}
            posterUrl={film.posterUrl}
            nameOriginal={film.nameOriginal}
            nameRu={film.nameRu}
            ratingImdb={film.ratingImdb}
            ratingKinopoisk={film.ratingKinopoisk}
            shortDescription={film.shortDescription}
            genres={film.genres}
            countries={film.countries}
            description={film.description}
            slogan={film.slogan}
            year={film.year}
          />
          <div className={style.pageFilm__relatedVideos}>
            {isLoading ? (
              <h1>Loading...</h1>
            ) : (
              <>
                <div className={style.pageFilm__wraperInfo}>
                  <p>Похожие фильмы</p>
                  {
                    //<p>{similars.total ? similars.total : ""}</p>
                  }
                </div>

                {similars.items.length < 1 ? (
                  <p className={style.pageFilm__noResult}>Ничего не найденно</p>
                ) : (
                  <InfiniteCarousel
                    arrows={true}
                    showSides={true}
                    sidesOpacity={0.5}
                    sideSize={searchScale(width)}
                    slidesToScroll={4}
                    slidesToShow={searchScale(width) > 1 ? 2 : 1}
                    scrollOnDevice={true}
                    autoCycle={true}
                    animationDuration={900}
                    cycleInterval={5000}
                  >
                    {similars.items.map((el, idx) => {
                      return (
                        <Link
                          to={`./../${el.filmId.toString()}`}
                          key={idx}
                          onClick={() => {
                            setIsNewLink(el.filmId);
                          }}
                        >
                          <img
                            className={style.itemCarousel}
                            src={el.posterUrlPreview}
                            alt={idx}
                          />
                        </Link>
                      );
                    })}
                  </InfiniteCarousel>
                )}
              </>
            )}
          </div>
          <Button onClick={back} className={`buttonActive buttonAbsolute`}>
            <FaChevronLeft />
          </Button>
        </div>
      </div>
    );
  }
};

export default AboutFilm;
