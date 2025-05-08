import React from 'react';
import './Offers.css'; // Importing the CSS for styling

const Offers = () => {
    return (
        <div className="offers-page">
            <h1 className="offers-heading">Exciting Offers Just for You!</h1>
            <p className="offers-description">
                Grab these amazing discounts and make your turf booking even more enjoyable!
            </p>

            <div className="offers-container">
                {/* Morning Schedule Offer */}
                <div className="offer-card">
                    <h2>🌅 Morning Schedules</h2>
                    <p>
                        Get <span className="highlight">10% OFF</span> on all bookings for the morning slots:
                    </p>
                    <ul>
                        <li>04:00 AM - 06:00 AM</li>
                        <li>06:00 AM - 08:00 AM</li>
                    </ul>
                    <p className="offer-note">Start your day with energy and savings!</p>
                </div>

                {/* Weekend Offer */}
                <div className="offer-card">
                    <h2>🎉 Weekend Special</h2>
                    <p>
                        Enjoy <span className="highlight">5% OFF</span> on all slots every <strong>Saturday</strong> and <strong>Sunday</strong>!
                    </p>
                    <p className="offer-note">Make your weekends more fun with friends and family!</p>
                </div>
            </div>

            <div className="offers-footer">
                <p>Don't miss out on these limited-time offers. Book your turf now and save big!</p>
                <button className="book-now-button" onClick={() => window.location.href = '/booknow'}>
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default Offers;