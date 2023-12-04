import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./LogIn.css";

function LogIn() {
  const [incorrectEmail, setEmail] = useState(false);
  const [incorrectPassword, setPassword] = useState(false);

  function authenticate() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    setEmail(false);
    setPassword(false);
    fetchUserByEmail(email.value)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          setEmail(true);
          return null;
        }
      })
      .then((data) => {
        if (data !== null && data.user.password === password.value) {
          window.location.href = "/work";
        } else {
          setPassword(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function fetchUserByEmail(email) {
    const promise = fetch(
      `http://studywell.azurewebsites.net/users/email/${email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return promise;
  }

  return (
    <div className="totalPage">
      <div className="logIn">
        studywell
        <form className="form">
          <label for="email" className="small">
            email
          </label>
          <input type="text" id="email" className="field" />
          {incorrectEmail && <div className="incorrect">USER NOT FOUND</div>}
          <label for="password" className="small">
            password
          </label>
          <input type="text" id="password" className="field" />
          {!incorrectEmail && incorrectPassword && (
            <div className="incorrect">INCORRECT PASSWORD</div>
          )}
          <input
            type="button"
            className="submit_info"
            value="Log In"
            onClick={authenticate}
          />
        </form>
        <NavLink to="/create" className="link">
          new user?
        </NavLink>
      </div>
    </div>
  );
}

export default LogIn;
