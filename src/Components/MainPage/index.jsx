import { Button } from "@material-ui/core";
import { useState } from "react";
import RegisterPage from "../RegisterPage";
import ShowAllMoves from "../ShowAllMoves";
import ShowEntries from "../ShowEntries";
import ShowOutputs from "../ShowOutputs";

function MainPage() {
  const [transactions, setTransactions] = useState([
    { name: "banana", quantity: 100, price: 5 },
    { name: "morango", quantity: -10, price: 2 },
    { name: "laranja", quantity: 50, price: 6 },
  ]);

  const [entries, setEntries] = useState([]);
  const [outputs, setOutputs] = useState([]);
  const [selectEntOrOut, setSelectEntOrOut] = useState(false);

  const showAllEntries = () => setSelectEntOrOut(true);
  const showAllOutputs = () => setSelectEntOrOut(false);

  return (
    <>
      <RegisterPage
        entries={entries}
        setEntries={setEntries}
        outputs={outputs}
        setOutputs={setOutputs}
        transactions={transactions}
        setTransactions={setTransactions}
      />

      {selectEntOrOut ? (
        <div>
          <ShowEntries entries={entries} />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              showAllOutputs();
            }}
          >
            Saídas de Frutas{" "}
          </Button>
        </div>
      ) : (
        <div>
          <ShowOutputs outputs={outputs} />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              showAllEntries();
            }}
          >
            Entradas de Frutas{" "}
          </Button>
        </div>
      )}

      <ShowAllMoves transactions={transactions} />
    </>
  );
}
export default MainPage;
