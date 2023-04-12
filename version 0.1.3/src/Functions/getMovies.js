const getMovies = async (url, sets, load, API_TOKEN) => {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_TOKEN,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With",
      },
    });
    const resData = await res.json();
    console.log(resData);
    sets(resData);
  } catch (err) {
    return <h1>Failed to fetch 402</h1>;
  }

  load(false);
};

export default getMovies;
