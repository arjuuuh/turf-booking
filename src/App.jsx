import React from 'react';
import './App.css';
import Menubar from './components/Menubar';
import Home from './components/Home';
import RulesPage from './components/RulesPage';
import Booking from './components/Booking';
import {   Routes, Route, Router } from 'react-router-dom';
import Contact from './components/Contact';
import SummerCamp from './components/SummerCamp';
import About from './components/About';
import SummerCampRegistration from './components/SummerCampRegistration';
import Offers from './components/Offers';
import AdminLogin from './admin/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
function App() {
  return (
    
      <div>
        <Menubar />
        <Routes>
          {/* Route to show Home and RulesPage together */}
          <Route path="/" element={
            <>
              <Home />
              <RulesPage />
            </>
          } />
          {/* Route for Booking */}
          <Route path="/offers" element={<Offers />} />

          <Route path="/booknow" element={<Booking />} />
          {/* Route for contact us */}
          <Route path="/contactus" element={<Contact />} />
          {/* Route for offers */}
          <Route path="/summercamp" element={<SummerCamp />} />
          <Route path="/summercamp/register" element={<SummerCampRegistration />} />
          {/* Route for Summer camp */}
          <Route path="/aboutus" element={<About />} />
          {/* Route for Summer camp */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    
  );
}

export default App;