import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div
        className="w-full h-screen duration-700"
        style={{ background: color }}
      >
        <div className="flex flex-wrap justify-center fixed bottom-12 inset-x-0 ">
          <div className="flex flex-wrap justify-center outline-none bg-white px-4 py-3 rounded-lg gap-4">
            <button
              onClick={() => setColor("yellow")}
              className=" outline-none bg-yellow-700 px-4 py-2 rounded-lg"
            >
              yellow
            </button>
            <button
              onClick={() => setColor("blue")}
              className=" outline-none bg-blue-700 px-4 py-2 rounded-lg"
            >
              blue
            </button>
            <button
              onClick={() => setColor("green")}
              className=" outline-none bg-green-700 px-4 py-2 rounded-lg"
            >
              green
            </button>
            <button
              onClick={() => setColor("pink")}
              className=" outline-none bg-pink-400  px-4 py-2 rounded-lg"
            >
              pink
            </button>
            <button
              onClick={() => setColor("orange")}
              className=" outline-none bg-orange-700 px-4 py-2 rounded-lg"
            >
              orange
            </button>
            <button
              onClick={() => setColor("purple")}
              className=" outline-none bg-purple-700 px-4 py-2 rounded-lg"
            >
              purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
