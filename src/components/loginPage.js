import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function LoginPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Login</Text>
            <View style={styles.formContainer}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Enter your username'
                        placeholderTextColor="#999"
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Enter your password'
                        placeholderTextColor="#999"
                        secureTextEntry
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button 
                        title='Login' 
                        color="#0165E1"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       
        width: '100%',
    },
    h1: {
        fontSize: 28,
        fontWeight: '700',
        textAlign : 'center',
        color: '#1A1A1A',
        marginBottom: 40,
        letterSpacing: 0.5
    },
    formContainer: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 24,
        marginBottom : 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3
    },
    inputGroup: {
        marginBottom: 24,
        width: '100%',
    },
    label: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
        fontWeight: '500'
    },
    input: {
        borderBottomWidth: 1.5,
        borderColor: '#E0E0E0',
        paddingVertical: 12,
        fontSize: 16,
        color: '#1A1A1A',
        borderBottomColor: '#0165E1', // Changes color when focused
        width: '100%',
    },
    buttonContainer: {
        marginTop: 16,
        borderRadius: 8,
        overflow: 'hidden',
        width: '100%',
    },
    button: {
        height: 48,
        justifyContent: 'center',
        borderRadius: 8,
        width: '100%',
    }
})