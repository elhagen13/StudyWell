import logo from './logo.svg';
import './App.css';
import './Timer.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [started, setStarted] = useState(false);

  function toggleStartPause() {
    setStarted(!started);
  }

  return (
    <div className="center">
      <button 
        className={`${started ? 'button-red' : 'button'}`} 
        onClick={toggleStartPause}>
          {started ? "Pause" : "Start"}
      </button>
    </div>
  );
}

export default App;