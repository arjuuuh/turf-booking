import React from "react";
import "./About.css"; // Link to external CSS
import parkingImage from "../assets/park.jpg"; // Example image for parking
import refreshmentsImage from "../assets/refresh.jpg"; // Example image for refreshments
import bathroomImage from "../assets/bath.jpg"; // Example image for bathroom
import tournamentImage from "../assets/tourney.jpg"; // Example image for tournaments

const About = () => {
  return (
    <div className="about-page">
    <div className="about-container">
      <h1 className="about-heading">About Our Turf</h1>

      <div className="about-content">
        <p>
          Welcome to <span className="highlight">TURF CAMP NOU</span> – your go-to destination for top-quality turf experiences.
        </p>
        <p>
          Whether you're booking a friendly 5-a-side match or organizing a tournament, our turf is designed to offer the best playing conditions, modern facilities, and a hassle-free booking system.
        </p>
        <p>
          Our mission is to provide athletes and sports lovers with a professional, accessible, and affordable space to enjoy the game they love.
        </p>
        <p>
          We believe in building a strong community through sports and are committed to delivering excellent service, maintaining our turf to the highest standards, and constantly improving your experience.
        </p>
      </div>

      <div className="facilities-section">
        <h2>Our Facilities</h2>
        <div className="facility">
          <img src={parkingImage} alt="Car Parking" className="facility-image" />
          <p><strong>Car Parking:</strong> Ample parking space for your convenience, ensuring a hassle-free experience.</p>
        </div>
        <div className="facility">
          <img src={refreshmentsImage} alt="Refreshments" className="facility-image" />
          <p><strong>Refreshments:</strong> Enjoy a variety of drinks and snacks available after an intense game.</p>
        </div>
        <div className="facility">
          <img src={bathroomImage} alt="Bathroom Facilities" className="facility-image" />
          <p><strong>Toilet and Bathroom Facilities:</strong> Clean and well-maintained restrooms and shower facilities for your comfort.</p>
        </div>
        <div className="facility">
          <img src={tournamentImage} alt="Tournament Hosting" className="facility-image" />
          <p><strong>Tournament Hosting:</strong> Our turf is equipped to host tournaments with professional arrangements and support.</p>
        </div>
      </div>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Email: contact@campnouturf.com</p>
        <p>
          Phone: +91 98765 43210<br />
          Phone: +91 85904 94339
        </p>
        <p>Location: Nedumkandam, Idukki, Kerala, India</p>
      </div>
    </div>
    </div>
  );
};

export default About;