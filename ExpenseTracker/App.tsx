import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider, ThemeProvider } from './contexts';
import { Loading } from './components';

export default function App() {
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
