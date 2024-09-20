import Header from "./components/Header/page";
import ItemTarefa from "./components/itemTarefa/page";
import styles from "./globals.module.scss";
export default function Home() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.listTarefas}>
          <p className={styles.title}>Suas tarefas de hoje</p>
        <div className={styles.containerItens}>
        <ItemTarefa />
        </div>
          <p className={styles.title}>Tarefas Finalizadas</p>
        </div>
      </section>
      <div className={styles.container}>
      <button className={styles.btnAdicionar}>Adicionar nova Tarefa</button>
      </div>
    </>
  );
}
