import 'react-native-gesture-handler';
import * as React from 'react';
import { Component }  from 'react';

import { StatusBar } from "react-native";
import { StyleSheet, View, Text, FlatList, SafeAreaView, Image } from 'react-native';

import items from '../assets/save/saveInventory.js';

class Inventory extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inventory: []
    }
  }

  componentDidMount() {


    this.setState({
      inventory: items
    })

  }

  _displayInventory(navigation) {
    console.log(this.state.inventory);
    return (
      <View>
        <StatusBar
          barStyle = "light-content"
          hidden = {false}
          backgroundColor = "blue" // ou une couleur..à voir
          translucent = {true}
        />

        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item, index}) => {
            if (item.number > 0) {
              return (
                <View style = {styles.item}>
                  <Image style = {styles.image} source={require('../assets/img/tent.png')}/>
                  <View style = {styles.viewTitle}><Text style = {styles.title}>{item.title} :</Text></View>
                  <View style = {styles.viewNumber}><Text style = {styles.number}>{item.number}</Text></View>
                </View>
              )
            }
            else {
              return (
                <View style = {styles.item}>
                  <Image style = {styles.image} source={require('../assets/img/backpack.png')}/>
                  <View style = {styles.viewTitle}><Text>Your inventory is empty</Text></View>
                </View>
              )
            }
          }}

        />
      </View>
    )
  }


  render() {
    return (
      <View style = {styles.container}>
        {this._displayInventory()}
      </View>
    )
  }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    safeAreaView: {
      flex: 1,
    },
    item: {
      backgroundColor: 'transparent',
      padding: 10,
      borderBottomColor: "black",
      borderStyle:'solid',
      borderBottomWidth: 1,
      flexDirection: 'row',
    },
    viewImage: {
      flex: 1,
    },
    viewTitle: {
      flex: 5,
    },
    viewNumber: {
      flex: 1,
    },
    image: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    title: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 24,
    },
    number: {
      color: 'red',
      fontWeight: 'bold',
      fontSize: 24,
    }
})


export default Inventory;
