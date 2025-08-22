import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  TransactionsListScreen,
  AddTransactionScreen,
  EditTransactionScreen,
} from '../screens/wallet';

const Stack = createNativeStackNavigator();

export const WalletStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TransactionsList"
        component={TransactionsListScreen}
      />
      <Stack.Screen name="AddTransaction" component={AddTransactionScreen} />
      <Stack.Screen name="EditTransaction" component={EditTransactionScreen} />
    </Stack.Navigator>
  );
};
