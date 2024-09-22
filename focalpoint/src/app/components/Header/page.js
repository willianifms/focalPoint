"use client";
import { useState, useEffect } from "react";
import styles from "../../styles/header.module.scss";
import Image from "next/image";
import moment from "moment";
import "moment/locale/pt-br";

moment.locale("pt-br");

const now = moment().format("LLLL").slice(0, 31);

export default function Header() {
  const [name, setName] = useState(null);

  useEffect(() => {
    // Executa apenas no lado do cliente
    let storedName = localStorage.getItem("name");

    if (!storedName) {
      // Solicita o nome do usuário
      storedName = prompt("Digite seu nome");
      if (storedName) {
        // Armazena o nome no localStorage
        localStorage.setItem("name", storedName);
      }
    }

    setName(storedName); // Atualiza o estado com o nome
  }, []);

  return (
    <header className={styles.header}>
      <section className={styles.logo}>
        <Image
          src="/images/shape.png"
          alt="Logo"
          width={33.1}
          height={32.91}
        />
        <Image
          src="/images/logotype.png"
          alt="Logotype"
          width={106}
          height={15}
          className={styles.logoType}
        />
      </section>

      <section className={styles.welcome}>
        <p className={styles.welcome}>
          Bem-Vindo de volta, {name || "Visitante"}
        </p>
      </section>

      <section>
        <p className={styles.date}>{now}</p>
      </section>
    </header>
  );
}
