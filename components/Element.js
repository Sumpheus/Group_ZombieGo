import React from 'react'
import { StatusBar } from "react-native";
import { StyleSheet, View, Text, TextInput, Button, ScrollView, TouchableOpacity, ImageBackground, Linking } from 'react-native';

export default function Element({ navigation }) {
  return (
  <View style = {styles.container}>
    <StatusBar
      barStyle = "light-content"
      hidden = {false}
      backgroundColor = "red" // ou une couleur..à voir
      translucent = {true}
    />

    <View style={styles.titlecontainer}>

    </View>

   </View>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
 })
