import 'react-native-gesture-handler';
import * as React from 'react';
import { Component }  from 'react';
import { StatusBar } from "react-native";
import { StyleSheet, View, Text, TextInput, Button, ScrollView, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import Video from "react-native-video";


class Arcade extends Component {
  render() {
    return (

      <View style ={styles.container} contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
        <StatusBar
          barStyle = "light-content"
          hidden = {false}
          backgroundColor = "black" // ou une couleur..à voir
        />
        <Video
          source={require("./../assets/videos/House.mp4")}
          style={styles.backvideo}
          muted={true}
          repeat={true}
          resizeMode={"cover"}
          rate={1.0}
          ignoreSilentSwitch={"obey"}
        />
        <Video
          source={require("./../assets/audio/simulationSound.mp3")}
          repeat={true}
          rate={1.0}
          ignoresSilentSwitch={"obey"}
          shouldPlay
          isLooping
          audioOnly
        />

        <TouchableOpacity
          style={styles.titlecontainer}
          onPress={() => navigation.navigate('Map')}
        >
          <Text>Arcade !!!!!!</Text>
        </TouchableOpacity>

      </View>
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

    titlecontainer:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }
 })

export default Arcade
