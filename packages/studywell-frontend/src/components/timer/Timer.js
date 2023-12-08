import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from "react";
import StartButton from "./StartButton";
import bluemingsound from "../../sounds/blueming-alarm.mp3"; // Update the path to your alarm sound file
import { useNavigate } from "react-router-dom"; // Import useNavigate
import tomato from "../../images/tomato.png";
import "./Timer.css";

function Timer(props) {
  const [minutes, setMinutes] = useState(props.time);
  const [seconds, setSeconds] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [timerDone, setTimerDone] = useState(false);
  const [message, setMessage] = useState("");
  const timerRef = useRef(null);
  const navigate = useNavigate();
  console.log(minutes);

  const audio = useMemo(() => new Audio(bluemingsound), []);
  const breakCount = props.breakCount;
  const page = props.page;

  useEffect(() => {
    setMinutes(props.time);
  }, [props.time]);

  useEffect(() => {
    updateMessage(page);
  }, [page]);

  function updateMessage(page) {
    if (page === "main") {
      setMessage("Time to study!");
    } else if (page === "shortbreak") {
      setMessage("Here's a short break!");
    } else if (page === "longbreak") {
      setMessage("Enjoy a long break!");
    }
  }
  const endTimer = useCallback(() => {
    setTimerDone(true);
    audio.play();
    if (page === "main") {
      props.setBreakCount((count) => count + 1);
    }
    console.log(breakCount);
    if (page === "shortbreak" || page === "longbreak") {
      navigate("/work");
    } else {
      if (breakCount % 3 === 0) {
        navigate("/work/longbreak");
      } else {
        navigate("/work/shortbreak");
      }
    }
  }, [audio, navigate, breakCount, props, page]);

  useEffect(() => {
    if (timerOn) {
      timerRef.current = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (seconds === 0 && minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(3);
        } else {
          clearInterval(timerRef.current);
          setTimerOn(false);
          endTimer();
          audio.play();
        }
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [timerOn, minutes, seconds, audio, endTimer]);

  function startTimer() {
    setTimerOn(true);
  }
  function pauseTimer() {
    setTimerOn(false);
  }

  useEffect(() => {
    if (timerDone) {
      navigate("/work");
    }
  }, [timerDone, navigate]);

  return (
    <div className="container">
      {timerDone ? (
        <div className="timer-container">
          <h1>Finished</h1>
        </div>
      ) : (
        <div className="timer-container">
          <h1>
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </h1>
          <StartButton
            timerOn={timerOn}
            startTimer={startTimer}
            pauseTimer={pauseTimer}
          />

          <div className="pomodoros">
            <h2>Pomodoros Completed: {breakCount - 1}</h2>
            <img className="image" src={tomato} alt="tomato" />
          </div>
          <h3>{message}</h3>
        </div>
      )}
    </div>
  );
}

export default Timer;
