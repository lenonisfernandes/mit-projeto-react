import React, { useState } from "react";
import Button from "./Button";


export default function Counter2() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h3>Contador</h3>
      <p>Valor: {count}</p>      
      <Button title="Decrementar" onClick={() => setCount(count - 1)}/>
      <Button title="Incrementar" onClick={() => setCount(count + 1)}/>
    </>
  );
}
