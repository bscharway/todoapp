import styles from "./form.module.css";
import { useState } from "react";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.modernInput}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            placeholder="Enter todo item"
          />
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </>
  );
}
