import { useState, useEffect } from "react";
import queryString from "query-string";
import { RouteComponentProps } from 'react-router-dom';

import * as moviesApi from "../services/movies-service";
import MoviesList from "../components/MoviesList";
import SearchForm from "../components/SearchForm";

const MoviesView: React.FC<RouteComponentProps> = ({ history, location }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchMovies = (query:string | string[]) => {
    moviesApi
      .getSearchMovies(query)
      .then((data) => setMovies(data))
      .catch((error) => console.log(error))
      .finally(() => setSearchQuery(""));
  };

  useEffect(() => {
    const queryParam = queryString.parse(location.search).query;
    if (queryParam) {
      fetchMovies(queryParam);
    }
  }, [location.search]);

  const onQueryChange = (query: string) => {
    history.push({
      pathname: location.pathname,
      search: `query=${query}`,
    });
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
    
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onQueryChange(searchQuery);
    fetchMovies(searchQuery);
  };

  return (
    <>
      <SearchForm
        onSubmit={onSubmit}
        onInputChange={onInputChange}
        searchQuery={searchQuery}
      />
      <MoviesList movies={movies} />
    </>
  );
};

export default MoviesView;
