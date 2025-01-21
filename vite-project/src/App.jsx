import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  let addValue = () => {
    setCounter(counter + 1);
  };

  let removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">Counter App</h1>
      <p className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl mt-4">
        Counter Value: {counter}
      </p>
      <div className="mt-6">
        <button
          onClick={addValue}
          className="bg-blue-500 text-white px-4 py-2 rounded font-bold transition-all duration-300 hover:bg-blue-600 sm:px-5 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-5"
        >
          Add Value ➕
        </button>
        <button
          onClick={removeValue}
          className="bg-red-500 text-white px-4 py-2 rounded font-bold transition-all duration-300 hover:bg-red-600 ml-4 sm:px-5 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-5"
        >
          Remove Value ➖
        </button>
      </div>
    </div>
  );
}

export default App;
