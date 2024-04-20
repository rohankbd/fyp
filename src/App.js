// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import ResetPassword from './components/ResetPassword';
import StaffDashboard from './components/StaffDashboard';
import PatientDashboard from './components/PatientDashboard';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/staff-dashboard" element={<StaffDashboard />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
