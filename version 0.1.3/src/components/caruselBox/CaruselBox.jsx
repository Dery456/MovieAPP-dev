import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import InfiniteCarousel from "react-leaf-carousel";

import style from "./CarouselBox.module.scss";

const CaruselBox = () => {
  const { innerWidth: width } = window;

  const [isLoading, setIsLoading] = useState(true);
  const [carouselFilm, setCarouselFilm] = useState({});

  const API_TOKEN = "4c9256a4-f1db-437b-9d26-69752332dae8";

  useEffect(() => {
    const getPremiers = async () => {
      try {
        const response = await fetch(
          `https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2023&month=MARCH`,
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
        const data = await response.json();
        console.log(data);
        setCarouselFilm(data);
      } catch (err) {
        return <h1>Failed to fetch 402</h1>;
      }
      setIsLoading(false);
    };
    getPremiers();
  }, []);

  function searchScale(width) {
    if (width > 767) {
      return 1.2;
    } else if (width < 481) {
      return 0.5;
    } else {
      return 0.8;
    }
  }

  return (
    <div className={style.carousel}>
      {isLoading ? (
        <h1>LOADING...</h1>
      ) : (
        <InfiniteCarousel
          arrows={true}
          showSides={true}
          sidesOpacity={0.5}
          sideSize={searchScale(width)}
          slidesToScroll={3}
          slidesToShow={searchScale(width) > 1 ? 2 : 1}
          scrollOnDevice={true}
          autoCycle={true}
          animationDuration={2000}
          cycleInterval={2250}
        >
          {carouselFilm.items.map((el, idx) => {
            return (
              <Link to={`films/${el.kinopoiskId}`} key={idx}>
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
    </div>
  );
};

export default CaruselBox;
