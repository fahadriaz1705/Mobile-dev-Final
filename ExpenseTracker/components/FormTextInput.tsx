import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import { useField } from 'formik';

interface FormTextInputProps extends TextInputProps {
  name: string;
}

export const FormTextInput: React.FC<FormTextInputProps> = ({
  name,
  ...props
}) => {
  const [field, _meta, helpers] = useField(name);

  return (
    <TextInput
      value={field.value}
      onChangeText={helpers.setValue}
      onBlur={() => helpers.setTouched(true)}
      style={styles.input}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
  },
});
