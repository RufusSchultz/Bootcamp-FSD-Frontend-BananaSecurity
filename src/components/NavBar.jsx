import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import {useNavigate, Link} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function NavBar() {
    const navigate = useNavigate();
    const contextContent = useContext(AuthContext);

    return (
        <nav>
            <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
            </Link>

            {!contextContent.isAuth && <div>
                <button
                    type="button"
                    onClick={() => navigate('/signin')}
                >
                    Log in
                </button>
                <button
                    type="button"
                    onClick={() => navigate('/signup')}
                >
                    Registreren
                </button>
            </div>}

            {contextContent.isAuth &&
            <div>
                <span>{contextContent.user}</span>
                <button
                    type="button"
                    onClick={contextContent.logOutHandler}
                >
                    Log out
                </button>
            </div>}
        </nav>
    );
}

export default NavBar;