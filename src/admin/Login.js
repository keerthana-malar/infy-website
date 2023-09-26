import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "../css/admin.css";
import Validation from "./LoginValidation";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState(false);

  function handleInput(e) {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleLogin(e) {
    e.preventDefault();
    setErrors(Validation(values));
    if (errors.username === "" && errors.password === "") {
      axios
        .post("http://localhost:5000/login", values)
        .then((res) => {
          console.log(values)
          Cookies.set("user", values, { expires: 10 });
          navigate("/side");
        })
        .catch((err) => {
          console.log(err);
          setLoginError(true);
        });
    }
  }

  return (
    <>
      <div className="loginSec vh-100">
        <div className="loginBox rounded-3">
          <p className="mini-title ">Admin Login</p>
          {loginError && (
            <span className="text-danger">Invalid Username or password</span>
          )}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username">User Name</label>
              <input
                onChange={handleInput}
                type="text"
                className="form-control"
                id="username"
                name="username"
              />
              <span className="text-danger">{errors.username}</span>
            </div>
            <div className="mb-3">
              <label htmlFor="password">Password</label>
              <input
                onChange={handleInput}
                type="password"
                className="form-control"
                id="password"
                name="password"
              />
              <span className="text-danger">{errors.password}</span>
            </div>
            <div>
              <input type="submit" className="btns" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
