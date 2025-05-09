const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Get all bookings for today
router.get('/gettodaysbookedslots', async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
    const bookings = await Booking.find({ date: today });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching bookings' });
  }
});

// Add a new booking
router.post('/addbooking', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: 'Booking added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding booking' });
  }
});

// Update an existing booking
router.put('/updatebooking/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBooking = await Booking.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedBooking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.json({ message: 'Booking updated successfully', updatedBooking });
  } catch (error) {
    res.status(500).json({ error: 'Error updating booking' });
  }
});

// Delete a booking
router.delete('/deletebooking/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBooking = await Booking.findByIdAndDelete(id);
    if (!deletedBooking) {
      return res.status(404).json({ error: 'Booking not found' });
    }
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting booking' });
  }
});

module.exports = router;