
// src/components/shared/CourseCard.jsx
import { useState } from 'react';

const CourseCard = ({ course }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 ${
        isHovered ? 'transform -translate-y-1 shadow-md' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <span className="inline-block px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-600 mb-2">
          {course.type}
        </span>
        <h3 className="text-lg font-medium mb-4">{course.title}</h3>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <img
                key={i}
                src="https://images.pexels.com/photos/1586072/pexels-photo-1586072.jpeg"
                alt="Student"
                className="w-6 h-6 rounded-full border-2 border-white"
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">+{course.students} students</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard

