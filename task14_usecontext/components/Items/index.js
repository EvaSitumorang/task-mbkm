const Items = (props) => {
  const { items } = props;

  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <span style={{ margin: '0 5px' }}>{item.name}</span>
            <span style={{ margin: '0 5px' }}>PRICE: {item.price}</span>
            <span style={{ margin: '0 5px' }}>QTY: {item.qty}</span>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Items;
