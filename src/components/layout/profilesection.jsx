import { useEffect, useState } from 'react';
import { mentors } from '../../data/MockData';
import MentorItem from '@/components/shared/MentorItem';
import { Bell, Edit } from 'lucide-react'; // Import specific icons
import axios from 'axios';

const ProfileSection = () => {
  const iconMap = {
    Bell,
    Edit,
  };

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Initial dummy user data
  const dummyUser = {
    user: {
      name: 'User',
      profilePic: '/api/placeholder/80/80',
      bio: 'Tusome',
    },
  };

  const [user, setUser] = useState(dummyUser);
  const [profile, setProfile] = useState('');

  const getProfile = async () => {
    const storedUser = JSON.parse(localStorage.getItem('authData'));
    console.log(storedUser?.access);

    try {
      const response = await axios.get(`${API_BASE_URL}/api/users/${user?.id}`, {
        headers: {
          Authorization: `Bearer ${storedUser?.access}`,
        },
      });

      setProfile(response.data); // Set profile to response data
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  useEffect(() => {
    // Check if user data exists in localStorage and set user state accordingly
    const storedUser = localStorage.getItem('authData');

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        console.log(parsedUser?.user);

        setUser(parsedUser?.user); // Set the user from localStorage data
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    }
  }, []);

  return (
    <aside className="w-72 fixed right-0 top-0 h-screen bg-white border-l border-gray-200 p-8 overflow-y-auto hidden xl:block">
      <div className="flex justify-center gap-4 mb-8">
        {['Bell', 'Edit'].map((icon) => {
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
      {/* wertyu */}

      {/* Display User Info Section */}
      <div className="flex items-center mb-8">
        <img
          src={user?.profile_picture ? `${API_BASE_URL}${user?.profile_picture}` : '/api/placeholder/80/80'}
          alt="Profile Picture"
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-lg font-medium capitalize">Hello, {user?.username || 'User'}</h2>
          <p className="text-sm text-gray-500">{user?.bio || 'No bio available'}</p>
        </div>
      </div>

      {/* Expanded Profile Info */}
      <div className="mb-4">
        <button onClick={getProfile} className="px-4 py-2 bg-blue-400 rounded text-white">
          Expand Profile
        </button>
        {profile && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Profile Details</h3>
            <p className="text-sm text-gray-600">Name: {profile.first_name || 'N/A'}</p>
            <p className="text-sm text-gray-600">Name: {profile.last_name || 'N/A'}</p>
            <p className="text-sm text-gray-600">Email: {profile.email || 'N/A'}</p>
            <p className="text-sm text-gray-600">Bio: {profile.bio || 'N/A'}</p>
            {/* Add additional fields as needed */}
          </div>
        )}
      </div>

      {/* Progress Section */}
      <div className="h-fit">
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
    </aside>
  );
};

export default ProfileSection;
