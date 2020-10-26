// import 'react-native-gesture-handler';
import * as React from 'react';
import { Component }  from 'react';
// import { StatusBar } from "react-native";
import { StyleSheet, View, Text, FlatList, SafeAreaView, Image, ActivityIndicator } from 'react-native';

import items from '../assets/save/saveInventory.js';
import { getElementIconFromApi } from '../API/ElementItemApi.js';


const Inventory = () => {
  var itemsNumbers = [];
  for(var key in items) {
    var value = items[key].number;
    itemsNumbers.push(value)
  }
  var sum = itemsNumbers.reduce(function(a, b){
    return a + b;
  }, 0);

  for (let i = 0; i < itemsNumbers.length; i++) {
    const element = itemsNumbers[i];
      if (element > 0) {
      return (
        <View style = {styles.container}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item, index}) => {
              if (item.number > 0) {
                return (
                  <View style = {styles.item}>
                    <View style = {styles.viewTitle}><Text style = {styles.title}>{item.title}</Text></View>
                    <Image style={styles.image} source={{uri: getElementIconFromApi(item.title)}}/>
                    <View style = {styles.viewNumber}><Text style = {styles.number}>x {item.number}</Text></View>
                  </View>
                )
              }
            }}
          />
        </View>
      )
    }
    else if (sum === 0){
      return (
        <View style = {styles.container2}>
          <View style = {styles.item2}>
            <Image style = {styles.image2} source={require('../assets/img/backpack.png')}/>
            <View style = {styles.viewTitle2}>
              <Text style = {styles.title}>Your inventory is empty</Text>
            </View>
          </View>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
  },
  container2: {
    flex: 1,
  },
  item: {
    backgroundColor: '#850606',
    padding: 10,
    margin: 10,
    borderBottomColor: "black",
    borderStyle:'solid',
    borderWidth: 2,
    height: 170,
    width: 170,
    // alignItems: 'center',
  },
  item2: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  viewTitle: {
    alignItems: 'flex-start',
  },
  viewTitle2: {
    marginTop: 50,
  },
  viewNumber: {
  },
  image: {
    width: 80,
    height: 80,
    marginLeft: 35,
    alignItems: 'center',
  },
  image2: {
    width: 150,
    height: 150,
    marginTop: 50,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  number: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'right',
  }
});


export default Inventory;
