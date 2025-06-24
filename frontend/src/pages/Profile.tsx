import UserInfoCard from "../components/profile/UserInfoCard";
// import UserSettingsCard from "../components/profile/UserSettingsCard";
import UnlockedLessonsCard from "../components/profile/UnlockedLessonsCard";
import SavedVocabularyCard from "../components/profile/SavedVocabularyCard";
import { userData } from "../data/Profile";
import { MdChevronRight } from "react-icons/md";

const ProfilePage = () => {
  return (

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm mb-6">
          <a href="/" className="text-gray-500 hover:text-indigo-600">Inicio</a>
          <MdChevronRight className="mx-2 text-gray-400 text-xl" />
          <span className="text-indigo-600 font-medium">Perfil</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column */}
          <div className="md:w-1/3 space-y-6">
          <UserInfoCard
            username={userData.username}
            level={userData.level}
            progress={userData.progress}
            consecutiveDays={userData.consecutiveDays}
            settings={userData.settings}
          />
          </div>

          {/* Right Column */}
          <div className="md:w-2/3 space-y-6">
            <UnlockedLessonsCard unlockedLessons={userData.unlockedLessons} />
            <SavedVocabularyCard savedVocabulary={userData.savedVocabulary} />
          </div>
        </div>
      </main>
  );
};

export default ProfilePage;
