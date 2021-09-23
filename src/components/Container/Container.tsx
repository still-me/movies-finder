import styles from "./Container.module.css";

interface Props{
  children: React.ReactNode
}

const Container: React.FC<Props> = ({ children }) => (
  <div className={styles.Container}>{children}</div>
);

export default Container;
