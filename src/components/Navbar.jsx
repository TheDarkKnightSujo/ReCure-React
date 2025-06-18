import React  from "react";
import { Link } from "react-router-dom"
import "./Navbar.css";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="logo-img.png" alt="ReCure Logo" />
                <span className="logo-text">ReCure</span>
            </div>
            
            <ul className="nav-links">
                <li className="nav-item">
                    <Link to="/help" className="nav-link">Help & Support</Link>
                </li>
                <li className="nav-item dropdown">
                    <Link to="#" className="nav-link">Registration</Link>
                    <div className="dropdown-content">
                        <Link to="/register/patient" className="dropdown-link">Patient</Link>
                        <Link to="/register/doctor" className="dropdown-link">Doctor</Link>
                        <Link to="/register/caregiver" className="dropdown-link">Caregiver</Link>
                    </div>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar