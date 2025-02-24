import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from '../bottomTabs';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import LoginScreen from '../../screens/LoginScreen';
import SignupScreen from '../../screens/SignupScreen';
import { useEffect, useState } from 'react';
import { getUser } from '../../config/async_storage';

const Stack = createNativeStackNavigator();

function MyStack() {
  const [user, setUser] = useState(null)
  useEffect(()=>{
    setUser(getUser())
  },[])
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={user ? 'Home' : 'Login'} >
      <Stack.Screen name='MyTabs' component={MyTabs} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;