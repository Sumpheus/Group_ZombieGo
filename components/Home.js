import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { AppLoading } from 'expo';
import { Video } from 'expo-av';
import { useFonts, BlackOpsOne_400Regular } from '@expo-google-fonts/dev';



class Home extends React.Component {

  
  
  render() {
    return(       
    <View style = {styles.container}>

      <Video
        source={require("./../assets/videos/WorldMap2.mp4")}
        style={styles.backvideo}
        // repeat={true}
        resizeMode={"cover"}
        rate={1.0}
        ignoresSilentSwitch={"obey"}
        shouldPlay
        isLooping
        />

      <View style={styles.titleContainer}>
      <View style={styles.titleContainer2}>  
      <Text
      style={styles.title}>
          ZombiGo!
      </Text>
      </View>
      </View>
    
    <View style = {styles.menuContainer}>
    <View style = {styles.menuContainer2}>  
      <Text style={styles.textmenu}>Make your choice !</Text>
      <TouchableOpacity style={styles.btnPrimary}>
        <Text>Simulation</Text>       
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnPrimary}>
        <Text>Arcade</Text>
      </TouchableOpacity>
    </View>
    </View>  

    <View style = {styles.footercontainer}>
      
      <Text style = {styles.footerText}>
        Mention Légal
      </Text>
 
    </View>
   </View> 
    )
  }
}



const styles = StyleSheet.create({

    container: {
      flex: 1,      
    },

    titleContainer:{
      backgroundColor: 'black', 
      flex:1,
      opacity: 0.5,
      display: 'flex',
      justifyContent: 'center',
    },

    titleContainer2:{
      display: 'flex',
      alignItems: 'center',
    },

    title:{
      opacity: 1,
      fontSize: 40,
      color: 'red',
      
        // fontFamily: 'BlackOpsOne-Regular',
    },

    menuContainer:{
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
      fontSize: 22,
      color: 'aqua',
      textAlign: 'center',
      paddingBottom: 50,
    },

    btnPrimary: {
      backgroundColor: 'blue',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      
    },


    footercontainer: {
      marginTop: 20,
      backgroundColor: 'black',
      flex: 1,
      opacity: 0.5,       
    },

    footerText: {
      color: 'aqua',
      fontSize: 20,
    },

    backvideo:{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      opacity: 1,
    }
    
 })




export default Home