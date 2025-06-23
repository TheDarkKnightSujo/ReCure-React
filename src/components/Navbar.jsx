import React from "react";
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
    const pathmame = useLocation().pathname;
    return (
        <>
        <nav className="navbar w-100vw">
            <div className="logo">
                <Link to="/" className="flex flex-row items-center">
                <img src="logo-img.png" alt="ReCure Logo" />
                <span className="logo-text">ReCure</span>
                </Link>
            </div>

            {(pathmame === "/dashboard") ? (
            <div className="links flex flex-row text-xl font-bold ">
                <Link to="/">Profile</Link>
                <Link to="/">Log Out</Link>
            </div>
            ):(
            <ul className="nav-links">
                
                <li className="nav-item dropdown">
                    <Link to="/register" className="nav-link w-[150px] text-center">Registration</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link w-[150px] text-center">Login</Link>
                </li>
            </ul>
            )}
            
        </nav>
        </>
    );
};
export default Navbar