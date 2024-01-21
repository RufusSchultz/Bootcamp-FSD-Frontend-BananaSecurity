import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function SignIn() {
    const contextContent = useContext(AuthContext);

    const [emailValue, setEmailValue] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        contextContent.logInHandler(emailValue);
    }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={handleSubmit}>
          <label htmlFor={"email"}>Email:</label>
          <input id={"email"}
                 type="email"
                 value={emailValue}
                 onChange={(e)=> setEmailValue(e.target.value)}
          />
          <label htmlFor={"password"}>Wachtwoord:</label>
          <input id={"password"} type="password"/>
        <button type={"submit"}>Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;