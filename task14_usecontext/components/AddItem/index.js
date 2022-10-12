const products = [
  {
    name: 'Item 1',
    price: 100,
  },
  {
    name: 'Item 2',
    price: 200,
  },
  {
    name: 'Item 3',
    price: 300,
  },
];

const AddItem = (props) => {
  const { onAdd } = props;

  return (
    <select
      onChange={(e) => {
        const product = products.find((product) => product.name === e.target.value);
        onAdd({
          name: e.target.value,
          price: 100,
          qty: 1,
        });
      }}
    >
      {products.map((product, index) => {
        return (
          <option key={index} value={product.name}>
            {product.name}
          </option>
        );
      })}
    </select>
  );
};

export default AddItem;
