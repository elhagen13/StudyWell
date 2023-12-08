import React, { useState } from "react";
import "./CreateAccount.css";
import generateID from "../utils.js";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const [emailExistence, setEmailExistence] = useState(false);
  const [usernameExistence, setUsernameExistence] = useState(false);
  const navigate = useNavigate();

  async function accountCreation() {
    const email = document.getElementById("email");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    setUsernameExistence(false);
    setEmailExistence(false);

    const user = {
      id: generateID(),
      username: username.value,
      email: email.value,
      password: password.value,
    };

    fetchUserByUsername(username.value)
      .then((res) => {
        console.log("username", res.status);
        if (res.status === 200) {
          setUsernameExistence(true);
        }
        return;
      })
      .then(() => {
        fetchUserByEmail(email.value).then((res) => {
          console.log("email", res.status);
          if (res.status === 200) {
            setEmailExistence(true);
            return;
          }
        });
      })
      .then(() => {
        console.log(emailExistence, usernameExistence);
        if (!emailExistence && !usernameExistence) {
          createUser(user)
            .then((res) => {
              if (res.status === 201) {
                return res.json();
              } else {
                return null;
              }
            })
            .then((data) => {
              console.log("data", data);
              if (data !== null) {
                const userId = data.id;
                navigate(`/work/${userId}`);
              } else {
                console.log("account creation failed");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else console.log("failed");
      });
  }

  function fetchUserByEmail(email) {
    const promise = fetch(
      `https://studywell.azurewebsites.net/users/email/${email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return promise;
  }

  function fetchUserByUsername(username) {
    const promise = fetch(
      `https://studywell.azurewebsites.net/users/username/${username}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return promise;
  }

  function createUser(user) {
    const promise = fetch(`https://studywell.azurewebsites.net/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return promise;
  }

  return (
    <div className="createTotalPage">
      <div className="createAccount">
        <div className="studywellText">studywell</div>
        <form className="form">
          <label for="username" className="createSmall">
            username
          </label>
          <input type="text" id="username" className="createField" />
          {usernameExistence && (
            <div className="createIncorrect">USERNAME TAKEN</div>
          )}
          <label for="email" className="createSmall">
            email
          </label>
          <input type="text" id="email" className="createField" />
          {emailExistence && (
            <div className="createIncorrect">
              ACCOUNT ALREADY EXISTS FOR GIVEN EMAIL
            </div>
          )}
          <label for="password" className="createSmall">
            password
          </label>
          <input type="password" id="password" className="createField" />
          <input
            type="button"
            className="create_submit_info"
            value="Create Account"
            onClick={accountCreation}
          />
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
