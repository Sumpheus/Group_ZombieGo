import 'react-native-gesture-handler';
import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../components/Home.js';
import Element from '../components/Element.js';
import Arcade from '../components/Arcade.js';
import Inventory from '../components/Inventory.js';
import Credits from '../components/Credits.js';

const StackNavigator = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <StackNavigator.Navigator initialRouteName="Home">
      <StackNavigator.Screen
        name="Home"
        component={Home}
        options={{
          headerShown:false,
        }}
      />

      <StackNavigator.Screen
        name="Element"
        component={Element}
        options={{
          headerTitleAlign:'center',
          title:"What do you need ?",
          headerTransparent:true,
          headerTitleStyle:{
            fontWeight: 'bold',
          }
        }}
      />

      <StackNavigator.Screen
        name="Arcade"
        component={Arcade}
        options={{
          headerTitleAlign:'center',
          title:"Your mission :",
          headerTransparent:false,
          headerTitleStyle:{
            fontWeight: 'bold',
          }
        }}
      />

    </StackNavigator.Navigator>
  );
};

const InventoryStackNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="Inventory"
        component={Inventory}
        options={{
          headerTitleAlign:'center',
          title:"Your inventory",
          headerTransparent:false,
          headerTitleStyle:{
            fontWeight: 'bold',
          }
        }}
      />
    </StackNavigator.Navigator>
  );
};

const CreditsStackNavigator = () => {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="Credits"
        component={Credits}
        options={{
          headerTitleAlign:'center',
          title:"Who are we ?",
          headerTransparent:false,
          headerTitleStyle:{
            fontWeight: 'bold',
          }
        }}
      />
    </StackNavigator.Navigator>
  );
};

export { MainStackNavigator, InventoryStackNavigator, CreditsStackNavigator };
