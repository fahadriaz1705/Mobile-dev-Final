import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider, ThemeProvider } from './contexts';
import { Loading } from './components';
import { initializeI18n } from './utils/i18n';

export default function App() {
  const [i18nReady, setI18nReady] = useState(false);

  useEffect(() => {
    const initApp = async () => {
      try {
        await initializeI18n();
        setI18nReady(true);
      } catch (error) {
        console.error('Failed to initialize i18n:', error);
        setI18nReady(true); // Continue anyway
      }
    };

    initApp();
  }, []);

  if (!i18nReady) {
    return <Loading />;
  }

  return (
    <ThemeProvider>
      <AuthProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Loading />
        </NavigationContainer>
      </AuthProvider>
    </ThemeProvider>
  );
}
