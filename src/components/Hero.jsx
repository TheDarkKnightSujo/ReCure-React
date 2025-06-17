import React from "react";
import './Hero.css';
const Hero=()=>
{
    return(
        <>
            <section className="hero">
                <div className="hero-content">
                    <h1>Your Digital Companion for a Safer, Smarter Recovery</h1>
                    <p>Personalized care, real-time monitoring, and peace of mind after every discharge.</p>
                    <div className="hero-buttons">
                        <a href="#" class="hero-btn primary-btn">Login</a>
                        <a href="#" class="hero-btn secondary-btn"> Register Now</a>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Hero