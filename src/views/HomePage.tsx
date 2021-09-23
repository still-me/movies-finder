import  { useState, useEffect } from "react";

import * as moviesApi from "../services/movies-service";
import MoviesList from "../components/MoviesList";

const HomeView = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    moviesApi
      .getTrendingMovies()
      .then((movies) => setTrendingMovies(movies))
      .catch((error) => console.log(error));
  }, []);

  return <MoviesList movies={trendingMovies} />;
};

export default HomeView;
