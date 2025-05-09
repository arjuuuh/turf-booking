const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// POST route - register a participant
router.post('/register', async (req, res) => {
    try {
        const newRegistration = new Registration(req.body);
        await newRegistration.save();
        res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// GET route - fetch all registrations (optional)
router.get('/registrations', async (req, res) => {
    try {
        const registrations = await Registration.find().sort({ createdAt: -1 });
        res.status(200).json(registrations);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
