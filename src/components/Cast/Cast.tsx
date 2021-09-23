import styles from "./Cast.module.css";
import defaultImage from "../../images/default.jpeg";

type TId = string | number;

interface IProps {
  cast: { id: TId, profile_path: string, name: string, character: string }[] | [] | undefined;
}

const Cast: React.FC<IProps> = ({ cast }) => {
  return (
    <ul className={styles.List}>
      {cast?.map(({ id, profile_path, name, character }) => (
        <li key={id} className={styles.ListItem}>
          <div className={styles.ImageThumb}>
            <img
              width="200"
              src={
                profile_path === null
                  ? defaultImage
                  : `https://www.themoviedb.org/t/p/w200${profile_path}`
              }
              alt={name}
            />
          </div>

          <p>{name}</p>
          <p>({character})</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
