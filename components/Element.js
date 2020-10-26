import 'react-native-gesture-handler';
import * as React from 'react';
import { Component }  from 'react';
import { StatusBar } from "react-native";
import { StyleSheet, View, Text, TextInput, Button, ScrollView, TouchableOpacity, ImageBackground, Linking, AsyncStorage, FlatList, Image, ActivityIndicator } from 'react-native';
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

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      elements: []
    }
  }

  componentDidMount() {
    return fetch('http://172.21.201.27:8000/api/v1/element', {
      headers:  {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }})
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          elements: responseJson })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
      <View style = {styles.container2}>
        <ActivityIndicator size="large" color="#850606" />
      </View>
      )
    } else {
      return (
        <View style = {styles.container}>
          <Video
            source={require("./../assets/videos/testvideo.mp4")}
            style={styles.backvideo}
            resizeMode={"cover"}
            rate={1.0}
            ignoresSilentSwitch={"obey"}
            shouldPlay
            isLooping
          />
          <FlatList
            data={this.state.elements}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({item, index}) => {
              if (item.id != 6 && item.id != 7) {
                return (
                  <View style = {styles.item}>

                    <Image style={styles.image} source={{uri: getElementIconFromApi(item.title)}}/>

                    <View style = {styles.viewTitle}><Text style = {styles.title}>{item.title}</Text></View>
                  </View>
                )
              }
            }}
          />
        </View>
      )
    }
  }

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    container2: {
      flex: 1,
      justifyContent: 'center',
    },
    backvideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      opacity: 1,
    },
    item: {
      backgroundColor: '#850606',
      padding: 10,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 50,
      marginRight: 50,
      borderColor: "black",
      borderStyle:'solid',
      borderWidth: 1,
      flexDirection: 'row',
      borderRadius: 10,
      opacity: 0.9,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    viewTitle: {
      alignItems: 'center',
    },
    image: {
      width: 30,
      height: 30,
      marginRight: 10,
      alignItems: 'center',
    },
    title: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 24,
    },
 })

export default Element
