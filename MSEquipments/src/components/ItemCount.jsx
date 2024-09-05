import { useState } from "react";
import Button from "react-bootstrap/Button";

export const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const handleIncrease = () => {
    if (count < stock) setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };

  const handleAdd = () => {
    onAdd(count);
    setCount(1); // Reset count to 1 after adding
  };

  return (
    <div className="item-count">
      <Button variant="secondary" onClick={handleDecrease}>
        -
      </Button>
      <span className="carrito mx-2">{count}</span>
      <Button variant="secondary" onClick={handleIncrease}>
        +
      </Button>
      <br />
      <Button variant="primary" onClick={handleAdd}>
        Comprar
      </Button>
    </div>
  );
};
