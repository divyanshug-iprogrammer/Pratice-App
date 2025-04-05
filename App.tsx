/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect,useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Animated,View,Text,Button} from 'react-native';
import DetailsScreen from './src/Details/DetailsScreen';
import HomeScreen from './src/Home/HomeScreen';
import Marquee from './src/Details/Marquee';
import SquareToTriangle from './src/Details/SquareToTriangle';
import ReanimatedDashboard from "./src/Reanimated/ReanimatedDashboard"
import ReanimatedEasingSquares from './src/Reanimated/ReanimatedEasingSquares';


const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, []);

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Marquee" component={Marquee} />
        <Stack.Screen name="SquareToTriangle" component={SquareToTriangle} />
        <Stack.Screen name="ReanimatedDashboard" component={ReanimatedDashboard} />
        <Stack.Screen name="ReanimatedEasingSquares" component={ReanimatedEasingSquares} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
