import styles from "./SearchForm.module.css";

interface IProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>,
  onInputChange: React.ChangeEventHandler<HTMLInputElement>,
  searchQuery: string
}

const SearchForm: React.FC <IProps> = ({ onSubmit, onInputChange, searchQuery }) => (
  <div className={styles.SearchBar}>
    <form className={styles.SearchForm} onSubmit={onSubmit}>
      <input
        className={styles.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        value={searchQuery}
        onChange={onInputChange}
      />
      <button className={styles.SearchFormButton} type="submit">
        Search
      </button>
    </form>
  </div>
);


export default SearchForm;
