function ShowOutputs({ outputs }) {
  return (
    <div>
      <h2>Suas Saídas:</h2>
      {outputs.map((fruit, index) => (
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
export default ShowOutputs;
