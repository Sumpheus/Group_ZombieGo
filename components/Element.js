import 'react-native-gesture-handler';
import * as React from 'react';
import { Component }  from 'react';
import { StatusBar } from "react-native";
import { StyleSheet, View, Text, TextInput, Button, ScrollView, TouchableOpacity, ImageBackground, Linking, AsyncStorage, FlatList, Image, ActivityIndicator } from 'react-native';
import { Video, Audio } from 'expo-av';
import { getElementIconFromApi, APILINK } from './../API/ElementItemApi';


class Element extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      elements: []
    }
  }

  componentDidMount() {
    return fetch(APILINK + '/api/v1/element', {
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

  onPress() {
    return (<View><Text>Poil</Text></View>)
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
        <View style ={styles.container} contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
          <StatusBar
            barStyle = "light-content"
            hidden = {false}
            backgroundColor = "black" // ou une couleur..à voir
          />
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
          <Video
            source={require("./../assets/audio/simulationSound.mp3")}
            style={styles.backsound}
            repeat={true}
            rate={1.0}
            ignoresSilentSwitch={"obey"}
            shouldPlay
            isLooping
            audioOnly
          />
          <FlatList
            data={this.state.elements}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({item, index}) => {
              if (item.id != 6 && item.id != 7) {
                return (
                  <TouchableOpacity
                    style = {styles.item}
                    onPress={() => this.onPress()}
                  >
                    <Image style={styles.image} source={{uri: getElementIconFromApi(item.title)}}/>
                    <View style = {styles.viewTitle}>
                      <Text style = {styles.title}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
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
      resizeMode: 'cover',
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
      borderWidth: 2,
      flexDirection: 'row',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    viewTitle: {
      alignItems: 'center',
    },
    image: {
      width: 50,
      height: 50,
      marginRight: 10,
      alignItems: 'center',
    },
    title: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 24,
    },
 })

export default Element
