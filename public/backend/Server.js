const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookingRoutes = require('./routes/booking');
const summercampRoutes = require('./routes/summercamp');
const contactRoutes = require('./routes/contact');
const adminRoutes = require('./routes/Admin');

const app = express();
const PORT = 5000; // Port directly defined

// MongoDB Connection Details
const MONGODB_URI = 'mongodb+srv://azifazeez6:asif666@cluster0.i5ia1d7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Middleware
app.use(cors());
app.use(express.json());

// Enhanced MongoDB Connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Timeout after 5s
  socketTimeoutMS: 45000 // Close sockets after 45s of inactivity
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch(err => {
  console.error('❌ MongoDB connection error:', err.message);
  process.exit(1); // Exit process with failure
});

// Route Handlers
app.use('/api/bookings', bookingRoutes);
app.use('/api/summercamp', summercampRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin', adminRoutes);

// Health Check Endpoint
app.get('/health', (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.status(200).json({ 
    status: 'OK', 
    dbState: dbStatus,
    routes: ['/api', '/api/summercamp', '/api/contact', '/api/admin']
  });
});

// Basic Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start Server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Available routes:
  - /api
  - /api/summercamp
  - /api/contact
  - /api/admin
  - /health`);
});

// Handle server close events
process.on('SIGINT', () => {
  console.log('\nServer shutting down...');
  server.close(() => {
    mongoose.connection.close(false, () => {
      console.log('MongoDB connection closed');
      process.exit(0);
    });
  });
});