import { Button } from "@material-ui/core";
import { useState } from "react";

function RegisterPage({
  transactions,
  setTransactions,
  entries,
  setEntries,
  outputs,
  setOutputs,
}) {
  const [nameFruit, setNameFruit] = useState("");
  const [quantityFruit, setQuantityFruit] = useState();
  const [priceFruit, setPriceFruit] = useState();

  const handleEntries = () => {
    const submitEntries = {
      name: nameFruit,
      quantity: quantityFruit,
      price: priceFruit,
    };
    setEntries([...entries, submitEntries]);
    setTransactions([...transactions, submitEntries]);
  };

  const handleOutput = () => {
    const submitOutput = {
      name: nameFruit,
      quantity: quantityFruit,
      price: priceFruit,
    };
    setOutputs([...outputs, submitOutput]);
    setTransactions([...transactions, submitOutput]);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form>
      <h2>Registrar nova Entrada/Saída</h2>
      <input
        type="text"
        placeholder="Nome da fruta:"
        value={nameFruit}
        onChange={(evt) => setNameFruit(evt.target.value)}
      />
      <input
        type="text"
        placeholder="Quantidade de Entradas/Saídas:"
        value={quantityFruit}
        onChange={(evt) => setQuantityFruit(evt.target.value)}
      />
      <input
        type="text"
        placeholder="Preço da Entrada/Saída:"
        value={priceFruit}
        onChange={(evt) => setPriceFruit(evt.target.value)}
      />
      <Button
        type="submit"
        onClick={() => handleEntries}
        variant="contained"
        color="primary"
      >
        Registrar Entrada
      </Button>
      <Button
        type="submit"
        onClick={() => handleOutput}
        variant="contained"
        color="primary"
      >
        Registrar Saída
      </Button>
    </form>
  );
}
export default RegisterPage;
