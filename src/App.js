import Basket from "./components/Basket";

function App() {
  return (
    <div>
      <h1>MY BASKET</h1>
      <Basket text="fruit" />
      <Basket text="dairy" />
      <Basket text="nuts" />
    </div>
  );
}

export default App;
