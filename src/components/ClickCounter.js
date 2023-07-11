import Counter from "./CounterComponent";

const ClickCounter = () => {
  return (
    <Counter
      render={(count, incrementCount) => (
        <button onClick={incrementCount}>Click {count} times</button>
      )}
    />
  );
};
export default ClickCounter;
