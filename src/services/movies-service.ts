import { request, singleRequest } from "./helpers";

type TMovieID = string | string[] | number;

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "4f0ff036e104f19ed384b069714027d3";
const LANGUAGE = "en-US";

export const getTrendingMovies = async () => {
  return request(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
};

export const getSearchMovies = async (query: string | string[]) => {
  return request(
    `${BASE_URL}search/movie?language=${LANGUAGE}&query=${query}&api_key=${API_KEY}`
  );
};

export const getMoviesInformation = (movieId: TMovieID) => {
  return singleRequest(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=${LANGUAGE}&append_to_response=reviews,credits`
  );
};
