// src/components/shared/ProgressCard.jsx
const ProgressCard = ({ icon, title, progress }) => {
  return (
    <div className="bg-white p-4 rounded-xl flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{progress}</p>
      </div>
    </div>
  );
};

export default ProgressCard