import React from 'react';
import '../components/RulesPage.css'; // Importing the CSS
import footballShot from '../assets/footballshot.png'; // Import the image
import { Link } from 'react-router-dom';

const RulesPage = () => {
    return (
        <div className="rules-page">
            {/* Left Section with Image */}
            <div className="rules-image">
                <img
                    src={footballShot} // Use the imported image
                    alt="Player"
                />
            </div>

            {/* Right Section with Rules */}
            <div className="rules-content">
                <h2>RULES</h2>
                <p>A few rules you must follow while entering the turf:</p>
                <ul>
                    <li>ONLY Sportswear should be worn while playing on the turf.</li>
                    <li>ONLY Football or Sports shoes should be worn while playing on the turf.</li>
                    <li>NO FOOD & DRINKS are allowed inside the turf.</li>
                    <li>Do not damage property.</li>
                    <li>SPORTSMAN SPIRIT to be maintained during games.</li>
                    <li>NO FIGHTS will be allowed within the premises.</li>
                    <li>NO SMOKING inside the turf.</li>
                    <li>DO NOT LITTER anywhere inside the premises.</li>
                </ul>
                <div className="rules-buttons">
                    <Link to="/booknow">
                    <button className="book-button">BOOK MY TURF</button>
                    </Link>
                    <Link to="/contactus">
                    <button className="call-button">CONTACT US</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RulesPage;