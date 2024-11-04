// src/components/Dashboard/ProgressSection.jsx
import { courses } from '../../data/MockData';
import ProgressCard from '../shared/progresscard';
import { Code, Box, Briefcase } from 'lucide-react'; // Import specific icons

const ProgressSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {[
        { icon: <Code />, title: 'Front-end', progress: '8/15' },
        { icon: <Code />, title: 'Back-end', progress: '3/14' },
        { icon: <Box />, title: 'Product Design', progress: '2/6' },
        { icon: <Briefcase />, title: 'Project Manager', progress: '9/10' }
      ].map((item, i) => (
        <ProgressCard key={i} icon={item.icon} title={item.title} progress={item.progress} />
      ))}
    </div>
  );
};

export default ProgressSection;
