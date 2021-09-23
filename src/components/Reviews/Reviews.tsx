import styles from "./Reviews.module.css";

interface IProps {
  reviews: {
    id: string | number, author: string, content: string
  }[] | [] | undefined
}

const Reviews: React.FC<IProps> = ({ reviews }) => {
  const isReviewsEmpty = reviews !== undefined && reviews.length < 1;

  return (
    <>
      {isReviewsEmpty ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul className={styles.List}>
          {reviews?.map(({ id, author, content }) => (
            <li key={id} className={styles.Review}>
              <h3 className={styles.Author}>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};


export default Reviews;
