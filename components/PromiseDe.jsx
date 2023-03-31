import { useEffect, useState } from "react";

const PromiseDe = () => {
  const [getInfo, setGetInfo] = useState({});
  /*
  useEffect(() => {
    const prom = new Promise((resolve, reject) => {
      console.log("start");
      setTimeout(() => {
        const items = [
          {
            total: 5,
            page: 1,
            item: [
              1,
              2,
              3,
              4,
              5,
              6,
              7,

              {
                kinopoiskId: "1",
                nameRu: "Лорды раздевалки",
                posterUrl:
                  "https://kinopoiskapiunofficial.tech/images/posters/kp/1252447.jpg",
              },
              {
                kinopoiskId: "2",
                nameRu: "Шоу Грязного Фрэнка",
                posterUrl:
                  "https://kinopoiskapiunofficial.tech/images/posters/kp/1043658.jpg",
              },
              {
                kinopoiskId: "3",
                nameRu: "Космос",
                posterUrl:
                  "https://kinopoiskapiunofficial.tech/images/posters/kp/1309325.jpg",
              },
            ],
          },
        ];
        const b = 1;
        resolve(items);
      }, 200);
    });
    prom.then((res) => {
      setGetInfo(res);
    });
  }, []);
*/
  return <div></div>;
};

export default PromiseDe;
