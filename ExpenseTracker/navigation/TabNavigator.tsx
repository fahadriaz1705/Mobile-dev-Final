import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { WalletStack, SettingsStack, UserStack } from './index';

const Tab = createBottomTabNavigator();

export const TabNavigator: React.FC = () => {
  const { t } = useTranslation('navigation');

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Wallet"
        component={WalletStack}
        options={{ title: t('tabs.wallet') }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{ title: t('tabs.settings') }}
      />
      <Tab.Screen
        name="Account"
        component={UserStack}
        options={{ title: t('tabs.account') }}
      />
    </Tab.Navigator>
  );
};
