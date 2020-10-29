import 'react-native-gesture-handler';
import * as React from 'react';
import { Component }  from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, ActivityIndicator,ListViewComponent, StatusBar } from 'react-native';
import Video from "react-native-video";
import { getElementIconFromApi, APILINK } from './../API/ElementItemApi';


class Item extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      items: []
    }
  }

  componentDidMount() {
    return fetch(APILINK + '/api/v1/item', {
      headers:  {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }})
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
      isLoading: false,
      items: responseJson })
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
            source={require("../assets/videos/Road.mp4")}
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
          <FlatList
            data={this.state.items}
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
    },
    item: {
      backgroundColor: '#850606',
      padding: 10,
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 70,
      marginRight: 70,
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
      fontSize: 30,
    },
  })

export default Item
