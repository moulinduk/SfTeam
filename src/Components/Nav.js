import React from "react";
import "./Nav.css";

const compStyle = {
  backgroundColor: "rgb(56, 107, 141)"
};

function Nav(props) {
  return (
    <div class="nav-container borderYtoX">
      {props.keys.map((d, i) => (
        <button
          style={i === props.comp ? compStyle : {}}
          onClick={() => {
            props.setComp(i);
          }}
        >
          {d}
        </button>
      ))}
    </div>
  );
}

export default Nav;
