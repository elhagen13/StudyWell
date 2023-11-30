import "../App.css";
import "../Timer.css";
import React from "react";
import Timer from "../components/timer/Timer";
import Navbar from "../components/navbar/NavBar"
import "./Page.css";

function LongBreak() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Timer time={15} />
      </div>
      <div className="break_text">
        <p>Stretch and grab a snack!</p>
      </div>
    </div>
  );
}

export default LongBreak;
