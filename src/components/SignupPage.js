import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function SignupPage() {

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Sign Up</Text>
            <View style={styles.formContainer}>
                <Text style={styles.label}>First Name</Text>
            <TextInput
                style={styles.input}
                placeholder="First Name"
            />
                <Text style={styles.label}>Last Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Last Name"
            />
                <Text style={styles.label}>Email or Phone number</Text>
            <TextInput
                style={styles.input}
                placeholder="Email or Phone Number"
            />
                <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Password"

            />
            <View style={styles.buttonContainer}>
                <Button color="#0165E1" style={styles.button} title="Sign Up" />
            </View></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

        width: '100%',
    },
    h1: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: '700',
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
        marginBottom: 20,
        borderBottomColor: '#0165E1', // Changes color when focused
        width: '100%',
    },
    buttonContainer: {
        marginTop: 16,
        borderRadius: 8,
        overflow: 'hidden',
        width: '100%',
        marginBottom : 20,
       },
    button: {
        textAlign: 'center',
        height: 48,
        justifyContent: 'center',
        borderRadius: 8,
        width: '100%',
    }
});

