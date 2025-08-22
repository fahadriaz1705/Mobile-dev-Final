import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useField } from 'formik';

interface ButtonSelectOption {
  label: string;
  value: string;
}

interface ButtonSelectProps {
  name: string;
  options: ButtonSelectOption[];
}

export const ButtonSelect: React.FC<ButtonSelectProps> = ({
  name,
  options,
}) => {
  const [field, _meta, helpers] = useField(name);

  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={[
            styles.button,
            field.value === option.value && styles.selectedButton,
          ]}
          onPress={() => helpers.setValue(option.value)}
        >
          <Text
            style={[
              styles.buttonText,
              field.value === option.value && styles.selectedButtonText,
            ]}
          >
            {option.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedButton: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  buttonText: {
    color: '#333',
  },
  selectedButtonText: {
    color: '#fff',
  },
});
