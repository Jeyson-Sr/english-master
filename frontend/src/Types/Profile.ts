export interface UserSettings {
  dailyNotifications: boolean;
  autoPlayAudio: boolean;
  darkMode: boolean;
  interfaceLanguage: string;
}

export interface UserData {
  username: string;
  level: string;
  progress: number;
  consecutiveDays: boolean[];
  settings: UserSettings;
}
