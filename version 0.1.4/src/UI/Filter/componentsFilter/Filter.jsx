import { useEffect, useState } from "react";

import style from "./../FilterMain.module.scss";
import { Button } from "react-bootstrap";
import { click } from "@testing-library/user-event/dist/click";

const Filter = (props) => {
  const {
    data,
    nameProps = "",
    nameFilt,
    inputValue,
    setInputValue,
    showFilterMenu,
  } = props;

  const [sorting, setSorting] = useState("");
  const [hiddenCountry, setHiddenCountry] = useState(false);

  const countryFilter = data.filter((el) => {
    return el[nameProps].slice(0, sorting.length) === sorting;
  });

  function deleteCountry(name) {
    setInputValue(inputValue.filter((el) => el !== name));
  }

  return (
    <div className="Filter">
      <div className={style.wrapperCountry}>
        {inputValue.length === 0 ? (
          <Button className={`btn ${style.buttonActive}`}>{nameFilt}</Button>
        ) : (
          inputValue.map((el, idx) => (
            <Button
              className={`btn ${style.buttonActive}`}
              key={idx}
              onClick={(e) => {
                deleteCountry(e.target.innerText);
              }}
              style={{ cursor: "pointer" }}
            >
              {el}
            </Button>
          ))
        )}
        {hiddenCountry || inputValue.length === 2 ? (
          ""
        ) : (
          <Button
            className={`btn ${style.buttonActive}`}
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              setHiddenCountry(true);
            }}
          >
            +
          </Button>
        )}
      </div>
      {hiddenCountry && (
        <div className={style.contentHidden}>
          <div className={`${style.dropDown}`}>
            <form>
              <input
                className={style.search}
                type="text"
                placeholder={nameFilt}
                onChange={(e) => {
                  setSorting(e.target.value);
                }}
              />
            </form>
            {countryFilter.map((el) => (
              <p
                id="itemDropOne"
                key={el.id}
                onClick={(e) => {
                  if (
                    inputValue.length < 2 &&
                    inputValue[0] !== el[nameProps] &&
                    inputValue[1] !== el[nameProps]
                  ) {
                    setInputValue([...inputValue, el[nameProps]]);
                  }
                }}
              >
                {el[nameProps]}
              </p>
            ))}
          </div>
          <div
            className={style.absolute}
            onClick={() => setHiddenCountry(false)}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Filter;
