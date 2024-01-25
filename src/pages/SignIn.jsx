import React, {useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import axios from "axios";

function SignIn() {
    const contextContent = useContext(AuthContext);
    const endpoint = "http://localhost:3000/login"

    const [formState, setFormState] = useState({
        email: "",
        password: "",
    })

    const [emailValue, setEmailValue] = useState("")

    function handleFormChange(e) {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post(endpoint, formState);
            console.log(response);
            contextContent.logInHandler(response.data.accessToken);
        } catch(e) {
            console.error(e);
        }
        // contextContent.logInHandler(formState);
    }

  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form onSubmit={handleSubmit}>
          <label htmlFor={"email"}>Email:</label>
          <input id={"email"}
                 type="email"
                 name={"email"}
                 value={formState.email}
                 onChange={handleFormChange}
          />
          <label htmlFor={"password"}>Wachtwoord:</label>
          <input id={"password"}
                 type="password"
                 name={"password"}
                 value={formState.password}
                 onChange={handleFormChange}
          />
        <button type={"submit"}>Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;