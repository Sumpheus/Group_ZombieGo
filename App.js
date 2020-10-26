import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

// import MainStackNavigator from './navigation/StackNavigator.js';
import BottomTabNavigator from "./navigation/TabNavigator.js";


const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};


export default App;
