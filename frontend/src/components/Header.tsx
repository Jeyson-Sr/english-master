import type { FC } from "react";
import { FaUser } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { userData } from "../data/Profile";

interface Props {
  color?: "indigo" | "green";
}

const Header: FC<Props> = ({ color = "indigo" }) => {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-indigo-600">
          <i className="fas fa-language mr-2"></i>EnglishPro
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:block w-48 bg-gray-200 rounded-full h-3">
            <div
              className={`bg-${color}-600 h-3 rounded-full`}
              style={{ width: `${userData.progress}%` }}
            ></div>
            <p className="text-sm text-gray-600">
              {userData.progress}% completado
            </p>
          </div>
          <div
            className={`w-10 h-10 rounded-full bg-${color}-100 flex items-center justify-center cursor-pointer`}
            onClick={() => navigate("/profile")}
          >
            <FaUser className={`text-${color}-600`} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
