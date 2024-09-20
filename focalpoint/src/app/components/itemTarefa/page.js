import styles from "./style.module.scss";
import { FiTrash } from "react-icons/fi";

export default function ItemTarefa({ tarefa, onDelete, onToggle }) {
  return (
    <section className={styles.itemTarefa}>
      <input
        type="checkbox"
        checked={tarefa.completed}
        onChange={onToggle}
        className={styles.checkbox}
      />
      <p
        className={styles.tarefa}
        style={{
          textDecoration: tarefa.completed ? "line-through" : "none",
          color: tarefa.completed ? "#0000008A" : "inherit",
        }}
      >
        {tarefa.titulo}
      </p>
      <button className={styles.btnTrash} onClick={onDelete}>
        <FiTrash size={20} />
      </button>
    </section>
  );
}
