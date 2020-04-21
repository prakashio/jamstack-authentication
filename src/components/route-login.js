import React from "react";
import { useIdentityContext } from "react-netlify-identity";
import { navigate } from "gatsby";

const Login = ({ showModal }) => {
  const identity = useIdentityContext();

  if (identity && identity.isLoggedIn) {
    navigate("/dashboard/secrets", { replace: true });
  }

  return (
    <>
      <h1>Log In or Sign Up</h1>
      <button onClick={showModal} type="button">
        Log In
      </button>
    </>
  );
};

export default Login;
