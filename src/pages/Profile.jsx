import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import axios from "axios";


function Profile() {
    const contextContent = useContext(AuthContext);
    const [privateContent, setPrivateContent] = useState(null);

    useEffect(() => {
        const endpoint = "http://localhost:3000/660/private-content"
        const token = localStorage.getItem('token');

        async function fetchPrivateContent() {
            try {
                const response = await axios.get(endpoint, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                })
                setPrivateContent(response);
                console.log(response);
            } catch (e) {
                console.error(e);
            }
        }

        void fetchPrivateContent();

    }, []);

    return (
        <>
            <h1>Profielpagina</h1>
            <section>
                <h2>Gegevens</h2>
                <p><strong>Gebruikersnaam:</strong> {contextContent.user.username}</p>
                <p><strong>Email:</strong> {contextContent.user.email}</p>
            </section>
            <section>
                <h2>Strikt geheime profiel-content</h2>

                {privateContent
                    ?
                    <div>
                        <h3>{privateContent.data.title}</h3>
                        <p>{privateContent.data.content}</p>
                    </div>
                    :
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga
                        id
                        molestias qui quo unde?</p>
                }
            </section>
            <p>Terug naar de <Link to="/">Homepagina</Link></p>
        </>
    );
}

export default Profile;