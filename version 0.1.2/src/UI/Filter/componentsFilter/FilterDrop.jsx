import { useState } from "react";
import style from "./../FilterMain.module.scss";

const FilterDrop = (props) => {
  const { name, inputDrop, setInputDrop, data, setLinkDrop } = props;

  const [clickInput, setClickInput] = useState(false);

  return (
    <div className={style.filterDrop}>
      <p
        className={style.heroDrop}
        onClick={() => setClickInput(clickInput ? false : true)}
      >
        {inputDrop} ^
      </p>
      {clickInput && (
        <div className={style.dropMenu} id="dropMenu">
          {data.map((el, idx) => (
            <p
              className={style.itemDrop}
              key={idx}
              onClick={() => {
                setInputDrop(el[1]);
                setLinkDrop(el[0]);
                setClickInput(false);
              }}
            >
              {el[1]}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterDrop;
