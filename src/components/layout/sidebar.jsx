// src/components/Layout/Sidebar.jsx
import { Icon } from 'lucide-react';
import { friends } from '../../data/mockData';

const Sidebar = () => {
  const navItems = [
    { icon: 'PieChart', label: 'Dashboard', active: true },
    { icon: 'Inbox', label: 'Inbox' },
    { icon: 'Book', label: 'Lesson' },
    { icon: 'CheckSquare', label: 'Task' },
    { icon: 'Users', label: 'Group' }
  ];

  return (
    <aside className="w-60 fixed h-screen bg-white border-r border-gray-200 p-8">
      <div className="flex items-center gap-2 text-xl font-bold text-purple-600 mb-8">
        <Icon name="GraduationCap" />
        Coursue
      </div>

      <nav className="mb-8">
        <div className="text-xs text-gray-600 uppercase mb-4">Overview</div>
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center gap-3 p-3 rounded-lg mb-1 ${
              item.active
                ? 'bg-purple-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Icon name={item.icon} size={20} />
            {item.label}
          </a>
        ))}
      </nav>

      <div>
        <div className="text-xs text-gray-600 uppercase mb-4">Friends</div>
        {friends.map((friend) => (
          <div key={friend.id} className="flex items-center gap-3 p-2 rounded-lg">
            <img src={friend.avatar} alt={friend.name} className="w-8 h-8 rounded-full" />
            <div>
              <div className="text-sm font-medium">{friend.name}</div>
              <div className="text-xs text-gray-600">{friend.title}</div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

