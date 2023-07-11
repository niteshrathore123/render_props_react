import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Render Props</h1>
      <h2>Used to share the common functionality in between the components!</h2>
      <HoverCounter />
      <ClickCounter />
    </div>
  );
}
