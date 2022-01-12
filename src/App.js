import { useState, useEffect } from "react";

function App() {
  const [loding, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.data.movies);
        setLoding(false);
      });
  }, []);
  console.log(movies);
  return <div>{loding ? <h1>Loding...</h1> : null}</div>;
}

export default App;
