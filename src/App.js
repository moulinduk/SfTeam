import React, { useState } from "react";
import Member from "./Components/Member";
import Nav from "./Components/Nav";
import data from "./data.json";
import "./App.css";
const keys = Object.keys(data);

function App() {
  const [comp, setComp] = useState(0);
  return (
    <div>
      <div>Spring Fest</div>
      <Nav keys={keys} setComp={setComp} comp={comp} />
      <div className="cards-container">
        {data[keys[comp]].map((d) => (
          <Member member={d} />
        ))}
      </div>
    </div>
  );
}

export default App;
