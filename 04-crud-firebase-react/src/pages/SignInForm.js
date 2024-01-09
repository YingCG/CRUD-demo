import React, { useState } from "react";
import signIn from "../auth/signIn";
import { useNavigate } from "react-router-dom";

function SignInForm() {
  const [input, setInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handelLogin = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onSignInClicked = async (e) => {
    e.preventDefault();
    // Firebase code goes here
    try {
      const { email, password } = input;
      await signIn(email, password);
      navigate("/profile");
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  const onSignInWithGoogleClicked = async () => {
    // Firebase code goes here
  };

  return (
    <div>
      <input
        name="email"
        type="text"
        onChange={handelLogin}
        placeholder="someone@gmai.com"
        value={input.email}
      />
      <input
        name="password"
        type="password"
        onChange={handelLogin}
        placeholder="password"
        value={input.password}
      />
      <button onClick={onSignInClicked}>SignIn</button>
    </div>
  );
}

export default SignInForm;
