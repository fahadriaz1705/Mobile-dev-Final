import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: ThemeMode;
  darkMode: boolean;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const systemColorScheme = useColorScheme();
  const [theme, setThemeState] = useState<ThemeMode>('system');

  const darkMode =
    theme === 'system' ? systemColorScheme === 'dark' : theme === 'dark';

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    // TODO: Persist theme preference
  };

  useEffect(() => {
    // TODO: Load persisted theme preference
  }, []);

  const value = {
    theme,
    darkMode,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
