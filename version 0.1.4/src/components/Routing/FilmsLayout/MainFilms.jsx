import style from "../Home/Home.module.scss";

const MainFilms = (props) => {
  const { Header, CaruselBox, Filter } = props;
  return (
    <div className={style.home}>
      <Header
        setSearch={setSearch}
        setLinkFilm={setLinkFilm}
        setLinkApi={setLinkApi}
        setStartLoad={setStartLoad}
        setPages={setPages}
      />
      <h2 className={style.home__premier}>Кино премьеры</h2>
      <CaruselBox />
      <div className={style.home__heroBox}>
        <h2 className={style.home__heroContent}>
          {linkFilm
            ? `${linkFilm}  ${
                movie.total ? `найдено${movie.total}` : "ничего не найдено"
              }`
            : "Подборка"}
        </h2>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <PageFilms movie={movie} />
          <PagesCount
            total={movie.total ? movie.total : 21}
            setPages={setPages}
            pages={pages}
            maxPages={movie.totalPages || movie.pagesCount}
          />
        </>
      )}
      <div
        className={style.showFilter}
        onClick={(e) => {
          e.stopPropagation();
          setShowFilterMenu(true);
        }}
      >
        <FaFilter />
      </div>
      {showFilterMenu && (
        <>
          <FilterMain
            classNames="filter"
            search={search}
            setSearch={setSearch}
            inputValueCountry={inputValueCountry}
            setInputValueCountry={setInputValueCountry}
            inputValueGenre={inputValueGenre}
            setInputValueGenre={setInputValueGenre}
            firstRaiting={firstRaiting}
            setFirstRaiting={setFirstRaiting}
            lastRaiting={lastRaiting}
            setLastRaiting={setLastRaiting}
            firstYear={firstYear}
            setFirstYear={setFirstYear}
            lastYear={lastYear}
            setLastYear={setLastYear}
            inputDropType={inputDropType}
            setInputDropType={setInputDropType}
            inputDropSort={inputDropSort}
            setInputDropSort={setInputDropSort}
            setStartLoad={setStartLoad}
            setPages={setPages}
            sortBy={sortBy}
            typeBy={typeBy}
            setLinkType={setLinkType}
            setLinkSort={setLinkSort}
            showFilterMenu={showFilterMenu}
            setShowFilterMenu={setShowFilterMenu}
          />
          <div
            className={style.absolute}
            onClick={() => {
              setShowFilterMenu(false);
            }}
          ></div>
        </>
      )}
    </div>
  );
};

export default MainFilms;
