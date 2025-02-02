import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, Button } from 'react-native';
import LoginPage from './src/components/loginPage';
import logo from './src/assets/images/fb-logo.png';
import React, { useState } from 'react';
import SignupPage from './src/components/SignupPage';

export default function App() {

  const [isLogin, setIsLogin] = useState(true);

  const toggleLoginSignup = () => {
    setIsLogin(!isLogin);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logoStyles} source={logo} />
        <Text style={styles.welcomeText}>Facebook</Text>
      </View>
      <View style={{ width: '100%' }}>
        {isLogin ? (<LoginPage />) : (<SignupPage />)}
      </View>
      <View style={{ width: '100%' }}>
        <Button style={styles.navigateBtn} onPress={toggleLoginSignup} title={isLogin ? "Create a New Account" : "Log into existing Account"} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoStyles: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#0165E1',
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  navigateBtn: {
    width: '100%',
    backgroundColor: 'red',
    color: 'white',
  }
});
