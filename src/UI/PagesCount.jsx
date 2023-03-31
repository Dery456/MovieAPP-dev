import Button from "./Button/Button";

const PagesCount = (props) => {
  const { pages, setPages, maxPages } = props;

  return (
    <div className="pagin">
      {pages !== 1 && (
        <Button
          func={() => {
            if (pages > 1) {
              setPages(pages - 1);
            }
          }}
        >
          Назад
        </Button>
      )}

      <p className="counter">{pages}</p>
      {pages !== maxPages && (
        <Button
          func={() => {
            if (pages < maxPages) {
              setPages(pages + 1);
            }
          }}
        >
          Вперед
        </Button>
      )}
    </div>
  );
};

export default PagesCount;
