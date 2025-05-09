const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

router.post('/', async (req, res) => {
  try {
    const { email, date, timeSlot, sportType } = req.body;
    
    // Check for existing booking for same date AND time slot AND sport
    const existingBooking = await Booking.findOne({ 
      date,
      timeSlot,
      sportType,
      $or: [{ email }, { phone: req.body.phone }]
    });

    if (existingBooking) {
      return res.status(400).json({
        message: existingBooking.email === email
          ? 'You already have a booking for this time slot'
          : 'This time slot is already booked'
      });
    }

    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// GET all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new booking (manual add)
router.post('/', async (req, res) => {
  try {
    const booking = new Booking({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      sportType: req.body.sportType,
      date: req.body.date,
      timeSlot: req.body.timeSlot
    });

    const newBooking = await booking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    if (!deletedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.json({ message: 'Booking deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;