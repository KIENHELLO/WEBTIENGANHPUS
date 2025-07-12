import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">🌐 EnglishWeb</div>
            <ul className="navbar-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/writing">Writing</Link></li>
                <li><Link to="/reading">Reading</Link></li>
                <li><Link to="/vocabulary">Vocabulary</Link></li>
                <li><Link to="/testcenter">Testcenter</Link></li>
            </ul>
            <div className="navbar-account">
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;
