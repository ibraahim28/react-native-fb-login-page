// AuthInput.js
import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const AuthInput = ({ label, value, onChangeText, placeholder, secureTextEntry = false }) => (
  <View style={styles.inputGroup}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#999"
      secureTextEntry={secureTextEntry}
    />
  </View>
);

const styles = StyleSheet.create({
  inputGroup: { marginBottom: 20 },
  label: { fontSize: 14, color: '#333', marginBottom: 5, fontWeight: '500' },
  input: { borderBottomWidth: 1, borderColor: '#ccc', paddingVertical: 10, fontSize: 16, color: '#000' },
});

export default AuthInput;