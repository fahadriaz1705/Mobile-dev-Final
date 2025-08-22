import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import {
  LoginScreen,
  SignupScreen,
  ResetPasswordScreen,
} from '../screens/auth';

const Stack = createNativeStackNavigator();

export const AuthNavigator: React.FC = () => {
  const { t } = useTranslation('navigation');

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: t('auth.login') }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ title: t('auth.signup') }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{ title: t('auth.resetPassword') }}
      />
    </Stack.Navigator>
  );
};
