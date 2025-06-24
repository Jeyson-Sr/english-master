import { useState } from "react";
import { MdChevronRight } from "react-icons/md";
import LessonCard from "../components/lessons/LessonCard";
import {
  regularLessons,
  irregularLessons,
  tiemposLessons,
  phrasalLessons,
} from "../data/lessons";

const allLessons = {
  regulares: regularLessons,
  irregulares: irregularLessons,
  tiempos: tiemposLessons,
  phrasal: phrasalLessons,
};

const VerbosPage = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof allLessons>("regulares");

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm mb-6">
        <a href="/" className="text-gray-500 hover:text-indigo-600">
          Inicio
        </a>
        <MdChevronRight className="mx-2 text-gray-400 text-xl" />
        <span className="text-indigo-600 font-medium">Verbos</span>
      </div>

      <h1 className="text-3xl font-bold mb-8 text-indigo-600">
        Dashboard de Verbos
      </h1>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <div className="flex space-x-8">
          {Object.keys(allLessons).map((tab) => (
            <button
              key={tab}
              className={`tab-button py-2 px-1 cursor-pointer ${
                activeTab === tab ? "tab-active" : ""
              }`}
              onClick={() => setActiveTab(tab as keyof typeof allLessons)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {tab === "phrasal" && " Verbs"}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="space-y-4" key={activeTab}>
        {allLessons[activeTab].map((lesson, index) => (
          <LessonCard key={index} {...lesson} index={index} />
        ))}
      </div>
    </div>
  );
};

export default VerbosPage;
