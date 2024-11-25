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
  return (
    <div className="flex">
      {/* Sidebar should be consistent across all dashboard pages */}
      <Sidebar />
      <main className="flex-1 ml-60 p-8 bg-gray-50">
        <SearchBar />
        <Banner />
        <ProgressSection />
        <h2 className="text-xl font-medium mb-4">Continue Watching</h2>
        <CourseGrid />
        <h2 className="text-xl font-medium mb-4">     </h2>
        <MentorTable />
      <ProfileSection />

      </main>

      {/* Profile Section and Mobile Menu will be shown on the dashboard */}
      <MobileMenu />
    </div>
  );
};

export default App;
