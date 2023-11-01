import React, {useEffect, useState, useRef} from "react";
import StartButton from "./StartButton";

function Timer(props) {
  const [minutes, setMinutes] = useState(props.time);
  const [seconds, setSeconds] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const timerRef = useRef(null);

  useEffect(()=>{

    if (timerOn) {

    timerRef.current = setInterval(() => {

      if(seconds > 0){
      setSeconds(seconds - 1);
      }
      else if(seconds === 0 && minutes > 0){
        setMinutes(minutes - 1);
        setSeconds(59);
      }
      else{
        clearInterval(timerRef.current);
        setTimerOn(false);
      }
    }, 1000)}
    return ()=>clearInterval(timerRef.current);
  }, [timerOn, minutes, seconds]);

  function startTimer() {
    setTimerOn(true);
  };
  function pauseTimer(){
    setTimerOn(false);
  }

  return (
    <div className="container">
        <div className="timer-container">
      <h1>{minutes<10? "0"+minutes: minutes}:{seconds<10? "0"+seconds: seconds}</h1>
        <StartButton
          timerOn={timerOn}
          startTimer={startTimer}
          pauseTimer={pauseTimer}
        />
    </div>
    </div>
  );
}

export default Timer;
