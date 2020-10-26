import 'react-native-gesture-handler';
import * as React from 'react';
import { Component }  from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList, Image, ActivityIndicator } from 'react-native';
import Video from "react-native-video";


class Element extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      elements: []
    }
  }

  componentDidMount() {

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
        <ScrollView style ={styles.container} contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
          <Video
            source={require("../assets/videos/Road.mp4")}
            style={styles.backvideo}
            muted={true}
            repeat={true}
            resizeMode={"cover"}
            rate={1.0}
            ignoreSilentSwitch={"obey"}
          />
          {/* <Video
              source={require("../assets/audio/OST1.mp3")}
              style={styles.backsound}
              repeat={true}
              rate={1.0}
              ignoresSilentSwitch={"obey"}
              shouldPlay
              isLooping
              audioOnly
            /> */}
          <FlatList
            data={this.state.elements}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({item, index}) => {
              if (item.id != 6 && item.id != 7) {
                return (
                  <View style = {styles.item}>

                    <Image style={styles.image} source={{uri: getElementIconFromApi(item.title)}}/>

                    <View style = {styles.viewTitle}>
                      <Text style = {styles.title}>{item.title}</Text>
                    </View>
                  </View>
                )
              }
            }}
          />
        </ScrollView>
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