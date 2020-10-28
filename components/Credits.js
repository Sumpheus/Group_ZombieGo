// import 'react-native-gesture-handler';
import * as React from 'react';
import { Component }  from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, TouchableOpacity, ImageBackground, Linking, Dimensions } from 'react-native';


const Credits = () => {
  return (
    <View style = {styles.container}>

      <ImageBackground
        source={require('../assets/img/DoorZombies.jpg')}
        style={styles.BackgroundPic}
        resizeMode={"cover"}
        rate={1.0}
      ></ImageBackground>

    {/* Nos noms */}
      <View style = {styles.footercontainer}>
        <Text style = {styles.footerText}>
          <View style= {styles.CreatedBy}>
          <Text style = {{color:'black'}}>Created by : </Text>
          <Text style = {styles.names} onPress={() => Linking.openURL('https://www.linkedin.com/in/kevin-nguma/')}>Kevin Nguma</Text>
          <Text style = {{color:'black'}}>, </Text>
          <Text style = {styles.names} onPress={() => Linking.openURL('https://www.linkedin.com/in/oswald-quevillart/')}>Oswald Quevillart</Text>
          <Text style = {{color:'black'}}> and </Text>
          <Text style = {styles.names} onPress={() => Linking.openURL('https://www.linkedin.com/in/philippe-perechodov/')}>Philippe Perechodov</Text>
          </View>
        </Text>

    {/* Copyright avec liens */}
        <View style={styles.Copyright}>
          <Text style = {[styles.footerText, {color:'black'}]}>
            ACS project made in October 2020
          </Text>
          <Text style = {[styles.footerText, {color:'#850606'}]} onPress={() => Linking.openURL('https://github.com/Sumpheus/Group_ZombieGo')}>
          © ZombieGo
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  BackgroundPic: {
    position: "relative",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    resizeMode: 'cover',
    height: '100%',
  },
  footercontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    borderStyle: "solid",
    borderBottomColor: "black",
    borderWidth: 2,
    backgroundColor: 'white',
    opacity: 0.5,
    width: "100%",
    height: "100%",

  },
  footerText: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center',
    opacity: 1,

  },
  CreatedBy:{
    flexDirection: "column",
  },
  names:{
    color: "#850606",
    borderStyle: "solid",
    borderWidth: 2,
    borderBottomColor: "black",
    borderRadius: 5,
    backgroundColor: "blue",
    textAlign: "center",
    fontSize: 25,
    flex: 1,

  },
  Copyright:{
    borderStyle: "solid",
    borderBottomColor: "black",
    backgroundColor: "yellow",
    borderWidth: 2,
    width: "100%",
        
  },
});


export default Credits
