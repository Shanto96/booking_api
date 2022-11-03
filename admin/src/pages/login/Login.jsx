import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });
  const userRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const { user, loading, error, dispatch } = useContext(AuthContext);
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    console.log(userRef.current.value);
    console.log(passwordRef.current.value);
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(res.data);
      if (res.data.admin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "User is not admin" },
        });
      }
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };
  console.log(user);
  return (
    <div className="login">
      <form action="" className="user-login-form">
        <h2>Online Booking</h2>
        <input
          type="text "
          placeholder="User name"
          id="username"
          ref={userRef}
        />
        <input
          type="password"
          placeholder="Password"
          className="password"
          id="password"
          ref={passwordRef}
        />
        <button
          type="submit"
          className="btn login-btn "
          onClick={(e) => handleClick(e)}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
