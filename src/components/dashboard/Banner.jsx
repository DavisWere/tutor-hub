// src/components/Dashboard/Banner.jsx
import { ArrowRight } from 'lucide-react'; // Import ArrowRight icon

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white mb-8">
      <h2 className="text-2xl font-medium mb-4">
        Sharpen Your Skills With Professional Online Courses
      </h2>
      <a href="#" className="inline-flex items-center gap-2 bg-black py-2 px-4 rounded-full text-sm font-medium">
        Join Now
        <ArrowRight size={16} /> {/* Use ArrowRight icon here */}
      </a>
    </div>
  );
};

export default Banner;
