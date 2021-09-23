export default interface IMovie {
  poster_path: string,
  title: string,
  release_date: string,
  vote_average: number,
  overview: string,
  genres: {id: string | number, name: string}[],
  id: number | string
  credits?: {cast: [] | undefined} ,
  reviews?: {results:[] | undefined}
}