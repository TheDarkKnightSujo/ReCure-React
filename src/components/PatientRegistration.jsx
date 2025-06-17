import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./PatientRegistration.css"
const PatientRegistration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        // Add more fields as needed
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Patient Registration Data:", formData);
        // API call to backend
    };

    return (
        <div className="container">
            <h2>Patient Registration</h2>
            <p style={{ textAlign: "center" }}>Register to access ReCure</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default PatientRegistration;