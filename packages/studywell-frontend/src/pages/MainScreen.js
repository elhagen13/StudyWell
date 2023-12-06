import "../App.css";
import "../Timer.css";
import React from "react";
import Timer from "../components/timer/Timer";
import "./Page.css";
import ColorBox from "../components/colorbox/ColorBox";

function MainScreen({ breakCount, setBreakCount }) {
  document.body.style.backgroundColor = "#374954";


  return (
    <div id="MainScreen">
      <ColorBox />
      <div className="container">
        <Timer
          time={1}
          breakCount={breakCount}
          setBreakCount={setBreakCount}
          page={"main"}
        />
      </div>
    </div>
  );
}

export default MainScreen;
