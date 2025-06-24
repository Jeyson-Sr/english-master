import React from 'react';

interface VocabularyItem {
  word: string;
  meaning: string;
}

interface SavedVocabularyCardProps {
  savedVocabulary: VocabularyItem[];
}

const SavedVocabularyCard: React.FC<SavedVocabularyCardProps> = ({ savedVocabulary }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-lg font-bold mb-4">Vocabulario guardado</h3>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-3">
          <p className="text-gray-600">{savedVocabulary.length} palabras guardadas</p>
          <div className="flex space-x-2">
            <button className="text-xs bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">Todas</button>
            <button className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Recientes</button>
            <button className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Por tema</button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {savedVocabulary.map((item, index) => (
            <div key={index} className="border rounded-lg p-3">
              <p className="font-medium">{item.word}</p>
              <p className="text-sm text-gray-600">{item.meaning}</p>
            </div>
          ))}
        </div>
        
        <button className="w-full mt-2 border border-indigo-600 text-indigo-600 rounded-lg py-2 hover:bg-indigo-50 transition">
          Ver todas las palabras
        </button>
      </div>
    </div>
  );
};

export default SavedVocabularyCard;
