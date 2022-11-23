import { useEffect, useState } from "react";
function goiApi() {
  console.log("goi API");
}
const Order = ({ name, setName }) => {
  const [salad, setSalad] = useState(0);
  const [bacon, setBacon] = useState(0);
  const [cheese, setCheese] = useState(0);
  const [meat, setMeat] = useState(0);

  useEffect(() => {
    if ((salad, bacon, cheese, meat)) {
      console.log("unlock");
    }
  }, [salad, bacon, cheese, meat]);

  useEffect(() => {
    return () => {
      setName("");
      console.log("Mới thoát OrderPage");
    };
  }, []);

  return <Counter />;
};
export default Order;
