import 'react-native-gesture-handler';
import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../components/Home.js';
import Element from '../components/Element.js';
import Arcade from '../components/Arcade.js';
import Inventory from '../components/Inventory.js';
import Credits from '../components/Credits.js';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#850606",
    borderBottomColor: "black",
    borderStyle:'solid',
    borderBottomWidth: 2,
  },
  headerTintColor: "white",
  headerLeftTitle: "Back", // Ne semble pas fonctionner
  headerTitleStyle:{
    fontWeight: 'bold',
  },
  headerTitleAlign:'center',
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown:false,
        }}
      />

      <Stack.Screen
        name="Element"
        component={Element}
        options={{
          title:"Select the type of object :",
          headerTransparent:false,
        }}
      />

      <Stack.Screen
        name="Arcade"
        component={Arcade}
        options={{
          title:"Your mission :",
          headerTransparent:false,
        }}
      />

    </Stack.Navigator>
  );
};

const InventoryStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} >
      <Stack.Screen
        name="Inventory"
        component={Inventory}
        options={{
          title:"Your backpack",
          headerTransparent:false,
        }}
      />
    </Stack.Navigator>
  );
};

const CreditsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} >
      <Stack.Screen
        name="Credits"
        component={Credits}
        options={{
          title:"Who are we ?",
          headerTransparent:false,
        }}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, InventoryStackNavigator, CreditsStackNavigator };
