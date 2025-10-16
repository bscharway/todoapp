import styles from "./footer.module.css";
export default function Footer({ completedTodos, todos }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>
        {completedTodos} completed out of {todos.length}
      </span>
    </div>
  );
}
