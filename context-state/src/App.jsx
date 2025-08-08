import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterProvider from "./context/CounterContext";
function App() {
  return (
    <CounterProvider>
      <Counter />
      <Increment />
      <Decrement />
    </CounterProvider>
  );
}

export default App;
