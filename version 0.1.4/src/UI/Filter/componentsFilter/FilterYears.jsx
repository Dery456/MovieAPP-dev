import { useState } from "react";
import style from "./../FilterMain.module.scss";
import { Button } from "react-bootstrap";

const FilterYears = (props) => {
  const { name, arrayInfo, mirrorIndex, first, setFirst, last, setLast } =
    props;
  const [showFirst, setShowFirst] = useState(false);
  const [showLast, setShowLast] = useState(false);

  let yearLast;
  let yearSpred;
  if (mirrorIndex) {
    yearSpred = [...arrayInfo];
    yearLast = yearSpred.reverse().slice(arrayInfo.length - first[1]);
  } else {
    yearLast = arrayInfo.slice(first[1] + 1);
  }

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <h2>{name}</h2>
      <div className={style.windowRating}>
        <div className={style.filterFromBefore}>
          <p className={style.ligthText}>от</p>

          {showFirst ? (
            <>
              {showFirst && (
                <>
                  <div className={style.windowYears}>
                    {arrayInfo.map((el, idx) => (
                      <span
                        key={el}
                        onClick={() => {
                          setFirst([el, idx]);
                          setShowFirst(false);
                        }}
                      >
                        {el}
                      </span>
                    ))}
                  </div>
                  <div
                    className={style.absolute}
                    onClick={() => setShowFirst(false)}
                  ></div>
                </>
              )}{" "}
            </>
          ) : (
            <Button
              className={`btn ${style.buttonActive}`}
              onClick={(e) => setShowFirst(showFirst ? false : true)}
            >
              {first[0]}
            </Button>
          )}
        </div>
        <div className={style.filterFromBefore}>
          <p className={style.ligthText}>до</p>
          {showLast ? (
            <>
              {showLast && (
                <>
                  <div className={style.windowYears}>
                    {yearLast.map((el) => {
                      return (
                        <span
                          key={el}
                          onClick={() => {
                            setLast(el);
                            setShowLast(false);
                          }}
                        >
                          {el}
                        </span>
                      );
                    })}
                  </div>
                  <div
                    className={style.absolute}
                    onClick={() => setShowLast(false)}
                  ></div>
                </>
              )}
            </>
          ) : (
            <Button
              className={`btn ${style.buttonActive}`}
              onClick={(e) => setShowLast(showLast ? false : true)}
            >
              {last}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterYears;
