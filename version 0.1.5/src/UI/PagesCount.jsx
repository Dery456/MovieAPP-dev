import { Button } from "react-bootstrap";
import style from "./Pagin.module.scss";

const PagesCount = (props) => {
  const { total, pages, setPages, maxPages } = props;

  return (
    <>
      {maxPages > 0 && (
        <div className={style.pagin}>
          {pages !== 1 && (
            <Button
              className={style.buttonActive}
              onClick={() => {
                if (pages > 1) {
                  setPages(pages - 1);
                }
              }}
            >
              Назад
            </Button>
          )}

          <p className={style.counter}>{pages}</p>
          {pages !== maxPages && (
            <Button
              className={style.buttonActive}
              onClick={() => {
                if (pages < maxPages) {
                  setPages(pages + 1);
                }
              }}
            >
              Вперед
            </Button>
          )}
        </div>
      )}
    </>
  );
};

export default PagesCount;
