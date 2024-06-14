import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { useSelector } from 'react-redux';
const Stack = createNativeStackNavigator();

function Routes() {
  const isLogin = useSelector((state) => state.auth.isLogin)

  return (
    <NavigationContainer >

      {isLogin ? MainStack() : AuthStack()}

    </NavigationContainer>
  );
}

export default Routes;