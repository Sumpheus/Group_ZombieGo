// import 'react-native-gesture-handler';
import * as React from 'react';
import { Component }  from 'react';
import { Dimensions, StyleSheet, View, Text, FlatList, SafeAreaView, Image, ActivityIndicator, ImageBackground, ScrollView, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { getElementIconFromApi, APILINK } from './../API/ElementItemApi';

import { NavigationEvents } from 'react-navigation';

class Inventory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inventory: []
    }
  }

  componentDidMount(){
    const { navigation } = this.props
       this._refreshData = navigation.addListener('focus', () => {
         this.getData();
       });
    this.getData()
  };

  componentWillUnmount() {
    this._refreshData();
  }

  getData = async () => {
    try {
      var value = []
      value = await AsyncStorage.getItem('@storage_Key')
      if(value !== null) {
        var parsedValue = JSON.parse(value);
        this.setState({inventory: parsedValue})
      }
    } catch(e) {
      // error reading value
    }
  }

  render() {
    if (Array.isArray(this.state.inventory) && this.state.inventory.length) {
      return (
        <View style = {styles.container} contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
          <ImageBackground
            source={require('../assets/img/inventoryBackground.jpg')}
            style={styles.imageBackground}
            resizeMode={"cover"}
            rate={1.0}
          ></ImageBackground>
          <View style = {styles.container2}>
            <FlatList
              numColumns={3}
              data={this.state.inventory}
              keyExtractor={(item, index) => String(index)}
              renderItem={({item, index}) => {
                return (
                  <View style = {styles.item}>
                    <View style = {styles.viewTitle}><Text style = {styles.title}>{item.title}</Text></View>
                    <Image style={styles.image} source={{uri: getElementIconFromApi(item.title)}}/>
                     <View style = {styles.viewNumber}><Text style = {styles.number}>x 1</Text></View>
                    {/* <View style = {styles.viewNumber}><Text style = {styles.number}>x {item.number}</Text></View> */}
                  </View>
                )
              }}
            />
          </View>
        </View>
      )
    }
    else {
      return (
        <View style = {styles.container}>
          <ImageBackground
            source={require('../assets/img/inventoryBackground.jpg')}
            style={styles.imageBackground2}
          ></ImageBackground>
          <View style = {styles.item2}>
            <View style = {styles.viewTitle2}>
              <Text style = {styles.title2}>Your inventory is empty</Text>
            </View>
            <Image style = {styles.image2} source={require('../assets/img/backpackRed.png')}/>
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
    alignItems: 'center',
  },
  imageBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    paddingLeft: 700,
    resizeMode: 'cover',
    height: '100%',
  },
  imageBackground2: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 1,
    paddingLeft: 450,
    resizeMode: 'cover',
  },
  item: {
    backgroundColor: '#850606',
    padding: 10,
    margin: 5,
    borderBottomColor: "black",
    borderStyle:'solid',
    borderWidth: 2,
    height: 115,
    width: 115,
    borderRadius: 20,
  },
  item2: {
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  viewTitle: {
    alignItems: 'center',
  },
  viewTitle2: {
    marginTop: 50,
  },
  viewNumber: {
    alignItems: 'flex-end',
    marginTop: -30,
  },
  image: {
    width: 60,
    height: 60,
    alignItems: 'center',
  },
  image2: {
    width: 150,
    height: 150,
    marginTop: 30,
    marginLeft: 130,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  title2: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 130,
  },
  number: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'right',
  }
});


export default Inventory;
