import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

// import StackNavigator from './navigation/StackNavigator.js';
import BottomTabNavigator from "./navigation/TabNavigator";


export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
