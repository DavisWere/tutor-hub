import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '@/components/layout/Sidebar';
import MobileMenu from '@/components/layout/MobileMenu';
import ProfileSection from '@/components/layout/ProfileSection';
import MentorTable from '@/components/dashboard/MentorTable';
import Banner from '@/components/dashboard/Banner';
import CourseGrid from '@/components/dashboard/CourseGrid';
import ProgressSection from '@/components/dashboard/ProgressSection';
import SearchBar from '@/components/dashboard/SearchBar';
import LoginPage from '@/components/auth/LoginPage';
import CoursePage from './components/dashboard/CoursePage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Function to handle login success
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        {/* Login Page Route */}
        <Route path="/" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />

        {/* Redirect to Dashboard if user is authenticated */}
        {isAuthenticated ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/courses" element={<CoursePage />} />
            {/* Additional authenticated routes can go here */}
          </>
        ) : (
          <Route path="/dashboard" element={<Navigate to="/" />} />
        )}
      </Routes>
    </Router>
  );
};

const Dashboard = () => {

  const [showProfile, setShowProfile] = useState(true);

  const toggleProfile = () => {
    setShowProfile(prevShowProfile => !prevShowProfile);
  };


  return (
    <div className="flex">
      {/* Sidebar should be consistent across all dashboard pages */}
      <Sidebar />
      <main className="flex-1 flex flex-col gap-2 ml-60 p-8 bg-gray-50">
        <button
            onClick={toggleProfile}
            className="bg-purple-800 text-white px-4 py-2 rounded w-fit"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          </button>

        <Banner />
        <ProgressSection />
        <h2 className="text-xl font-medium mb-4">Continue Watching</h2>
        <CourseGrid />
        <h2 className="text-xl font-medium mb-4">     </h2>
        <MentorTable />
        {showProfile && <ProfileSection />}
        

      </main>

      {/* Profile Section and Mobile Menu will be shown on the dashboard */}
      <MobileMenu />
    </div>
  );
};

export default App;
