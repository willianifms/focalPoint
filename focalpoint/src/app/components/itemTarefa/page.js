'use client'
import styles from "./style.module.scss";
import DeletarTarefa from "../DeletarTarefa/page";

export default function ItemTarefa({ tarefa, onDelete, onToggle }) {
  if (!tarefa) {
    return null;
  }

  return (
    <section className={styles.itemTarefa}>
      <input
        type="checkbox"
        checked={tarefa.completed || false}
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
      <DeletarTarefa onConfirmDelete={onDelete} />
    </section>
  );
}
