import { useEffect, useState } from "react";

import style from "./FilterMain.module.scss";

import Filter from "../UI/Filter/Filter";
import FilterYears from "../UI/Filter/FilterYears";

import countries from "../data/countries";
import year from "../data/year";
import raiting from "../data/raiting";
import geners from "../data/genres";
import { Button } from "react-bootstrap";

const TestFilter = () => {
  const API_TOKEN = "4c9256a4-f1db-437b-9d26-69752332dae8";

  const [search, setSearch] = useState(false);

  const [inputValueCountry, setInputValueCountry] = useState([]);
  const [inputValueGenre, setInputValueGenre] = useState([]);

  const [firstRaiting, setFirstRaiting] = useState([5, 0]);
  const [lastRaiting, setLastRaiting] = useState(10);

  const [firstYear, setFirstYear] = useState([2022, 0]);
  const [lastYear, setLastYear] = useState(2023);

  const country = countries.find(
    (el) => el.country === inputValueCountry[inputValueCountry.length - 1]
  );
  const gener = geners.find(
    (el) => el.genre === inputValueGenre[inputValueGenre.length - 1]
  );

  useEffect(() => {
    setSearch(false);
    async function getFilt() {
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films?${
          country ? `countries=${country.id}&` : ""
        }${
          gener ? `genres=${gener.id}&` : ""
        }order=RATING&type=ALL&ratingFrom=${parseInt(
          firstRaiting[0]
        )}&ratingTo=${parseInt(lastRaiting)}&yearFrom=${parseInt(
          firstYear[0]
        )}&yearTo=${parseInt(lastYear)}&page=1`,
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
    }

    getFilt();
  }, [search]);

  return (
    <div className={style.Filter}>
      <h1>Фильтр</h1>
      <Filter
        data={countries}
        nameProps="country"
        nameFilt="страна"
        inputValue={inputValueCountry}
        setInputValue={setInputValueCountry}
      />
      <Filter
        data={geners}
        nameProps="genre"
        nameFilt="жанр"
        inputValue={inputValueGenre}
        setInputValue={setInputValueGenre}
      />
      <FilterYears
        name="Рейтинг"
        arrayInfo={[...raiting]}
        mirrorIndex={false}
        first={[...firstRaiting]}
        setFirst={setFirstRaiting}
        last={lastRaiting}
        setLast={setLastRaiting}
      />
      <FilterYears
        name="Год"
        arrayInfo={[...year]}
        mirrorIndex={true}
        first={[...firstYear]}
        setFirst={setFirstYear}
        last={lastYear}
        setLast={setLastYear}
      />
      <Button onClick={() => setSearch(true)}>Найти</Button>
    </div>
  );
};

export default TestFilter;
