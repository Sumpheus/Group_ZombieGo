import 'react-native-gesture-handler';
import * as React from 'react';
import { Component }  from 'react';

import { StatusBar } from "react-native";
import { StyleSheet, View, Text, FlatList, SafeAreaView, Image, List } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'


class Inventory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    }
  }

  componentDidMount(){
    this.getData()
  }

  getData = async () => {
    try {
      var value = []
      value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        var parsedValue = JSON.parse(value);
        this.setState({inventory: parsedValue})
        console.log(value)
      }
    } catch(e) {
      // error reading value
    }
  }

  getElementIconFromApi(name) {
    return 'http://172.21.201.18:8000' + '/images/' + name + '.png'
  }
  

  render() {
    if (this.state.inventory !== null) {
    return (
      <View style = {styles.container}>
      <FlatList
        data={this.state.inventory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item, index}) => {
            return (
              <View style = {styles.item}>
                <View style = {styles.viewTitle}><Text style = {styles.title}>{item.title}</Text></View>
                <Image style={styles.image} source={{uri: this.getElementIconFromApi(item.title)}}/>
                <View style = {styles.viewNumber}><Text style = {styles.number}>{item.id}</Text></View>
              </View>
            )
        }}
      />
      </View>
    )
  } 
  else if (this.state.inventory.isEmpty()){
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
    flex: 1,
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
    color: 'red',
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