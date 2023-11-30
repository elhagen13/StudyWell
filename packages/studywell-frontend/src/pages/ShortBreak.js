import "../App.css";
import "../Timer.css";
import "./Page.css";
import Navbar from "../components/navbar/NavBar"
import Timer from "../components/timer/Timer";

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
    </div>
  );
}

export default ShortBreak;
