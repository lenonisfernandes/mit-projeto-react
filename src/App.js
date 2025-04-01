import React, { useEffect, useState } from "react";
import "./styles.css";
import Users from "./Users";
import InputNome from "./InputNome";
import Header from "./Header";
import Counter from "./Counter";
import Button from "./Button";
import Card from "./Card";
import Feedback from "./Feedback";
import 'bootstrap/dist/css/bootstrap.min.css';

//OBJETO
const user = {
  nome: "Lenon",
  idade: 32,
  profissao: "dev",
  cidade: "Nova Iguaçu",
  admin: true,
};

/*const users = [
  {
    nome: "Lenon",
    idade: 33,
    profissao: "dev",
    cidade: "Nova Iguaçu",
    admin: true,
  },
  {
    nome: "Igor",
    idade: 29,
    profissao: "programador",
    cidade: "Uberlândia",
    admin: false,
  },
  {
    nome: "João",
    idade: 25,
    profissao: "estagiário",
    cidade: "João Pessoa",
    admin: false,
  },
];*/

//<UserCard user={user} />
//<UserCard user={users[0]} />
//<UserCard user={users[1]} />
//<UserCard user={users[2]} />

const isAdmin = (admin) => (admin ? <i>Sim</i> : <i>Não</i>);

export default function App() {
  return (
    <div className="App">
      <Header />
      <InputNome />
      {/* <Button color="danger" title="Danger!"/> */}
      {/* <Button color="primary" title="Primary!"/> */}
      <Counter />
      <Feedback />
      {/* <Card /> */}
      {/* <Users /> */}
    </div>
  );
}
