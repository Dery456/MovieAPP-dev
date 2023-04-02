import style from "./FilterRaiting.module.scss";

const FilterRaiting = (props) => {
  const { name } = props;
  return (
    <div>
      <h2>{name}</h2>
      <div className={style.ratingWindow}></div>
    </div>
  );
};

export default FilterRaiting;
