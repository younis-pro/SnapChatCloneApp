import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from './NavigationStrings';
import {
	LoginScreen,
	SplashScreen,
	SignUpScreen
} from '../Screeens'
const Stack = createNativeStackNavigator();
function AuthStack() {
	return (

		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name={NavigationStrings.SPLASH_SCREEN} component={SplashScreen} />
			<Stack.Screen name={NavigationStrings.LOGIN_SCREEN} component={LoginScreen} />
			<Stack.Screen name={NavigationStrings.SIGNUP_SCREEN} component={SignUpScreen} />
		</Stack.Navigator>


	);
}

export default AuthStack;