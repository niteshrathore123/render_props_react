import { useState } from "react";

const Counter = ({ render }) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return <div>{render(count, incrementCount)}</div>;
};
export default Counter;
