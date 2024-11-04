// src/components/shared/MentorItem.jsx
const MentorItem = ({ mentor }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <img src={mentor.avatar} alt={mentor.name} className="w-10 h-10 rounded-full" />
      <div className="flex-1">
        <div className="text-sm font-medium">{mentor.name}</div>
        <div className="text-sm text-gray-600">{mentor.title}</div>
      </div>
      <button
        onClick={() => setIsFollowing(!isFollowing)}
        className={`px-4 py-2 rounded-full text-sm ${
          isFollowing 
            ? 'bg-gray-600 text-white' 
            : 'bg-purple-600 text-white'
        }`}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export { CourseCard, ProgressCard, MentorItem };


