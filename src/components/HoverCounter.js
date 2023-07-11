import Counter from "./CounterComponent";

const HoverCounter = () => {
  return (
    <Counter
      render={(count, incrementCount) => (
        <div onMouseOver={incrementCount}>Hovered {count} times</div>
      )}
    />
  );
};
export default HoverCounter;
