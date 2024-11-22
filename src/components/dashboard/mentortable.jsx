import { useEffect, useState } from 'react';
import axios from 'axios';
import { MoreVertical } from 'lucide-react';

const MentorTable = () => {
  const [units, setUnits] = useState([]);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const fetchUnits = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem('authData'));
      const token = storedUser?.access;

      const response = await axios.get(`${API_BASE_URL}/api/units`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        },
      });

      setUnits(response.data.results); // Assuming the response is an array of units
    } catch (error) {
      console.error('Error fetching units:', error);
    }
  };

  useEffect(() => {
    fetchUnits();
  }, []);

  return (
    <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
      <thead>
        <tr>
          <th className="px-4 py-3 text-left">Instructor Name </th>
          <th className="px-4 py-3 text-left">Course</th>
          <th className="px-4 py-3 text-left">Unit Name</th>
          <th className="px-4 py-3 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {units.map((unit) => (
          <tr key={unit.id}>
            <td className="px-4 py-3">
              <div className="flex items-center gap-3">
                <img
                  src="/api/placeholder/32/32"
                  alt="Instructor"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <div>{unit.unit_name}</div>
                  <div className="text-xs text-gray-600">{unit.date}</div>
                </div>
              </div>
            </td>
            <td className="px-4 py-3">
              <span className="inline-block px-3 py-1 rounded-full text-xs bg-purple-100 text-purple-600">
                {unit.unit_name}
              </span>
            </td>
            <td className="px-4 py-3">{unit.unit_name}</td>
            <td className="px-4 py-3">
              <MoreVertical size={18} className="text-gray-500" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MentorTable;
