import React, { useState } from "react";
import Member from "./Components/Member";
import data from "./data.json";
const keys = Object.keys(data);

function App() {
  const [comp, setComp] = useState(0);
  return (
    <div>
      <div>
        {keys.map((d, i) => (
          <button
            onClick={() => {
              setComp(i);
            }}
          >
            {d}
          </button>
        ))}
      </div>
      <div>
        {data[keys[comp]].map((d) => (
          <Member member={d} />
        ))}
      </div>
    </div>
  );
}

export default App;
