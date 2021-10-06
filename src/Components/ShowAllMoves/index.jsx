function ShowAllMoves({ transactions }) {
  return (
    <div>
      <h2>Suas Movimentações:</h2>
      {transactions.map((fruit, index) => (
        <div key={index}>
          <h4>
            Fruta: {fruit.name}, Quantidade: {fruit.quantity}, Preço: R$:
            {fruit.price}
          </h4>
        </div>
      ))}

      <h2>
        Valor total de vendas: R$:
        {transactions
          .filter((fruit) => fruit.quantity < 0)
          .reduce(
            (acc, index) => acc + -1 * (index.price * index.quantity),
            0
          )}{" "}
      </h2>
    </div>
  );
}
export default ShowAllMoves;

// price * quantity, * -1, + acc(0)
