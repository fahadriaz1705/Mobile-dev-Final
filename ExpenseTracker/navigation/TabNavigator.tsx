import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WalletStack, SettingsStack, UserStack } from './index';

const Tab = createBottomTabNavigator();

export const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Wallet" component={WalletStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
      <Tab.Screen name="Account" component={UserStack} />
    </Tab.Navigator>
  );
};
