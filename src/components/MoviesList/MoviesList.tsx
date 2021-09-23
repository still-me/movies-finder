import { Link, withRouter, RouteComponentProps } from "react-router-dom";
// import PropTypes from "prop-types";

import CardPreview from "../CardPreview";
import Container from "../Container";
import styles from "./MoviesList.module.css";

interface IMovies {
  id: string | number,
  title: string,
  release_date: string,
}

interface IProps {
  movies: IMovies[],
  location: string,
}


const MoviesList: React.FC <IProps & RouteComponentProps> = ({ movies, location }) => (
  <Container>
    <ul className={styles.MoviesList}>
      {movies.map((movie) => (
        <li key={movie.id} className={styles.MovieListItem}>
          <Link
            className={styles.MovieLink}
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from: location,
              },
            }}
          >
            <CardPreview {...movie} />
          </Link>
        </li>
      ))}
    </ul>
  </Container>
);

// MoviesList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//     }).isRequired
//   ).isRequired,
//   location: PropTypes.object.isRequired,
// };

export default withRouter(MoviesList)
