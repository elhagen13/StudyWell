import './App.css';
import './Timer.css';
import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import './Page.css'

function LongBreak() {

  return (
    <div>
      <div className="container">
        <Timer time = {2}/>
      </div>
      <div className = "break_text">
        <p>Stretch and grab a snack!</p>
      </div>
    </div>
  );
}

export default LongBreak;