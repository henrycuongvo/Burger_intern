import { useState } from "react";
import { Counter } from "../../features/counter/Counter";

const Order = () => {
  const [salad, setSalad] = useState(0);
  const [bacon, setBacon] = useState(0);
  const [cheese, setCheese] = useState(0);
  const [meat, setMeat] = useState(0);

  return <Counter />;
};
export default Order;
