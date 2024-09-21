"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header/page";
import ItemTarefa from "./components/itemTarefa/page";
import styles from "./styles/globals.module.scss";
import popUp from "./styles/popUp.module.scss";
import AdicionarTarefa from "./components/AdicionarTarefa/page";
import { v4 as uuidv4 } from "uuid";
import DeletarTarefa from "./components/DeletarTarefa/page"; //caminho se necessário

function Home() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
    setTarefas(tarefasSalvas);
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = (titulo) => {
    const novaTarefa = { id: uuidv4(), titulo, completed: false };
    setTarefas((prevTarefas) => [...prevTarefas, novaTarefa]);
  };

  const deletarTarefa = (id) => {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novasTarefas);
  };

  const alternarTarefaCompleta = (id) => {
    const novasTarefas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, completed: !tarefa.completed } : tarefa
    );
    setTarefas(novasTarefas);
  };

  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.listTarefas}>
          <p className={styles.title}>Suas tarefas de hoje</p>
          <div className={styles.containerItens}>
            {tarefas
              .filter((tarefa) => !tarefa.completed)
              .map((tarefa) => (
                <ItemTarefa
                  key={tarefa.id}
                  tarefa={tarefa}
                  onDelete={() => deletarTarefa(tarefa.id)}
                  onToggle={() => alternarTarefaCompleta(tarefa.id)}
                />
              ))}
          </div>

          <p className={styles.title}>Tarefas Finalizadas</p>
          <div className={styles.containerItens}>
            {tarefas
              .filter((tarefa) => tarefa.completed)
              .map((tarefa) => (
                <ItemTarefa
                  key={tarefa.id}
                  tarefa={tarefa}
                  onDelete={() => deletarTarefa(tarefa.id)}
                  onToggle={() => alternarTarefaCompleta(tarefa.id)}
                />
              ))}
          </div>
        </div>
      </section>
      <div className={styles.container}>
        <AdicionarTarefa adicionarTarefa={adicionarTarefa} />
      </div>
    </>
  );
}

export default Home;
