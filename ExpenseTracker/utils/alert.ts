import { Alert } from 'react-native';

export const showAlert = (title: string, message: string) => {
  Alert.alert(title, message);
};

export const showConfirm = (
  title: string,
  message: string,
  onConfirm: () => void,
  onCancel?: () => void
) => {
  Alert.alert(title, message, [
    { text: 'Cancel', onPress: onCancel, style: 'cancel' },
    { text: 'OK', onPress: onConfirm },
  ]);
};
