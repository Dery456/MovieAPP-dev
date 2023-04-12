import { useEffect, useState } from "react";

import style from "./../FilterMain.module.scss";
import { Button } from "react-bootstrap";

const Filter = (props) => {
  const { data, nameProps = "", nameFilt, inputValue, setInputValue } = props;

  const [sorting, setSorting] = useState("");
  const [hiddenCountry, setHiddenCountry] = useState(false);

  const countryFilter = data.filter((el) => {
    return el[nameProps].slice(0, sorting.length) === sorting;
  });

  function deleteCountry(name) {
    setInputValue(inputValue.filter((el) => el !== name));
  }
  const windowCountry = document.querySelector(".Filter");
  document.addEventListener("click", (e) => {
    if (e.target !== windowCountry && hiddenCountry) {
      setHiddenCountry(false);
    }
  });

  return (
    <div className="Filter">
      <div className={style.wrapperCountry}>
        {inputValue.length === 0 ? (
          <Button className="btn btn-secondary">{nameFilt}</Button>
        ) : (
          inputValue.map((el, idx) => (
            <Button
              className="btn btn-primary"
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
            className="btn btn-primary"
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              setHiddenCountry(true);
              e.stopPropagation();
            }}
          >
            +
          </Button>
        )}
      </div>
      {hiddenCountry && (
        <div className={style.contentHidden}>
          <div className={`${style.dropDown}`}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                className={style.search}
                type="text"
                placeholder={nameFilt}
                onChange={(e) => {
                  setSorting(e.target.value);
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </form>
            {countryFilter.map((el) => (
              <p
                key={el.id}
                onClick={() => {
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
        </div>
      )}
    </div>
  );
};

export default Filter;
