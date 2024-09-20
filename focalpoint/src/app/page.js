"use client";
import Header from "./components/Header/page";
import ItemTarefa from "./components/itemTarefa/page";
import styles from "./styles/globals.module.scss";
import popUp from "./styles/popUp.module.scss";
import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FiTrash } from "react-icons/fi";

function AdicionarTarefa({ adicionarTarefa }) {
  const [novaTarefa, setNovaTarefa] = useState("");

  const handleAdicionarTarefa = () => {
    if (novaTarefa.trim()) {
      adicionarTarefa(novaTarefa);
      setNovaTarefa(""); // Limpa o input após adicionar
    }
  };

  return (
    <Popup
      trigger={
        <button className={popUp.triggerButton}>Adicionar nova Tarefa</button>
      }
      modal
      nested
      contentStyle={{
        padding: "0",
        borderRadius: "16px",
        width: "450px",
        maxWidth: "100%",
        margin: "auto",
        height: "auto",
      }}
      overlayStyle={{
        background: "rgba(255, 255, 255, 0.9)",
      }}
    >
      {(close) => (
        <section className={popUp.containerPopUp}>
          <h1 className={popUp.title}>Nova tarefa</h1>
          <label className={popUp.label}>Titulo</label>
          <input
            type="text"
            placeholder="Digite"
            className={popUp.input}
            value={novaTarefa}
            onChange={(e) => setNovaTarefa(e.target.value)}
          />

          <div className={popUp.containerButton}>
            <button className={popUp.btnCancelar} onClick={close}>
              Cancelar
            </button>
            <button
              className={popUp.btnAdicionar}
              onClick={() => {
                handleAdicionarTarefa();
                close();
              }}
            >
              Adicionar
            </button>
          </div>
        </section>
      )}
    </Popup>
  );
}

export default function Home() {
  const [tarefas, setTarefas] = useState([]);

  // Carregar as tarefas do localStorage ao carregar a página
  useEffect(() => {
    const tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
    setTarefas(tarefasSalvas);
  }, []);

  // Atualizar o localStorage sempre que as tarefas forem alteradas
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = (titulo) => {
    const novaTarefa = { titulo, completed: false };
    setTarefas((prevTarefas) => [...prevTarefas, novaTarefa]);
  };

  const deletarTarefa = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  };

  const alternarTarefaCompleta = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index] = {
      ...novasTarefas[index],
      completed: !novasTarefas[index].completed,
    };
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
              .map((tarefa, index) => (
                <ItemTarefa
                  key={index}
                  tarefa={tarefa}
                  onDelete={() => deletarTarefa(index)}
                  onToggle={() => alternarTarefaCompleta(index)}
                />
              ))}
          </div>
          <p className={styles.title}>Tarefas Finalizadas</p>
          <div className={styles.containerItens}>
            {tarefas
              .filter((tarefa) => tarefa.completed)
              .map((tarefa, index) => (
                <ItemTarefa
                  key={index}
                  tarefa={tarefa}
                  onDelete={() => deletarTarefa(index)}
                  onToggle={() => alternarTarefaCompleta(index)}
                  completed={tarefa.completed}
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
