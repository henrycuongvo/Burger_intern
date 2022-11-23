import { useEffect, useState } from "react";
import { Counter } from "../../features/counter/Counter";
function goiApi() {
  console.log("goi API");
}
const Order = () => {
  const [salad, setSalad] = useState(0);
  const [bacon, setBacon] = useState(0);
  const [cheese, setCheese] = useState(0);
  const [meat, setMeat] = useState(0);

  useEffect(() => {
    if ((salad, bacon, cheese, meat)) {
      console.log("unlock");
    }
  }, [salad, bacon, cheese, meat]);
  return <Counter />;
};
export default Order;
