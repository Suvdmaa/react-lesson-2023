import { useState } from "react";
import { Navigate } from "react-router-dom";
import Header from "./Header";

export default function Register() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (formSubmitted) {
    return <Navigate to={"/login"} />;
  }

  const handleSubmits = function (e) {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div>
      <h1>Register Form</h1>
      <Header />
      <form onSubmit={handleSubmits}>
        <label htmlFor="email">Email:</label>
        <input name={"email"} type="email"></input>
        <br />
        <label htmlFor="username">Username:</label>
        <input name={"username"} type="username"></input>
        <br />
        <label htmlFor="password">Password:</label>
        <input name={"password"} type="password"></input>
        <br />
        <label htmlFor="conpassword">Confirm Password:</label>
        <input name={"conpassword"} type="password"></input>
        <br />
        <button>Sign in</button>
      </form>
    </div>
  );
}
