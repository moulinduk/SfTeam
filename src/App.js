import React, { useState } from "react";
import Member from "./Components/Member";
import Nav from "./Components/Nav";
import data from "./data.json";
const keys = Object.keys(data);

function App() {
  const [comp, setComp] = useState(0);
  return (
    <div>
      <Nav keys={keys} setComp={setComp} comp={comp} />
      <div>
        {data[keys[comp]].map((d) => (
          <Member member={d} />
        ))}
      </div>
    </div>
  );
}

export default App;
