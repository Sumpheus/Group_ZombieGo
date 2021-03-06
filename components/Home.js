import * as React from 'react';
import { StatusBar } from "react-native";
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import Video from "react-native-video";


const Home = ({ navigation }) => {

  return (
    <ScrollView style ={styles.container} contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
      <StatusBar
        barStyle = "light-content"
        hidden = {false}
        translucent = {true}
        backgroundColor = "transparent" // ou une couleur..à voir
      />
      <Video
        source={require("../assets/videos/WorldMap2.mp4")}
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
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/img/zombieGo.png')}/>
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
          onPress={() => navigation.navigate('Map')}
        >
          <ImageBackground source={require('../assets/img/arcade.png')} style={styles.btnImageArc}>
            <Text style={styles.btnText}>Arcade</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
       flex: 1,
width: '100%',
       height: 150,
       resizeMode: 'cover',
       marginTop: 10,
    },
    title:{
      opacity: 1,
      fontSize: 80,
      color: '#850606',
    },
    menu:{
      flex: 1,
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
      textShadowColor: 'red',
      textShadowRadius: 10,
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
