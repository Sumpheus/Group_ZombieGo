import 'react-native-gesture-handler';
import * as React from 'react';
import { Component }  from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, InventoryStackNavigator, CreditsStackNavigator} from "./StackNavigator.js";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: 'white',
      inactiveTintColor: 'black',
      activeBackgroundColor: '#850606',
      inactiveBackgroundColor: '#850606',
      style: {
        height: 60,
        borderTopWidth: 1,
        borderTopColor: 'black',
      },
      labelStyle: {
        fontSize: 16,
        fontWeight: 'bold',
      },
    }}
    >
      <Tab.Screen
        name="Inventory"
        component={InventoryStackNavigator}
        options={{
          tabBarLabel: 'Backpack',
          tabBarIcon: () => {
            return <Image
              source={require('../assets/img/backpack.png')}
              style={styles.icon}
              />
          }
        }}
      />
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => {
            return <Image
              source={require('../assets/img/tent.png')}
              style={styles.icon}
              />
          }
        }}
      />
      <Tab.Screen
        name="Credits"
        component={CreditsStackNavigator}
        options={{
          tabBarLabel: 'Who are we ?',
          tabBarIcon: () => {
            return <Image
              source={require('../assets/img/gitHub.png')}
              style={styles.icon}
              />
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
