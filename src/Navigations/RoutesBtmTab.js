import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigationStrings from './NavigationStrings';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  ChatScreen,
  CameraScreen,
  StoriesScreen,
  MapScreen
} from '../Screeens'
import Colors from '../Constants/Colors';


const Tab = createBottomTabNavigator();

export default function RouteBtmTab() {
  return (

    <Tab.Navigator
      initialRouteName={NavigationStrings.CHAT_SCREEN}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.Black_Color,
          borderTopColor: Colors.Black_Color
        },

      }}

    >
      <Tab.Screen name='Chat' component={ChatScreen} options={{
        tabBarIcon: ({ focused }) => {
          return <Ionicons name='chatbubbles-outline' size={30} color={focused ? Colors.Green_COLOR : Colors.White_Color} />
        }
      }} />
      <Tab.Screen name='Camera' component={CameraScreen} options={{
        tabBarIcon: ({ focused }) => {
          return <Ionicons name="camera-outline" size={30} color={focused ? Colors.Green_COLOR : Colors.White_Color} />
        }
      }} />
      <Tab.Screen name='Stories' component={StoriesScreen} options={{
        tabBarIcon: ({ focused }) => {
          return <Ionicons name="heart-circle-outline" size={30} color={focused ? Colors.Green_COLOR : Colors.White_Color} />
        }
      }} />
      <Tab.Screen name="Map" component={MapScreen} options={{
        tabBarIcon: ({ focused }) => {
          return <Ionicons name="map-outline" size={30} color={focused ? Colors.Green_COLOR : Colors.White_Color} />
        }
      }} />
    </Tab.Navigator>

  );
}
