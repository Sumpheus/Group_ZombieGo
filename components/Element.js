import 'react-native-gesture-handler';
import * as React from 'react';
import { Component }  from 'react';
import { StatusBar } from "react-native";
import { StyleSheet, View, Text, TextInput, Button, ScrollView, TouchableOpacity, ImageBackground, Linking, AsyncStorage } from 'react-native';
import { Video, Audio } from 'expo-av';
import { getElementFromApi, getItemByElementIdFromApi } from './../API/ElementItemApi';




class Element extends Component {

  render() {

    return (
      
      <ScrollView style ={styles.container} contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
        <StatusBar
          barStyle = "light-content"
          hidden = {false}
          backgroundColor = "transparent" // ou une couleur..à voir
          translucent = {true}
        />


  {/* Background video */}
        <Video
          source={require("./../assets/videos/Road.mp4")}
          style={styles.backvideo}
          repeat={true}
          resizeMode={"cover"}
          rate={1.0}
          ignoresSilentSwitch={"obey"}
          shouldPlay
          isLooping
        />

      {/* Background Music from DAN TERMINUS - Inhert */}
      <Video
          source={require("./../assets/audio/OST1.mp3")}
          style={styles.backsound}
          repeat={true}
          rate={1.0}
          ignoresSilentSwitch={"obey"}
          shouldPlay
          isLooping
          audioOnly
        />


        <View style={styles.titlecontainer}>

        </View>

        
      </ScrollView>
    )
  }
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

export default Element
