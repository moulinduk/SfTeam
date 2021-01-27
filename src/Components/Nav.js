import React, {useState} from "react";
import "./Nav.css";

const compStyle = {
  backgroundColor: "rgb(56, 107, 141)"
};

function Nav(props) {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth < 700)
  //console.log(screen.width)
  window.addEventListener('resize', () => {setWidth(window.innerWidth < 700)})
  return (
    (width)?
    (<div className="hamburger-menu">
      <input id="menu__toggle" type="checkbox" checked={open} />
      <label className="menu__btn" onClick={()=> {setOpen(!open)}}>
        <span></span>
      </label>

      <ul className="menu__box">
        <div className="nav-container borderYtoX">
          {props.keys.map((d, i) => (
            <button
              style={i === props.comp ? compStyle : {}}
              onClick={() => {
                props.setComp(i);
                setOpen(false);
              }}
            >
              {d}
            </button>
          ))}
        </div>
      </ul>
    </div>):
    (
      <div className="nav-container borderYtoX">
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
      </div>)
  );
  // return (
  // );
}

export default Nav;
