import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setcounter] = useState(0);
  let addValue = () => {
    setcounter(counter + 1);
  };

  let removeValue = () => {
    setcounter(counter - 1);
  };

  return (
    <div>
      <h1 className="font-bold">Counter App</h1>
      <p className="font-bold">Counter Value: {counter}</p> <br />
      <button onClick={addValue} className="bg-white text-black p-2 rounded font-bold">
       Add Value➕</button> <br /> <br />
      <button onClick={removeValue} className="bg-white text-black p-2 rounded font-bold" > Remove Value➖</button>
    </div>
  );
}

export default App;
