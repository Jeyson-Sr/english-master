interface LessonCardProps {
  title: string;
  description: string;
  index: number;
}

const LessonCard = ({ title, description, index }: LessonCardProps) => (
  <div 
    className="verb-card p-4 rounded-lg flex items-center opacity-0 animate-fadeIn"
    style={{
      animation: `fadeIn 0.5s ease-in-out forwards ${index * 0.1}s`,
    }}
  >
    <div className="progress-circle bg-indigo-100 text-indigo-600 mr-4 transition-all duration-300 hover:bg-indigo-200">
      {index + 1}
    </div>
    <div className="flex-grow transition-all duration-300">
      <h3 className="font-medium">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
    <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 hover:shadow-lg">
      Empezar
    </button>
  </div>
);

export default LessonCard;
