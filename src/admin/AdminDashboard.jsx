import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  // Bookings state
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newBooking, setNewBooking] = useState({
    name: '',
    email: '',
    phone: '',
    sportType: 'football',
    date: '',
    timeSlot: ''
  });

  // Contacts state
  const [contacts, setContacts] = useState([]);
  const [activeTab, setActiveTab] = useState('bookings');

  // Fetch data based on active tab
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (activeTab === 'bookings') {
          const response = await axios.get('http://localhost:5000/api/bookings');
          setBookings(response.data);
        } else {
          const response = await axios.get('http://localhost:5000/api/contact/');
          setContacts(response.data);
        }
      } catch (err) {
        setError(`Failed to load ${activeTab}`);
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [activeTab]);

  // Handle manual booking addition
  const handleAddBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/bookings', newBooking);
      setBookings([response.data, ...bookings]);
      setNewBooking({
        name: '',
        email: '',
        phone: '',
        sportType: 'football',
        date: '',
        timeSlot: ''
      });
      setShowAddForm(false);
    } catch (err) {
      setError('Failed to add booking');
      console.error('Error:', err);
    }
  };

  // Handle booking deletion
  const handleDeleteBooking = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/bookings/${id}`);
      setBookings(bookings.filter(booking => booking._id !== id));
    } catch (err) {
      setError('Failed to delete booking');
      console.error('Error:', err);
    }
  };

  // Handle contact deletion
  const handleDeleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);
      setContacts(contacts.filter(contact => contact._id !== id));
    } catch (err) {
      setError('Failed to delete contact');
      console.error('Error:', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBooking(prev => ({ ...prev, [name]: value }));
  };

  if (loading) return <div className="loading">Loading {activeTab}...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      
      <div className="admin-tabs">
        <button
          className={activeTab === 'bookings' ? 'active' : ''}
          onClick={() => setActiveTab('bookings')}
        >
          Bookings
        </button>
        <button
          className={activeTab === 'contacts' ? 'active' : ''}
          onClick={() => setActiveTab('contacts')}
        >
          Contact Forms
        </button>
      </div>

      {activeTab === 'bookings' ? (
        <>
          <button onClick={() => setShowAddForm(!showAddForm)} className="add-btn">
            {showAddForm ? 'Cancel' : 'Add New Booking'}
          </button>

          {showAddForm && (
            <div className="add-booking-form">
              <h2>Add Manual Booking</h2>
              <form onSubmit={handleAddBooking}>
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={newBooking.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={newBooking.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={newBooking.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Sport Type:</label>
                  <select
                    name="sportType"
                    value={newBooking.sportType}
                    onChange={handleInputChange}
                  >
                    <option value="football">Football</option>
                    <option value="cricket">Cricket</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Date:</label>
                  <input
                    type="date"
                    name="date"
                    value={newBooking.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Time Slot:</label>
                  <input
                    type="text"
                    name="timeSlot"
                    value={newBooking.timeSlot}
                    onChange={handleInputChange}
                    placeholder="e.g., 10:00-12:00"
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">
                  Add Booking
                </button>
              </form>
            </div>
          )}

          <div className="bookings-list">
            <h2>All Bookings</h2>
            {bookings.length === 0 ? (
              <p>No bookings found</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Sport</th>
                    <th>Date</th>
                    <th>Time Slot</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map(booking => (
                    <tr key={booking._id}>
                      <td>{booking.name}</td>
                      <td>{booking.email}</td>
                      <td>{booking.phone}</td>
                      <td>{booking.sportType}</td>
                      <td>{new Date(booking.date).toLocaleDateString()}</td>
                      <td>{booking.timeSlot}</td>
                      <td>
                        <button 
                          onClick={() => handleDeleteBooking(booking._id)} 
                          className="delete-btn"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      ) : (
        <div className="contacts-list">
          <h2>Contact Forms</h2>
          {contacts.length === 0 ? (
            <p>No contact forms found</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map(contact => (
                  <tr key={contact._id}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td className="message-cell">{contact.message}</td>
                    <td>{new Date(contact.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button 
                        onClick={() => handleDeleteContact(contact._id)} 
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;