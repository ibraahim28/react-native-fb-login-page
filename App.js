import { StyleSheet, Image, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import NavContainer from './src/navigation';

export default function App() {

 

  return (
     <NavContainer />
      
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
