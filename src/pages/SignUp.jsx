import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";

function SignUp() {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        username: "",
        email: "",
        password: "",
    });

    const endpoint = "http://localhost:3000/register"

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
            navigate("/signin");
        } catch(e) {
            console.error(e);
        }
    }


    return (
        <>
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque
                eligendi
                harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur
                deserunt
                doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor={"username"}>Gebruikersnaam:</label>
                <input type="text"
                       id={"username"}
                       name={"username"}
                       value={formState.username}
                       onChange={handleFormChange}
                />
                <label htmlFor={"email"}>E-mail:</label>
                <input type="email"
                       id={"email"}
                       name={"email"}
                       value={formState.email}
                       onChange={handleFormChange}
                />
                <label htmlFor={"password"}>Wachtwoord:</label>
                <input type="password"
                       id={"password"}
                       name={"password"}
                       value={formState.password}
                       onChange={handleFormChange}
                />
                <button type={"submit"}>Maak account</button>
            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}


export default SignUp;