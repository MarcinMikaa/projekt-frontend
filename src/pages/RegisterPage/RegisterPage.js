import "./RegisterPage.css";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const history = useHistory();
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        email: registerEmail,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => {
      if (res.data.message === "User Created") {
        history.push("/login");
      }
    });
  };

  return (
    <div className="register-page">
      <div className="form-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          className="bi bi-person-circle"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
        <h1>Register</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupUsername">
            <Form.Control type="text" placeholder="Username" onChange={(e) => setRegisterUsername(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="email" placeholder="Email" onChange={(e) => setRegisterEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
          </Form.Group>
          <Button onClick={register}>Register</Button>
        </Form>
      </div>
    </div>
  );
}

export default RegisterPage;
