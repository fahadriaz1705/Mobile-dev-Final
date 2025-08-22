import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

export const LoginScreen: React.FC = () => {
  const { t } = useTranslation(['auth', 'common']);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('auth:login.title')}</Text>
      <Text style={styles.subtitle}>{t('common:loading')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});
