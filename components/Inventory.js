import 'react-native-gesture-handler';
import * as React from 'react';
import { Component }  from 'react';

import { StatusBar } from "react-native";
import { StyleSheet, View, Text, TextInput, Button, ScrollView, TouchableOpacity, ImageBackground, Linking } from 'react-native';


class Inventory extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <StatusBar
          barStyle = "light-content"
          hidden = {false}
          backgroundColor = "blue" // ou une couleur..à voir
          translucent = {true}
        />

        <View style={styles.titlecontainer}>
          <Text>Inventaire !!!!!!</Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titlecontainer:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }
 })


export default Inventory;
