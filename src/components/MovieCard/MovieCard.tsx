import { NavLink, withRouter } from "react-router-dom";
import { RouteComponentProps } from 'react-router-dom';

import styles from "./MovieCard.module.css";
import defaultImage from "../../images/default.jpeg";
import routes from "../../routes";
import IMovie from '../../interfaces/Movie.interface'

interface IProps {
  handleGoBack: React.MouseEventHandler<HTMLButtonElement>,
  movie: IMovie,
}

const MovieCard:React.FC <RouteComponentProps & IProps> = ({ handleGoBack, movie, location }) => {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
    id: movieId,
  } = movie;
  return (
    <div className={styles.Card}>
      <button
        className={styles.GoBackButton}
        type="button"
        onClick={handleGoBack}
      >
        Go Back
      </button>

      <div className={styles.CardInfo}>
        <div className={styles.CardImageThumb}>
          <img
            src={
              poster_path === null
                ? defaultImage
                : `https://www.themoviedb.org/t/p/w500${poster_path}`
            }
            alt={title}
          />
        </div>
        <div className={styles.CardDetailsThumb}>
          <h1>{`${title} (${release_date.slice(0, 4)})`}</h1>
          <p>User score: {vote_average * 10}%</p>
          <h2>Overview</h2>
          <p className={styles.Overview}>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className={styles.DetailsList}>
        <li className={styles.ListItem}>
          <NavLink
            className={styles.Link}
            activeClassName={styles.LinkActive}
            to={{
              pathname: `${routes.movies}/${movieId}/cast`,
              state: {
                from: location,
              },
            }}
          >
            <p>Casts</p>
          </NavLink>
        </li>
        <li className={styles.ListItem}>
          <NavLink
            className={styles.Link}
            activeClassName={styles.LinkActive}
            to={{
              pathname: `${routes.movies}/${movieId}/reviews`,
              state: {
                from: location,
              },
            }}
          >
            <p>Reviews</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(MovieCard);
