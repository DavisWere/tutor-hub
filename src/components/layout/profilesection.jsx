import { useEffect, useState } from 'react';
import { mentors } from '../../data/MockData';
import MentorItem from '@/components/shared/MentorItem';
import { Bell, Mail, Settings } from 'lucide-react'; // Import specific icons

const ProfileSection = () => {
  const iconMap = {
    Bell,
    Mail,
    Settings,
  };

  // Dummy user data
  const dummyUser = {
    user: {
      name: 'Alex',
      profilePic: '/api/placeholder/80/80',
      bio: 'Continue Your Journey And Achieve Your Target',
    }
  };
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [user, setUser] = useState(dummyUser);

  useEffect(() => {
    // Check if user data exists in localStorage
    const storedUser = localStorage.getItem('authData');
    
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
       console.log(parsedUser?.user);
        
        // Parse the data only if it's a valid JSON string
        setUser(parsedUser?.user);
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    }
  }, []);

  return (
    <aside className="w-72 fixed right-0 top-0 h-screen bg-white border-l border-gray-200 p-8 overflow-y-auto hidden xl:block">
      <div className="flex justify-center gap-4 mb-8">
        {['Bell', 'Mail', 'Settings'].map((icon) => {
          const IconComponent = iconMap[icon];
          return (
            <button
              key={icon}
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
            >
              {IconComponent && <IconComponent size={20} />}
            </button>
          );
        })}
      </div>

      {/* Display User Info Section */}
      <div className="flex items-center mb-8">
        
        <img
          src={user?.profile_picture ? `${API_BASE_URL}${user?.profile_picture }` : '/api/placeholder/80/80'} // Use a fallback if profilePic is missing
          alt="Profile Picture"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-lg font-medium capitalize"> Hello {user?.username || 'User'}</h2>
          {/* <p className="text-sm text-gray-500">{user?.user?.bio || 'No bio available'}</p> */}
        </div>
      </div>

      {/* Progress Section */}
      <div className="h-48 mb-8">
        <div className="flex items-end h-full gap-2">
          {[60, 80, 40, 90, 70].map((height, i) => (
            <div key={i} className="flex-1 bg-gray-100 rounded-lg overflow-hidden">
              <div
                className="bg-purple-600 transition-all duration-1000"
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mentor Section */}
      <div>
        <h3 className="text-lg font-medium mb-4">Your Mentor</h3>
        <div className="space-y-4">
          {mentors.map((mentor) => (
            <MentorItem key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default ProfileSection;
