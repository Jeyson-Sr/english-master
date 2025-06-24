export const userData = {
  username: "Usuario",
  level: "Intermedio",
  progress:15, // porcentaje del progreso general
  consecutiveDays: [true, true, true, true, false, true, false], // L a J activos
  settings: {
    dailyNotifications: true,
    autoPlayAudio: true,
    darkMode: false,
    interfaceLanguage: "Español"
  },
  unlockedLessons: {
    verbs: {
      completed: ["regulares en presente", "regulares en pasado"],
      locked: ["irregulares comunes"]
    },
    reading: {
      completed: ["Textos nivel principiante", "Textos nivel intermedio"],
      locked: ["Textos nivel avanzado"]
    }
  },
  savedVocabulary: [
    { word: "unprecedented", meaning: "Never done before" },
    { word: "embedded", meaning: "Fixed into surface" },
    { word: "autonomous", meaning: "Self-governing" },
    { word: "staggering", meaning: "Astonishing" },
    { word: "innovations", meaning: "New methods" },
    { word: "implications", meaning: "Conclusions" }
  ]
};
