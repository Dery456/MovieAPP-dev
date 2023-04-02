import { useState } from "react";
import { Button } from "react-bootstrap";

import style from "./../FilterMain.module.scss";

import Filter from "./../../UI/Filter/Filter";
import FilterYears from "./../../UI/Filter/FilterYears";

import countries from "./../../data/countries";
import year from "./../../data/year";
import raiting from "./../../data/raiting";
import geners from "./../../data/genres";
import FilterDrop from "./FilterDrop";

const FilterMain = (props) => {
  const {
    search,
    setSearch,
    inputValueCountry,
    setInputValueCountry,
    inputValueGenre,
    setInputValueGenre,
    firstRaiting,
    setFirstRaiting,
    lastRaiting,
    setLastRaiting,
    firstYear,
    setFirstYear,
    lastYear,
    setLastYear,
    inputDropType,
    setInputDropType,
    inputDropSort,
    setInputDropSort,
    setStartLoad,
    setPages,
    sortBy,
    typeBy,
    setLinkType,
    setLinkSort,
  } = props;

  /*windowFilter.addEventListener("click", (e) => {
    if (e.target !== windowDrop) {
      setClickInputDrop(false);
      setClickInputType(false);
    }
  });*/

  return (
    <div className={style.Filter} id="filter">
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
      <FilterDrop
        name="Тип"
        inputDrop={inputDropType}
        setInputDrop={setInputDropType}
        data={typeBy}
        setLinkDrop={setLinkType}
      />
      <FilterDrop
        name="Сортировать по"
        inputDrop={inputDropSort}
        setInputDrop={setInputDropSort}
        data={sortBy}
        setLinkDrop={setLinkSort}
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
      <Button
        onClick={() => {
          setSearch(true);
          setStartLoad(true);
          setPages(1);
        }}
      >
        Найти
      </Button>
    </div>
  );
};

export default FilterMain;
