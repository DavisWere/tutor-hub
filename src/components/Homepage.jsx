// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from './layout/TheDashboardView';

const HomePage = () => {
  return (
    <div>
      <Dashboard>
        <h1>Welcome to the Home Page</h1>
        <Link to="/login">Go to Login Page</Link>
      </Dashboard>
    </div>
  );
};

export default HomePage;
