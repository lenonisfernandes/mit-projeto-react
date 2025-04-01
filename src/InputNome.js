import React, { useState } from "react";

export default function InputNome() {
  const [nome, setNome] = useState(""); //Definindo valor incicial do estado

  return (
    <>
      <label>Nome</label>
      <input
        type="text"
        value={nome}
        onChange={(ev) => setNome(ev.target.value)}
        placeholder="Digite seu nome"
      />
      <h2>Olá, {nome ? nome : "Visitante"}</h2>
    </>
  );
}
