import React from 'react';
import './SummerCamp.css'; // Importing the CSS
import cricketImage from '../assets/cricchild.jpg'; // Example image import
import footballImage from '../assets/footchild.jpg'; // Example image import
import { Link } from 'react-router-dom'; // Import Link for navigation

const SummerCamp = () => {
    return (
        <div className="summer-camp-page">
            <h1 className="camp-heading">SUMMER CAMP 2025</h1>
            <p className="camp-description">
                Join our exciting summer camp for cricket and football coaching! Tailored programs for kids aged 5-16, led by expert coaches. Learn skills, play games, and have fun!
            </p>

            <div className="camp-details">
                <div className="camp-section">
                    <img src={cricketImage} alt="Cricket Coaching" className="camp-image" />
                    <h2>Cricket Coaching</h2>
                    <p>
                        Learn batting, bowling, and fielding techniques from certified coaches. Participate in fun matches and improve your skills!
                    </p>
                </div>
                <div className="camp-section">
                    <img src={footballImage} alt="Football Coaching" className="camp-image" />
                    <h2>Football Coaching</h2>
                    <p>
                        Master dribbling, passing, and shooting with our expert trainers. Enjoy penalty shootouts and friendly matches!
                    </p>
                </div>
            </div>

            <div className="camp-highlights">
                <h2>Why Join Our Summer Camp?</h2>
                <ul>
                    <li>Age Groups: 5-7, 8-12, 13-16</li>
                    <li>Flexible schedules: Half-day, full-day, or multi-week options</li>
                    <li>Expert coaching staff with certified trainers</li>
                    <li>Fun activities like penalty shootouts and cricket matches</li>
                    <li>Safe environment with proper supervision</li>
                </ul>
            </div>

            <div className="camp-buttons">
                <Link to="/summercamp/register">
                    <button className="register-button">REGISTER NOW</button>
                </Link>
                <button className="contact-button">CONTACT US</button>
            </div>
        </div>
    );
};

export default SummerCamp;