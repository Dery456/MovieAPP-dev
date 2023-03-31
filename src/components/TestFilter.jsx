import { useEffect, useState } from "react";
import style from "./TestFilter.module.scss";
import countries from "../data/countries";

const TestFilter = () => {
  const API_TOKEN = "4c9256a4-f1db-437b-9d26-69752332dae8";

  const [sorting, setSorting] = useState("");
  const [inputValue, setInputValue] = useState([]);
  const [hiddenCountry, setHiddenCountry] = useState(false);

  useEffect(() => {
    /*
    async function getFilt() {
      const response = await fetch(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/filters`,
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
    */
  }, []);
  const countryFilter = countries.filter((el) => {
    return el.country.slice(0, sorting.length) === sorting;
  });
  return (
    <div>
      <h1>testFilter</h1>
      {inputValue.length === 0 ? (
        <p>страна</p>
      ) : (
        inputValue.map((el, idx) => <p key={idx}>{el}</p>)
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="страна"
          onChange={(e) => {
            setSorting(e.target.value);
          }}
        />
      </form>

      <div className={`${style.dropDown}`}>
        {countryFilter.map((el) => (
          <p
            key={el.id}
            onClick={() => {
              if (
                inputValue.length < 3 &&
                inputValue[0] !== el.country &&
                inputValue[1] !== el.country
              ) {
                setInputValue([...inputValue, el.country]);
              }
            }}
          >
            {el.country}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TestFilter;
