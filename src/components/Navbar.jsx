import React from "react";
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
    const pathmame = useLocation().pathname
    console.log(pathmame);
    return (
        <>
        <nav className="navbar">
            <div className="logo">
                <Link to="/" className="flex flex-row items-center">
                <img src="logo-img.png" alt="ReCure Logo" />
                <span className="logo-text">ReCure</span>
                </Link>
            </div>

            {(pathmame === "/dashboard") ? (
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