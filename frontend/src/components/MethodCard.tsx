import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface MethodCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
  route: string; // New prop to specify the route to navigate to
}

const MethodCard: React.FC<MethodCardProps> = ({
  icon,
  title,
  description,
  color,
  route,
}) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(route);
  };

  return (
    <div className="method-card  bg-white p-6 rounded-xl border border-gray-200 flex flex-col">
      <div className={`w-16 h-16 bg-${color}-100 rounded-full flex items-center justify-center mb-4`}>
        <div className={`w-full h-full flex items-center justify-center text-${color}-600 text-2xl`}>
          {icon}
        </div>
      </div>
      <h2 className={`text-xl font-bold text-${color}-600 mb-2`}>{title}</h2>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <button
        onClick={handleNavigation}
        className={`bg-${color}-600 text-white py-2 px-4 rounded-lg hover:bg-${color}-700 transition flex items-center justify-center cursor-pointer`}
      >
        Comenzar <FaArrowRightLong className="ml-2" />
      </button>
    </div>
  );
};

export default MethodCard;
