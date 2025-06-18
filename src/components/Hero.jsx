import React from "react";
import './Hero.css';
const Hero=()=>
{
    return(
        <>
            <section className="hero w-100vw mx-auto">
                <div className="hero-content">
                    <h1>Your Digital Companion for a Safer, Smarter Recovery</h1>
                    <p>Personalized care, real-time monitoring, and peace of mind after every discharge.</p>
                    <div className="hero-buttons">
                        <a href="/login" class="hero-btn primary-btn w-[200px]">Login</a>
                        <a href="/register" class="hero-btn primary-btn w-[200px]">Register Now</a>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Hero