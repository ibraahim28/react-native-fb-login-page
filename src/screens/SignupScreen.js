import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import AuthInput from '../components/AuthInput';
import { signupUser } from '../services/authService';

function SignupScreen({ navigation }) {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Create an Account</Text>
            <View style={styles.formContainer}>
                <AuthInput label="Username" value={formData.username} onChangeText={(e) => handleInputChange('username', e)} placeholder="Enter your username" />
                <AuthInput label="Email" value={formData.email} onChangeText={(e) => handleInputChange('email', e)} placeholder="Enter your email" />
                <AuthInput label="Password" value={formData.password} onChangeText={(e) => handleInputChange('password', e)} placeholder="Enter your password" secureTextEntry />
                <TouchableOpacity style={styles.button} onPress={() => signupUser(formData.username, formData.email, formData.password)}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={styles.linkText} onPress={() => navigation.navigate('Login')}>Already have an account? Log in</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F0F2F5' },
    h1: { fontSize: 28, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 30 },
    formContainer: { width: '90%', maxWidth: 400, backgroundColor: 'white', borderRadius: 12, padding: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 6, elevation: 3 },
    button: { backgroundColor: '#1877F2', paddingVertical: 12, borderRadius: 6, alignItems: 'center', marginTop: 20 },
    buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
    linkText: { marginTop: 15, color: '#1877F2', textAlign: 'center', fontWeight: '500' },
});

export default SignupScreen;