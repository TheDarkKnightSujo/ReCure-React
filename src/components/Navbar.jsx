import React from "react";
import { Link } from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
        <nav className="navbar">
            <div className="logo">
                <Link to="/" className="flex flex-row items-center">
                <img src="logo-img.png" alt="ReCure Logo" />
                <span className="logo-text">ReCure</span>
                </Link>
            </div>

            {(window.location.href === "http://localhost:5173/dashboard") ? (
            <div className="links text-xl font-bold ">
                <Link to="/">Profile</Link>
            </div>
            ):(
            <ul className="nav-links">
                
                <li className="nav-item dropdown">
                    <Link to="/register" className="nav-link">Registration</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
            </ul>
            )}
            
        </nav>
        </>
    );
};
export default Navbar