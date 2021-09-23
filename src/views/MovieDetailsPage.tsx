import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { RouteComponentProps } from 'react-router-dom';

import * as moviesApi from "../services/movies-service";
import routes from "../routes";
import Reviews from "../components/Reviews";
import Cast from "../components/Cast";
import MovieCard from "../components/MovieCard";
import Container from "../components/Container";
import IMovie from '../interfaces/Movie.interface'

interface ILocation {state? : {
    from?: {
      state: {
        from: string
      }
    }
  }}

interface IProps {
  match: {params: {
    movieId: string | number,
  }},
  location: ILocation,
  handleGoBack: () => void,
  
}

const MovieDetailsPage: React.FC<RouteComponentProps & IProps> = ({ location, history, match }) => {

  const [movie, setMovie] = useState<IMovie>({} as IMovie);

  useEffect(() => {
    
    moviesApi
      .getMoviesInformation(match.params.movieId)
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => console.log(error));
  }, [match.params]);

  const handleGoBack = () => {
    history.push(
      location?.state?.from?.state?.from || location?.state?.from || routes.home

      //? alternative 
      // if (location.state && location.state.from) {
      //   history.push(location.state.from);
      //   return;
      // }

      // history.push(routes.home);
    );
  };

  const { credits, reviews } = movie;

  const shouldMovieBeRendered = Object.keys(movie).length !== 0;

  return (
    <Container>
      {shouldMovieBeRendered && (
        <MovieCard handleGoBack={handleGoBack} movie={movie} />
      )}
      <Switch>
        <Route
          path={`${match.path}/cast`}
          render={(props) => <Cast {...props} cast={credits?.cast} />}
        />
        <Route
          path={`${match.path}/reviews`}
          render={(props) => <Reviews {...props} reviews={reviews?.results} />}
        />
      </Switch>
    </Container>
  );
};

export default MovieDetailsPage;
