import 'react-native-gesture-handler';
import * as React from 'react';
import { Component }  from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, InventoryStackNavigator, CreditsStackNavigator } from "./StackNavigator.js";


const Tab = createBottomTabNavigator();

class BottomTabNavigator extends Component {
  render() {
    return (
      <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        activeBackgroundColor: 'red',
        inactiveBackgroundColor: 'grey',
      }}
      >
        <Tab.Screen
          name="Home"
          component={MainStackNavigator}
          options={{
            tabBarLabel: 'Home',
            Style:{
              fontWeight: 'bold',
            },
            tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
              return <Image
                source={require('../assets/img/tent.png')}
                style={styles.icon}
                />
            }

          }}
        />

        <Tab.Screen
          name="Inventory"
          component={InventoryStackNavigator}
          options={{
            tabBarLabel: 'Inventory',
            tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
              return <Image
                source={require('../assets/img/backpack.png')}
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
          tabBarIcon: () => { // On définit le rendu de nos icônes par les images récemment ajoutés au projet
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
}

const styles = StyleSheet.create({
  icon: {
  width: 30,
  height: 30
  }
})

export default BottomTabNavigator;
