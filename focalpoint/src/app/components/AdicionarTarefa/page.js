"use client";
import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import popUp from "../../styles/popUp.module.scss";

function AdicionarTarefa({ adicionarTarefa }) {
  const [novaTarefa, setNovaTarefa] = useState("");

  const handleAdicionarTarefa = () => {
    if (novaTarefa.trim()) {
      adicionarTarefa(novaTarefa);
      setNovaTarefa("");
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
            <button
              className={popUp.btnAdicionar}
              onClick={() => {
                handleAdicionarTarefa();
                close();
              }}
            >
              Adicionar
            </button>
            <button className={popUp.btnCancelar} onClick={close}>
              Cancelar
            </button>
          </div>
        </section>
      )}
    </Popup>
  );
}

export default AdicionarTarefa;
