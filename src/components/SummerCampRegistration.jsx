import React, { useState } from 'react';
import './SummerCampRegistration.css'; // Create a CSS file for styling

const SummerCampRegistration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        gender: '',
        ageCategory: '',
        timeSchedule: '',
        sport: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.gender || !formData.ageCategory || !formData.timeSchedule || !formData.sport) {
            setError('Please fill in all fields');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/summercamp/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitted(true);
                setError(null);
            } else {
                const data = await response.json();
                setError(data.message || 'Registration failed. Please try again.');
            }
        } catch (err) {
            setError('Server error. Please try again later.');
        }
    };

    if (submitted) {
        return (
            <div className="registration-success">
                <h2>Registration Successful!</h2>
                <p>Thank you for registering for the Summer Camp 2025!</p>
                <button onClick={() => window.location.reload()}>Register Another Participant</button>
            </div>
        );
    }

    return (
        <div className="registration-form-container">
        <div className="registration-form-page">
            <h1>Register for Summer Camp</h1>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Age Category</label>
                    <select name="ageCategory" value={formData.ageCategory} onChange={handleChange} required>
                        <option value="">Select Age Category</option>
                        <option value="8-10">8-10</option>
                        <option value="11-13">11-13</option>
                        <option value="14-16">14-16</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Time Schedule</label>
                    <select name="timeSchedule" value={formData.timeSchedule} onChange={handleChange} required>
                        <option value="">Select Time Schedule</option>
                        <option value="06:00-08:00">06:00-08:00</option>
                        <option value="14:00-16:00">14:00-16:00</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Sport</label>
                    <select name="sport" value={formData.sport} onChange={handleChange} required>
                        <option value="">Select Sport</option>
                        <option value="cricket">Cricket</option>
                        <option value="football">Football</option>
                    </select>
                </div>
                <button type="submit" className="submit-btn">Register</button>
            </form>
        </div>
        </div>  
    );
};

export default SummerCampRegistration;