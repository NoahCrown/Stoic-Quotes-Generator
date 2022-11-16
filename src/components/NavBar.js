import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <img className="nav-logo" src="https://i.imgur.com/FuTs95V.png" alt="Stoic-logo"></img>
            <h1 className="nav-heading">Stoic Quotes Generator</h1>
            <ul className="nav-links">
                <li>
                    <Link  to="/" className="nav-items">Home</Link>
                </li> 
                <li>
                    <Link to="/what-is-stoicism"className="nav-items">What is stoicism?</Link>
                </li>
                <li>
                    <Link to="/list-of-quotes" className="nav-items">Quotes</Link>
                </li>

            </ul>
        </nav>
    )
}