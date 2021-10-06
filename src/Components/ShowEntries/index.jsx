function ShowEntries({ entries }) {
  return (
    <div>
      <h2>Suas Entradas:</h2>
      {entries.map((fruit, index) => (
        <div key={index}>
          <h4>
            Nome: {fruit.name}, Quantidade: {fruit.quantity}, Preço: R$:
            {fruit.price}{" "}
          </h4>
        </div>
      ))}
    </div>
  );
}

export default ShowEntries;
