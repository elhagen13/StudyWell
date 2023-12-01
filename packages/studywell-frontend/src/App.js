import "./App.css";
import "./Timer.css";
import WorkScreen from "./pages/WorkScreen"
import LogIn from "./pages/LogIn"
import CreateAccount from "./pages/CreateAccount";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/work/*" element={<WorkScreen />} />
        <Route path ="/" element = {<LogIn />} />
        <Route path = "/create" element = {<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
