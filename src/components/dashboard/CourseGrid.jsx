// src/components/Dashboard/CourseGrid.jsx
// import { courses } from '@/data/MockData';
import CourseCard from '@/components/shared/CourseCard';
import { useEffect, useState } from 'react';


const CourseGrid = () => {

    const [profile, setProfile] = useState('');
    const [user, setUser] = useState('');
    const courses = ['co']

    useEffect(() => {
    // Check if user data exists in localStorage and set user state accordingly
    const storedUser = localStorage.getItem('authData');
    console.log(localStorage.getItem('authData'), "auth")

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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};
export default CourseGrid