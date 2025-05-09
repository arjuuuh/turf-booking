
const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    ageCategory: String,
    timeSchedule: String,
    sport: String,
}, { timestamps: true });

module.exports = mongoose.model('Registration', registrationSchema);
