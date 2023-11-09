import React, {useEffect, useState, useRef} from "react";
import StartButton from "./StartButton";
import bluemingsound from "./blueming-alarm.mp3"; // Update the path to your alarm sound file
import { useNavigate } from "react-router-dom"; // Import useNavigate



function Timer(props) {
  const [minutes, setMinutes] = useState(props.time);
  const [seconds, setSeconds] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const [timerDone, setTimerDone] = useState(false);
  const timerRef = useRef(null);
  const navigate = useNavigate(); 


  var audio = new Audio(bluemingsound);

  useEffect(()=>{

    if (timerOn) {

    timerRef.current = setInterval(() => {

      if(seconds > 0){
      setSeconds(seconds - 1);
      }
      else if(seconds === 0 && minutes > 0){
        setMinutes(minutes - 1);
        setSeconds(3);
      }
      else{
        clearInterval(timerRef.current);
        setTimerOn(false);
        endTimer();
        audio.play();

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

  function endTimer(){
    setTimerDone(true);
    audio.play();
    navigate("/short");


  }

  return (
    <div className="container">


    { timerDone ? (
     
      <div className="timer-container">
        <h1>Finished</h1>
      </div>


    ) :

    <div className="timer-container">
      <h1>{minutes<10? "0"+minutes: minutes}:{seconds<10? "0"+seconds: seconds}</h1>
      <StartButton
        timerOn={timerOn}
        startTimer={startTimer}
        pauseTimer={pauseTimer}
      />
    </div>
    }
  </div>
  );
}

export default Timer;
