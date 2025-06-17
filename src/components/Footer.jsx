import React from "react";
import './Footer.css';
const Footer=()=>
{
    return(
        <>
        <footer>
        <div className="footer-content">
            <div className="footer-column">
                <h3>About Us</h3>
                <ul className="footer-links">
                    <li><a href="#" className="footer-link">Our Story</a></li>
                    <li><a href="#" className="footer-link">Team</a></li>
                    <li><a href="#" className="footer-link">Careers</a></li>
                    <li><a href="#" className="footer-link">Contact Us</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>For Patients</h3>
                <ul className="footer-links">
                    <li><a href="#" className="footer-link">Browse Treatments</a></li> 
                    
                    <li><a href="#" className="footer-link">Application Status</a></li>
                   
                    <li><a href="#" className="footer-link">Lifestyle Advice</a></li>
                    
                </ul>
            </div>
            <div className="footer-column">
                <h3>For Doctors</h3>
                <ul className="footer-links">
                    <li><a href="#" className="footer-link">Post an Article</a></li>
                    <li><a href="#" className="footer-link">Employer Resources</a></li>
                    <li><a href="#" className="footer-link">Success Stories</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Connect With Us</h3>
                <ul className="footer-links">
                    <li><a href="https://www.facebook.com/suvidhamahilamandal/" className="footer-link"> Facebook</a></li>
                    <li><a href="https://x.com/i/flow/login?redirect_after_login=%2Fsuvidhafoundat1" className="footer-link"> Twitter</a></li>
                    <li><a href="https://www.linkedin.com/company/suvidha-foundation/posts/?feedView=all" className="footer-link"> LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/suvidha_mahila_mandal/" className="footer-link"> Instagram</a></li>
                </ul>
            </div>
        </div>
            <div className="footer-bottom">
            <p>&copy; 2025 ReCure . All rights reserved.</p>
            </div>
        </footer>
        </>
    );
}
export default Footer