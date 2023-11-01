//import logo from './logo.svg';
import './App.css';
import './Timer.css';
import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import StartButton from './StartButton';

function App() {
  return (

      <div className="container">
        <Timer time = {25}/>
      </div>
  );
}

export default App;