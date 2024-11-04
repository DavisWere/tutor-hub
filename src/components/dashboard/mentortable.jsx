// src/components/Dashboard/MentorTable.jsx
import { mentorClasses } from '../../data/MockData';
import { MoreVertical } from 'lucide-react';

const MentorTable = () => {
  return (
    <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
      <thead>
        <tr>
          <th className="px-4 py-3 text-left">Instructor Name & Date</th>
          <th className="px-4 py-3 text-left">Course Type</th>
          <th className="px-4 py-3 text-left">Course Title</th>
          <th className="px-4 py-3 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {mentorClasses.map((mentorClass) => (
          <tr key={mentorClass.id}>
            <td className="px-4 py-3">
              <div className="flex items-center gap-3">
                <img
                  src="/api/placeholder/32/32"
                  alt="Instructor"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div>{mentorClass.instructor}</div>
                  <div className="text-xs text-gray-600">{mentorClass.date}</div>
                </div>
              </div>
            </td>
            <td className="px-4 py-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-600">
                {mentorClass.type}
              </span>
            </td>
            <td className="px-4 py-3">{mentorClass.title}</td>
            <td className="px-4 py-3">
              <MoreVertical size={18} className="text-gray-500" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MentorTable


