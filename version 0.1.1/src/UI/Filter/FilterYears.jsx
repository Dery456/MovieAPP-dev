import { useState } from "react";
import style from "./FilterYears.module.scss";
import { Button } from "react-bootstrap";

const FilterYears = (props) => {
  const { name, arrayInfo, mirrorIndex, first, setFirst, last, setLast } =
    props;
  const [showFirst, setShowFirst] = useState(false);
  const [showLast, setShowLast] = useState(false);

  const windowRating = document.querySelector(
    ".FilterRating_windowRating__F1SQ8"
  );
  const window = document.querySelector(".FilterRating_windowYears__uk32Z");
  document.addEventListener("click", (e) => {
    if (e.target !== window) {
      setShowLast(false);
      setShowFirst(false);
    }
  });

  let yearLast;
  let yearSpred;
  if (mirrorIndex) {
    yearSpred = [...arrayInfo];
    yearLast = yearSpred.reverse().slice(arrayInfo.length - first[1]);
  } else {
    yearLast = arrayInfo.slice(first[1] + 1);
  }

  return (
    <div
      className={style.FilterFromBefore}
      onClick={(e) => e.stopPropagation()}
    >
      <h2>{name}</h2>
      <div className={style.windowRating}>
        <div>
          <Button
            className="btn btn-light"
            onClick={(e) => setShowFirst(showFirst ? false : true)}
          >
            {first[0]}
          </Button>
          {showFirst && (
            <div className={style.windowYears}>
              {arrayInfo.map((el, idx) => (
                <span key={el} onClick={() => setFirst([el, idx])}>
                  {el}
                </span>
              ))}
            </div>
          )}
        </div>
        <div>
          <Button
            className="btn btn-light"
            onClick={(e) => setShowLast(showLast ? false : true)}
          >
            {last}
          </Button>

          {showLast && (
            <div className={style.windowYears}>
              {yearLast.map((el) => {
                return (
                  <span key={el} onClick={() => setLast(el)}>
                    {el}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterYears;
