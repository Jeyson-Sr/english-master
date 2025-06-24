import { FaUser } from 'react-icons/fa';

interface UserInfoCardProps {
  username: string;
  level: string;
  progress: number;
  consecutiveDays: boolean[];
  settings: {
    dailyNotifications: boolean;
    autoPlayAudio: boolean;
    darkMode: boolean;
    interfaceLanguage: string;
  };
}

const UserInfoCard: React.FC<UserInfoCardProps> = ({
  username = "Usuario",
  level = "Intermedio",
  progress = 35,
  consecutiveDays = [true, true, true, true, false, false, false],
  settings = {
    dailyNotifications: true,
    autoPlayAudio: true,
    darkMode: false,
    interfaceLanguage: "Español"
  }
}) => {
  const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];

  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center">
            <FaUser className="text-2xl text-indigo-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold">{username}</h2>
            <p className="text-gray-600">Nivel: {level}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <p className="font-medium mb-1">Días consecutivos</p>
            <div className="flex space-x-1">
              {days.map((day, index) => (
                <div
                  key={day}
                  className={`w-8 h-8 ${
                    consecutiveDays[index] ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500'
                  } rounded-md flex items-center justify-center`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <p className="font-medium mb-2">Progreso general</p>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-1">
              <div 
                className="bg-indigo-600 h-4 rounded-full" 
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-sm text-gray-600">{progress}% completado</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-bold mb-4">Configuración</h3>
        
        <div className="space-y-4">
          <div>
            <label className="flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="form-checkbox h-5 w-5 text-indigo-600"
                checked={settings.dailyNotifications}
              />
              <span className="ml-2 text-gray-700">Notificaciones diarias</span>
            </label>
          </div>
          
          <div>
            <label className="flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="form-checkbox h-5 w-5 text-indigo-600"
                checked={settings.autoPlayAudio}
              />
              <span className="ml-2 text-gray-700">Reproducir audio automáticamente</span>
            </label>
          </div>
          
          <div>
            <label className="flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="form-checkbox h-5 w-5 text-indigo-600"
                checked={settings.darkMode}
              />
              <span className="ml-2 text-gray-700">Modo oscuro</span>
            </label>
          </div>
          
          <div>
            <p className="font-medium mb-1">Idioma de la interfaz</p>
            <select 
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={settings.interfaceLanguage}
            >
              <option value="Español">Español</option>
              <option value="English">English</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfoCard;


