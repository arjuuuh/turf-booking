import React, { useState, useEffect } from 'react';
import '../components/Home.css'; // Importing the CSS
import cric from '../assets/cricket.jpg'; // Example image import
import dotball from '../assets/dotball.jpg'; // Example image import
import foot from '../assets/football.jpeg'; // Example image import

const images = [dotball, foot, cric];

const Home = () => {
    const [current, setCurrent] = useState(0);
    const length = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % length);
        }, 5000);
        return () => clearInterval(interval);
    }, [length]);

    return (
        <div className="banner">
            <div className="banner-text">
                <h1>Winning isn’t everything, but wanting to win is.</h1>
            </div>
            <div className="banner-slider">
                {images.map((img, index) => (
                    <div
                        className={`slide ${index === current ? 'active' : ''}`}
                        key={index}
                    >
                        {index === current && <img src={img} alt={`Slide ${index + 1}`} />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;