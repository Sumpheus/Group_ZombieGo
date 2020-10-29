import * as React from 'react';
import { Component }  from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, TouchableOpacity, ImageBackground, Linking, Dimensions, Image } from 'react-native';


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
          <Text style = {styles.names} onPress={() => Linking.openURL('https://www.linkedin.com/in/kevin-nguma/')}>Kevin NGUMA</Text>
          <Text style = {styles.interNames}>and</Text>
          <Text style = {styles.names} onPress={() => Linking.openURL('https://www.linkedin.com/in/oswald-quevillart/')}>Oswald QUEVILLART</Text>
          <Text style = {styles.interNames}>and</Text>
          <Text style = {styles.names} onPress={() => Linking.openURL('https://www.linkedin.com/in/philippe-perechodov/')}>Philippe PERECHODOV</Text>
        </View>
        <View style={styles.copyright}>
          <Text style = {[styles.footerText, {color:'white'}]}>ACS project made in October 2020</Text>
          <View style={styles.footerGitHub}>
            <Image style={styles.image} source={require('../assets/img/gitHubRed.png')}/>
            <Text style = {[styles.footerText, {color:'#850606', fontWeight: 'bold'}]} onPress={() => Linking.openURL('https://github.com/Sumpheus/Group_ZombieGo')}> ZombieGo</Text>
          </View>
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
  CreatedBy: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  footerText: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
  footerGitHub: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "flex-start",
  },
  names: {
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
  interNames: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    textShadowColor: 'red',
    textShadowRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  copyright: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  image: {
    width: 30,
    height: 30,
    alignItems: 'flex-start',
  }
});


export default Credits
