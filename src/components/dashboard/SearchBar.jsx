
// src/components/Dashboard/SearchBar.jsx
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm flex items-center">
      <Search size={18} className="text-gray-500 mr-3" />
      <input
        type="text"
        placeholder="Search your course here..."
        className="flex-1 text-gray-700 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar