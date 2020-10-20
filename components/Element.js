import 'react-native-gesture-handler';
import * as React from 'react';
import { Component }  from 'react';
import { StatusBar } from "react-native";
import { StyleSheet, View, Text, TextInput, Button, ScrollView, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { Video } from 'expo-av';


class Element extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <StatusBar
          barStyle = "light-content"
          hidden = {false}
          backgroundColor = "transparent" // ou une couleur..à voir
          translucent = {true}
        />

        <Video
          source={require("./../assets/videos/testvideo.mp4")}
          style={styles.backvideo}
          // repeat={true}
          resizeMode={"cover"}
          rate={1.0}
          ignoresSilentSwitch={"obey"}
          shouldPlay
          isLooping
        />

        <View style={styles.titlecontainer}>

        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
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

export default Element
