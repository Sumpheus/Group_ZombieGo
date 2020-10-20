import React from 'react'
import { StatusBar } from "react-native";
import { StyleSheet, View, Text, TextInput, Button, ScrollView, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Video } from 'expo-av';
import { Audio } from 'expo';
import getelement from '../components/GetElement';





export default function Element({ navigation }) {

  

  return (
    getelement(),
  <View style = {styles.container}>
    <StatusBar
      barStyle = "light-content"
      hidden = {false}
      backgroundColor = "red" // ou une couleur..à voir
      translucent = {true}
    />
    
    <Video
      style={styles.backvideo}
      source={require("./../assets/videos/House.mp4")}
      resizeMode={"cover"}
      rate={1.0}
      ignoresSilentSwitch={"obey"}
      shouldPlay
      isLooping
    />

{/* <Button title='Rechercher' onPress={() => }/> */}
    <View style={styles.titlecontainer}>
      <Text style={styles.title}>Available Items</Text>
    </View>

    <View style={styles.listcontainer}>
      <FlatList
        // data={element}
      />
    </View>
     
      
  </View>
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    backvideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      opacity: 1,
    },

    title: {
      textAlign: 'center',
      marginTop: 40,
      fontSize: 20,
      color: 'red',
    }
 })
