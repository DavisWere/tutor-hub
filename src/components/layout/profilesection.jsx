// src/components/Layout/ProfileSection.jsx
import { mentors } from '../../data/MockData';
import MentorItem from '@/components/shared/MentorItem';
import { Bell, Mail, Settings } from 'lucide-react'; // Import specific icons

const ProfileSection = () => {
  const iconMap = {
    Bell,
    Mail,
    Settings,
  };

  return (
    <aside className="w-72 fixed right-0 top-0 h-screen bg-white border-l border-gray-200 p-8 overflow-y-auto hidden xl:block">
      <div className="text-center mb-8">
        <img
          src="/api/placeholder/80/80"
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-medium mb-2">Good Morning Alex</h2>
        <p className="text-gray-600 text-sm">
          Continue Your Journey And Achieve Your Target
        </p>
      </div>

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

export default ProfileSection

