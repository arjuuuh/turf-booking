const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  sportType: String,
  date: String,       // Format: YYYY-MM-DD
  timeSlot: String    // Format: HH:mm-HH:mm
});

module.exports = mongoose.model('Booking', bookingSchema);