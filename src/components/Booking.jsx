import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../components/Booking.css'; // Importing the CSS

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sportType: 'football',
    date: '',
    timeSlot: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookedSlots, setBookedSlots] = useState([]);

  const sports = [
    { id: 'football', name: 'Football', icon: '⚽' },
    { id: 'cricket', name: 'Cricket', icon: '🏏' }

  ];

  const timeSlots = [
    '04:00-06:00',
    '06:00-08:00',
    '10:00-12:00',
    '12:00-14:00',
    '16:00-18:00',
    '18:00-20:00',
    '20:00-22:00',
    '22:00-00:00',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Fetch booked slots
  // useEffect(() => {
  //   const fetchBookedSlots = async () => {
  //     if (!formData.date || !formData.sportType) return;
  //     try {
  //       const res = await axios.get('http://localhost:5000/api/bookings/slots', {
  //         params: {
  //           date: formData.date,
  //           sportType: formData.sportType
  //         }
  //       });
  //       console.log('Booked slots:', res.data.bookedSlots);
  //       setBookedSlots(res.data.bookedSlots || []);
        
  //     } catch (err) {
  //       console.error('Error fetching slots:', err);
  //       setBookedSlots([]);
  //     }
  //   };
  //   fetchBookedSlots();
  // }, [formData.date, formData.sportType]);

  // Additional useEffect for fetching slots
  useEffect(() => {
    if (formData.sportType && formData.date) {
      axios
        .get(`http://localhost:5000/api/bookings/slots`, {
          params: {
            sportType: formData.sportType,
            date: formData.date
          }
        })
        .then((res) =>{
          setBookedSlots(res.data || [])})
        .catch((err) => console.error('Error fetching slots:', err));
    }
  }, [formData.sportType, formData.date]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.timeSlot) {
      setError('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      await axios.post('http://localhost:5000/api/bookings', formData);
      setSubmitted(true);
    } catch (err) {
      setError(err.response?.data?.message || 'Booking failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="booking-success">
        <div className="success-icon">✓</div>
        <h2>Booking Confirmed!</h2>
        <p>
          Your {formData.sportType} turf is reserved for {formData.date} at {formData.timeSlot}
        </p>
        <button className="submit-btn" onClick={() => window.location.reload()}>
          Make Another Booking
        </button>
      </div>
    );
  }

  return (
    <div className="booking-container">
    <div className="sporty-booking-form">
      <div className="form-header">
        <h2>Reserve Your Turf</h2>
        <p>Book your perfect playing time in just a few clicks</p>
      </div>

      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Booking Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        <div className="form-section">
          <label>Select Sport</label>
          <div className="sport-options">
            {sports.map((sport) => (
              <div
                key={sport.id}
                className={`sport-option ${formData.sportType === sport.id ? 'selected' : ''}`}
                onClick={() => setFormData({ ...formData, sportType: sport.id })}
              >
                <span className="sport-icon">{sport.icon}</span>
                <span className="sport-name">{sport.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="form-section">
          <label>Available Time Slots</label>
          <div className="time-slots-grid">
  {timeSlots
    .filter((slot) => {
      // Check if the selected date is today
      if (formData.date === new Date().toISOString().split('T')[0]) {
        const currentTime = new Date().getHours(); // Get current hour
        const slotStartHour = parseInt(slot.split(':')[0]); // Extract the start hour from the slot
        return slotStartHour > currentTime; // Only include slots greater than the current time
      }
      return true; // Include all slots for other dates
    })
    .map((slot) => {
      const isBooked = bookedSlots.includes(slot);
      return (
        <div
          key={slot}
          className={`time-slot ${formData.timeSlot === slot ? 'selected' : ''} ${isBooked ? 'booked' : ''}`}
          onClick={() => !isBooked && setFormData({ ...formData, timeSlot: slot })}
        >
          {isBooked ? 'x' : slot}
        </div>
      );
    })}
</div>
        </div>
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Processing...' : 'Confirm Booking'}
        </button>
      </form>
    </div>
    </div>
  );
};


export default Booking;