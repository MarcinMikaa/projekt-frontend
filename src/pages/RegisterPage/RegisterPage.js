import "./RegisterPage.css";
import React, { useState } from "react";
import axios from "axios";

function RegisterPage() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
  };

  return (
    <div className="register-page">
      <h1>Register Page</h1>
      <div>
        <input placeholder="username" onChange={(e) => setRegisterUsername(e.target.value)} />
        <input placeholder="password" onChange={(e) => setRegisterPassword(e.target.value)} />
        <button onClick={register}>Register</button>
      </div>
    </div>
  );
}

export default RegisterPage;
