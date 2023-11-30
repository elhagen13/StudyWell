import "../App.css";
import "../Timer.css";
import "./Page.css";
import Navbar from "../components/navbar/NavBar"
import Timer from "../components/timer/Timer";
import ColorBox from "../components/colorbox/ColorBox";

function ShortBreak() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Timer time={5} />
      </div>
      <div className="break_text">
        <p>Stretch and grab a snack!</p>
      </div>
      <ColorBox />
    </div>
  );
}

export default ShortBreak;
