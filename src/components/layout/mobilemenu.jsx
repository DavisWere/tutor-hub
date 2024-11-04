// src/components/Layout/MobileMenu.jsx
import React from 'react';
import { Home, Book, BarChart2, User } from 'lucide-react'; // Import specific icons

const MobileMenu = () => {
  // Map icon names to components
  const iconMap = {
    Home,
    Book,
    BarChart2,
    User,
  };

  const menuItems = [
    { icon: 'Home', label: 'Home' },
    { icon: 'Book', label: 'Courses' },
    { icon: 'BarChart2', label: 'Progress' },
    { icon: 'User', label: 'Profile' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden">
      <div className="flex justify-around p-4">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex flex-col items-center gap-1 text-gray-600"
          >
            {/* Use iconMap to render the correct icon component */}
            {iconMap[item.icon] && React.createElement(iconMap[item.icon], { size: 20 })}
            <span className="text-xs">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default MobileMenu;
