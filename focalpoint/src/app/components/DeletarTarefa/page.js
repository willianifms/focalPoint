import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { FiTrash } from "react-icons/fi";
import popUp from "../../styles/popUp.module.scss";

export default function DeletarTarefa({ onConfirmDelete }) {
  return (
    <Popup
      trigger={
        <button className={popUp.btnTrash}>
          <FiTrash size={20} />
        </button>
      }
      modal
      nested
      contentStyle={{
        padding: "0",
        borderRadius: "16px",
        width: "450px",
        maxWidth: "100%",
        margin: "auto",
        maxHeight: "auto",

        
      }}
      overlayStyle={{
        background: "rgba(255, 255, 255, 0.9)",
      }}
    >
      {(close) => (
        <section className={popUp.containerPopUp}>
          <h1 className={popUp.title}>Deletar Tarefa</h1>
          <p className={popUp.textAlert}>
            Tem certeza que você deseja deletar essa tarefa?
          </p>
          <div className={popUp.containerButton}>
            <button className={popUp.btnCancelar} onClick={close}>
              Cancelar
            </button>
            <button
              className={popUp.btnDeletar}
              onClick={() => {
                onConfirmDelete();
                close();
              }}
            >
              Deletar
            </button>
          </div>
        </section>
      )}
    </Popup>
  );
}
