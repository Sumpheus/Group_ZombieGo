import 'react-native-gesture-handler';
import * as React from 'react';
import { Component }  from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MainStackNavigator, InventoryStackNavigator, CreditsStackNavigator} from "./StackNavigator.js";
import { Fontisto, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"

    activeColor="red"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}
    // tabBarOptions={{
    //   activeTintColor: '#850606',
    //   inactiveTintColor: 'black',
    //   activeBackgroundColor: '#696969',
    //   inactiveBackgroundColor: '#696969',
    //   style: {
    //     height: 60,
    //     borderTopWidth: 1,
    //     borderTopColor: 'black',
    //   },
    //   labelStyle: {
    //     fontSize: 16,
    //     fontWeight: 'bold',
    //   },
    // }}




    >
      <Tab.Screen
        name="Inventory"
        component={InventoryStackNavigator}
        options={{
          tabBarLabel: 'Backpack',
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="bag-personal-outline" size={36} color="black" />
          }
        }}
      />
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => {
            return <Fontisto name="tent" size={30} color="black"/>
          }
        }}
      />
      <Tab.Screen
        name="Credits"
        component={CreditsStackNavigator}
        options={{
          tabBarLabel: 'Who are we ?',
          tabBarIcon: () => {
            return <AntDesign name="github" size={30} color="black" />
          }
        }}
      />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
  width: 30,
  height: 30
  }
})


export default BottomTabNavigator;
