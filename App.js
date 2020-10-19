import React from 'react';
// import Home from './components/Home';
import Search from './components/customComponents/Search';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

export default class App extends React.Component {
  render() {
    return (
      <Search/>
    );
  }
}
