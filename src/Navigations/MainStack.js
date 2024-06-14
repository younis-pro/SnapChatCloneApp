import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationStrings from './NavigationStrings';
import RouteBtmTab from './RoutesBtmTab';
const Stack = createNativeStackNavigator();

function MainStack() {
	return (

		<Stack.Navigator >
			<Stack.Screen
				name={NavigationStrings.CHAT_SCREEN}
				component={RouteBtmTab}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>

	);
}

export default MainStack;