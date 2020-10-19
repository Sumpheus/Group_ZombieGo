import 'react-native-gesture-handler';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './components/Home.js';
import Element from './components/Element.js';

const StackNavigator = createStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
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
                    headerStyle:
                      {

                      }
                  }}
                />
            </StackNavigator.Navigator>
        </NavigationContainer>
    );
}
