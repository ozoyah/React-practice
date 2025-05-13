import React from "react";
import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [newUserName, setNewUserName] = useState("");

  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.value.username);
  return (
    <div>
      {username === "" ? (
        <h1>THIS IS THE LOGIN PAGE</h1>
      ) : (
        <h1>welcome {username}</h1>
      )}
      <input
        onChange={(e) => {
          setNewUserName(e.target.value);
        }}
      />
      <button onClick={() => dispatch(login({ username: newUserName }))}>
        submit Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Login;
