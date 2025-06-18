import React from "react";
import './Features.css'
const Features=()=>{
    return(
        <section className="features w-100vw mx-auto">
        <h1 className="title">Why Choose Recure?</h1>
        <div className="features-grid">
            <div className="feature-card">
                <div className="feature-icon"><i class="fas fa-briefcase"></i></div>
                <h3 className="feature-title">Quality </h3>
                <p className="feature-desc">Access to verified doctors and caregivers.</p>
            </div>
            <div className="feature-card">
                <div className="feature-icon"><i class="fas fa-certificate"></i></div>
                <h3 className="feature-title">Certified AI Assistant</h3>
                <p className="feature-desc">ML model analyzes symptoms + vitals to flag potential complications.</p>
            </div>
            <div className="feature-card">
                <div className="feature-icon"><i class="fas fa-user-graduate"></i></div>
                <h3 className="feature-title">Personalized Recovery </h3>
                <p className="feature-desc">Includes medication schedules, exercise routines, diet, and follow-ups.</p>
            </div>
        </div>
        </section>
    );
}
export default Features