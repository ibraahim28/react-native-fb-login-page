import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './nativeStack';

export default function NavContainer() {
  return (
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
  );
}