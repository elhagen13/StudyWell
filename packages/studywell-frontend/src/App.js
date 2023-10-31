import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [started, setStarted] = useState(false);

  function toggleStartPause() {
    setStarted(!started);
  }

  return (
    <div className="App">
      <button onClick={toggleStartPause}>
        {started ? "Pause" : "Start"}
      </button>
    </div>
  );
}

export default App;