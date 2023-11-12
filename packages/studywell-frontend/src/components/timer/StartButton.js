import React, { useState, useEffect } from 'react';
import Timer from './Timer';

function StartButton(props) {
  const { timerOn, startTimer, pauseTimer } = props;

  function handleClick() {
        if (timerOn) {
            pauseTimer();
        } 
        else {
            startTimer();
        }
    }

    return(
    <div className="center">
      <button 
        className={timerOn ? 'button-red' : 'button'} 
        onClick={handleClick}>
            {timerOn ? 'Pause' : 'Start'}
      </button>
    </div>
    );
}

export default StartButton;