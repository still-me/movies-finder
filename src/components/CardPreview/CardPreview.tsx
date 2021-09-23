import styles from "./CardPreview.module.css";
import defaultImage from "../../images/default.jpeg";

interface IProps {
  title: string,
  poster_path?: string | null,
  release_date: string
}

const CardPreview = ({ title, poster_path = null, release_date }: IProps) => (
  <>
    <div className={styles.CardPreviewThumb}>
      <img
        src={
          poster_path === null
            ? defaultImage
            : `https://www.themoviedb.org/t/p/w300${poster_path}`
        }
        alt={title}
      />
    </div>

    <p className={styles.CardPreviewTitle}>
      {title} {release_date && <span>({release_date.slice(0, 4)})</span>}
    </p>
  </>
);

export default CardPreview;
