// import 'react-native-gesture-handler';
import * as React from 'react';
import { Component }  from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, TouchableOpacity, ImageBackground, Linking, Dimensions } from 'react-native';
import { Fontisto, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';


const Credits = () => {
  return (
    <View style = {styles.container}>
      <ImageBackground
        source={require('../assets/img/DoorZombies.jpg')}
        style={styles.BackgroundPic}
        resizeMode={"cover"}
        rate={1.0}
      >
        <View style= {styles.CreatedBy}>
          <Text style = {styles.interNames}>Created by</Text>
          <Text style = {styles.names} onPress={() => Linking.openURL('https://www.linkedin.com/in/kevin-nguma/')}>Kevin NGUMA <AntDesign name="linkedin-square" size={16} color="white"/></Text>
          <Text style = {styles.interNames}>and</Text>
          <Text style = {styles.names} onPress={() => Linking.openURL('https://www.linkedin.com/in/oswald-quevillart/')}>Oswald QUEVILLART <AntDesign name="linkedin-square" size={16} color="white"/></Text>
          <Text style = {styles.interNames}>and</Text>
          <Text style = {styles.names} onPress={() => Linking.openURL('https://www.linkedin.com/in/philippe-perechodov/')}>Philippe PERECHODOV <AntDesign name="linkedin-square" size={16} color="white"/></Text>
        </View>
        <View style={styles.Copyright}>
          <Text style = {[styles.footerText, {color:'white'}]}>ACS project made in October 2020</Text>
          <Text style = {[styles.footerText, {color:'#850606', fontWeight: 'bold'}]} onPress={() => Linking.openURL('https://github.com/Sumpheus/Group_ZombieGo')}><AntDesign name="github" size={28} color="#850606" /> ZombieGo</Text>
        </View>
      </ImageBackground>
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
  CreatedBy:{
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  footerText: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
  names:{
    color: "white",
    borderStyle: "solid",
    borderWidth: 2,
    borderBottomColor: "black",
    borderRadius: 5,
    backgroundColor: "#850606",
    textAlign: "center",
    fontSize: 26,
    paddingBottom: 5,
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  interNames:{
    color: "white",
    textAlign: "center",
    fontSize: 24,
    textShadowColor: 'red',
    textShadowRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  Copyright:{
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
});


export default Credits
