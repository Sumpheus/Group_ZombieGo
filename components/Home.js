import * as React from 'react';
import { StatusBar } from "react-native";
import { StyleSheet, View, Text, TextInput, Button, ScrollView, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import { Video } from 'expo-av';


const Home = ({ navigation }) => {
  return (
  <View style = {styles.container}>
    <StatusBar
      barStyle = "light-content"
      hidden = {false}
      backgroundColor = "transparent" // ou une couleur..à voir
      translucent = {true}
    />

    <Video
      source={require("./../assets/videos/WorldMap2.mp4")}
      style={styles.backvideo}
      resizeMode={"cover"}
      rate={1.0}
      ignoresSilentSwitch={"obey"}
      shouldPlay
      isLooping
    />

    <View style={styles.titlecontainer}>
      <View style={styles.titlecontainer2}>
        <Text style={[styles.title, {fontFamily: 'serif'}]}>ZombiGo</Text>
      </View>
    </View>

    <View style = {styles.menu}>
      <Text style={styles.textmenu}>Select mode</Text>
      <TouchableOpacity
        style={styles.btnPrimary}
        onPress={() => navigation.navigate('Element')}
      >
        <ImageBackground source={require('../assets/img/simulation.png')} style={styles.btnImageSim}>
          <Text style={styles.btnText}>Simulation</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnPrimary}
        onPress={() => navigation.navigate('Arcade')}
      >
        <ImageBackground source={require('../assets/img/arcade.png')} style={styles.btnImageArc}>
          <Text style={styles.btnText}>Arcade</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>

   </View>
 )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titlecontainer:{
      backgroundColor: 'transparent',
      flex:1,
      display: 'flex',
      justifyContent: 'center',
    },
    titlecontainer2:{
      display: 'flex',
      alignItems: 'center',
    },
    title:{
      opacity: 1,
      fontSize: 80,
      color: 'red',
    },
    menu:{
      flex: 4,
      display: 'flex',
      justifyContent: 'center',
    },
    menuContainer2:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textmenu:{
      fontSize: 30,
      color: 'white',
      textAlign: 'center',
      margin: 30,
      flexDirection: 'row',
      textShadowColor: 'red',
      textShadowRadius: 10,
    },
    backvideo:{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      opacity: 1,
    },
    btnPrimary: {
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      height: 150,
      flex: 1,
    },
    btnText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 40,
      marginLeft: -200,
    },
    btnImageSim: {
      flex: 1,
      width: 125,
      height: 125,
      alignItems: 'flex-start', // aligne le texte...bizarrement
      marginLeft: 240,
    },
    btnImageArc: {
      flex: 1,
      width: 125,
      height: 125,
      alignItems: 'flex-end', // aligne le texte...bizarrement
      marginRight: 80,
      marginLeft: 40,
    },
 })


export default Home;
