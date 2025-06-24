import { FaBook, FaBookOpen, FaCheckCircle, FaLock } from 'react-icons/fa';

interface UnlockedLessons {
  verbs: {
    completed: string[];
    locked: string[];
  };
  reading: {
    completed: string[];
    locked: string[];
  };
}

interface UnlockedLessonsCardProps {
  unlockedLessons: UnlockedLessons;
}

const UnlockedLessonsCard: React.FC<UnlockedLessonsCardProps> = ({ unlockedLessons }) => {
  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <h3 className="text-lg font-bold mb-4">Lecciones desbloqueadas</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Verbs Section */}
          <div className="border border-indigo-100 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                <FaBook className="text-indigo-600" />
              </div>
              <h4 className="font-medium text-indigo-600">Verbos</h4>
            </div>
            
            <ul className="space-y-2 text-sm">
              {unlockedLessons.verbs.completed.map((lesson, index) => (
                <li key={`completed-verb-${index}`} className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  {lesson}
                </li>
              ))}
              {unlockedLessons.verbs.locked.map((lesson, index) => (
                <li key={`locked-verb-${index}`} className="flex items-center">
                  <FaLock className="text-gray-400 mr-2" />
                  {lesson}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Reading Section */}
          <div className="border border-green-100 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <FaBookOpen className="text-green-600" />
              </div>
              <h4 className="font-medium text-green-600">Lectura</h4>
            </div>
            
            <ul className="space-y-2 text-sm">
              {unlockedLessons.reading.completed.map((lesson, index) => (
                <li key={`completed-reading-${index}`} className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  {lesson}
                </li>
              ))}
              {unlockedLessons.reading.locked.map((lesson, index) => (
                <li key={`locked-reading-${index}`} className="flex items-center">
                  <FaLock className="text-gray-400 mr-2" />
                  {lesson}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnlockedLessonsCard;
