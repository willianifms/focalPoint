"use client";
import styles from "../../styles/item.module.scss";
import DeletarTarefa from "../DeletarTarefa/page";

export default function ItemTarefa({ tarefa, onDelete, onToggle }) {
  if (!tarefa) {
    return null; 
  }

  return (
    <section className={styles.itemTarefa}>
      <input
        type="checkbox"
        id={`checkbox-${tarefa.id}`}
        checked={tarefa.completed || false}
        onChange={onToggle}
        className={styles.checkbox}
      />
      <label htmlFor={`checkbox-${tarefa.id}`}></label>
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
