// import 'react-native-gesture-handler';
import * as React from 'react';
import { Component }  from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, TouchableOpacity, ImageBackground, Linking, Dimensions } from 'react-native';

const image= { uri: 'https://images.unsplash.com/photo-1526547462705-121430d02c2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1532&q=80' };

const Credits = () => {
  return (
    <View style = {styles.container}>

      <ScrollView>
        <ImageBackground source={image} style={styles.backpic, styles.imgcontainer}>
        </ImageBackground>
      </ScrollView>


      <View style = {styles.footercontainer}>
        <Text style = {[styles.footerText, {flexDirection:'row'}]}>
          <Text style = {{color:'black'}}>App created by </Text>
          <Text style = {{color:'#850606'}} onPress={() => Linking.openURL('https://www.linkedin.com/in/kevin-nguma/')}>Kevin Nguma</Text>
          <Text style = {{color:'black'}}>, </Text>
          <Text style = {{color:'#850606'}} onPress={() => Linking.openURL('https://www.linkedin.com/in/oswald-quevillart/')}>Oswald Quevillart</Text>
          <Text style = {{color:'black'}}> and </Text>
          <Text style = {{color:'#850606'}} onPress={() => Linking.openURL('https://www.linkedin.com/in/philippe-perechodov/')}>Philippe Perechodov</Text>
        </Text>
        <Text style = {[styles.footerText, {color:'black'}]}>
          ACS project - October 2020
        </Text>
        <Text style = {[styles.footerText, {color:'#850606'}]} onPress={() => Linking.openURL('https://github.com/Sumpheus/Group_ZombieGo')}>
          Github
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgcontainer: {
    width: Dimensions.get("window") .width,
    height: Dimensions.get("window") .height,
    opacity: 1,
  },
  backpic: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  footercontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  footerText: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center',
  },
});


export default Credits
