// src/components/Dashboard/CourseGrid.jsx
import { courses } from '@/data/MockData';
import CourseCard from '@/components/shared/CourseCard';

const CourseGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};
export default CourseGrid