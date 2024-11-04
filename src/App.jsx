import Sidebar from '@/components/layout/Sidebar';
import MobileMenu from '@/components/layout/MobileMenu';
import ProfileSection from '@/components/layout/ProfileSection';
import MentorTable from '@/components/dashboard/MentorTable';
import Banner from '@/components/dashboard/Banner';
import CourseGrid from '@/components/dashboard/CourseGrid';
import ProgressSection from '@/components/dashboard/ProgressSection';
import SearchBar from '@/components/dashboard/SearchBar';

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 ml-60 p-8 bg-gray-50">
        <SearchBar />
        <Banner />
        <ProgressSection />
        <h2 className="text-xl font-medium mb-4">Continue Watching</h2>
        <CourseGrid />
        <h2 className="text-xl font-medium mb-4">Your Mentor</h2>
        <MentorTable />
      </main>
      <ProfileSection />
      <MobileMenu />
    </div>
  );
};

export default App;


