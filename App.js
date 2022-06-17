import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import HealthyFoodScreen from "./screens/HealthyFood";
import JunkFoodScreen from "./screens/JunkFood";

const stack=createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <stack.Navigator initialRouteName="Home" screenOptions={{headerShown: true}}>
    <stack.Screen name="Home" component={HomeScreen}/>
    <stack.Screen name="HealthyFood" component={HealthyFoodScreen}/>
    <stack.Screen name="JunkFood" component={JunkFoodScreen}/>

    </stack.Navigator>
    </NavigationContainer>
  );
}

