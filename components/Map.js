/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import MapView, { Marker, PROVIDER_GOOGLE} from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import * as geolib from 'geolib';
import AsyncStorage from '@react-native-community/async-storage'
import { Platform, StyleSheet, Alert } from "react-native"
import React from 'react'


const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = 0.00;

const STORAGE_KEY = '@save_inv'

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 0.122,
        longitude: 0.122,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      },
      markers: {
            latitude: 0.1,
           longitude:0.1
      },
          data: [],
          loot: [],
          inventory: []
          }
    }   



    
// Chargement des fonctions avant rendu
componentDidMount() {
  this.getCoords(),
  this.getRandomMarker(),
  this.fetchData(),
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
storeData = async (value) => {
  try {
    var value = this.state.inventory
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
    console.log(jsonValue)
  } catch (e) {
    // saving error
  }
}

// récupération des données de l'API dans le state data et dans le state loot
fetchData = async()=>{
  const data = []
  //data
  const response = await fetch('http://172.21.201.18:8000/api/v1/item')
  const test = await response.json()
  this.setState({data:test});
  //loot
  const items = this.state.data;
  var numberOfItem = items.length,
  randomItem = Math.floor(Math.random() * (numberOfItem - 1) + 1);
  this.setState({loot: items[randomItem]});
}

  // Coordonnées de l'utilisateur et mise à jour en temps réelle
getCoords(){
  // Coordonnées de l'utilisateur
  Geolocation.getCurrentPosition(position => {
    var initialRegion = {
      latitude: parseFloat(position.coords.latitude),
      longitude: parseFloat(position.coords.longitude),
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    };
    this.setState({region: initialRegion});
  }, 
  error => console.log(error.message), {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
  // mise à jour en temps réelle des coordonnées de l'utilisateur
  this.watchID = Geolocation.watchPosition(position => {
    var region = {
      latitude: parseFloat(position.coords.latitude),
      longitude: parseFloat(position.coords.longitude),
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA
    };
    this.setState({region: region});
  }, 
  error => console.log(error.message), {enableHighAccuracy: true, timeout: 0, maximumAge: 0});
}

// génération d'un map marker àléatoire
getRandomMarker(){
  Geolocation.getCurrentPosition(position => {
    var latmin = parseFloat(position.coords.latitude) - 0.001,
        latmax = parseFloat(position.coords.latitude) + 0.001,
        longmin = parseFloat(position.coords.longitude) - 0.001,
        longmax = parseFloat(position.coords.longitude) + 0.001,
     posRng = {
      // latitude: parseFloat(lat.toFixed(Math.random() * (9 - 8))),
      // longitude: parseFloat(long.toFixed(Math.random() * (9 - 8)))
      latitude: Math.random() * (latmax - latmin) + latmin,
      longitude: Math.random() * (longmax - longmin) + longmin
    }
    this.setState({markers: posRng});
  },
  error => console.log(error.message), {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000});
}

// évenement quand l'utilisateur touche un marqueur dans un rayon valide
markerEvent(){
  // recalcule de la position de l'utilisateur
  this.getCoords();
  // récupération de la distance entre le marker et l'utilisateur
  var distance = geolib.getDistance(
    { 
      latitude: this.state.region.latitude,
      longitude: this.state.region.longitude 
    }, 
    { 
      latitude: this.state.markers.latitude,
      longitude: this.state.markers.longitude 
    }
  )
    //vérification de la distance marker > utilisateur pour lancer l'event si l'utilisateur appuie sur le marker
    if (distance <= 150) {
      //récupération d'un objet aléatoire 
      const items = this.state.data;
      var numberOfItem = items.length,
      randomItem = Math.floor(Math.random() * (numberOfItem - 1) + 1);
      this.setState({loot: items[randomItem]});
      var addToInventory = this.state.inventory.concat(this.state.loot);
      // message d'alert pour récupérer ou non l'objet
      Alert.alert(
        //titre
        'LOOT:',

        //body
        'do you want take '+ this.state.loot.title + ' ?',
        [
          {
            text: 'Yes',
            onPress: () => {this.setState({inventory : addToInventory}),this.storeData()}
          },
          {
            text: 'No',
            onPress: () => this.storeData()
          },
        ],
        {cancelable: false},
        //clicking out side of alert will not cancel
      );
      //créer un nouveau objectif
      this.getRandomMarker();
      }
    
    else{
      alert("Vous n'êtes pas assez proche du point d'intérêt.")
    }
}

requestLocationPermission = async () => {
  if(Platform.OS === 'ios') {
    var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    console.log('iPhone: ' + response);
    if(response === 'granted') {
      this.locateCurrentPosition();
    }
  } else {
    var response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    console.log('android: ' + response);
    if(response === 'granted') {
      this.locateCurrentPosition();
    }
  }
}

render() {
  return (
    <MapView
    
      style={styles.map}
      showsUserLocation={true}
      followsUserLocation={true}
      provider={PROVIDER_GOOGLE}
      region={{latitude: this.state.region.latitude,
                longitude: this.state.region.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
              }}>
        <MapView.Marker  coordinate={{longitude: this.state.markers.longitude, latitude: this.state.markers.latitude}}
        onPress={ () => this.markerEvent()}/>
      </MapView>
  );
}
}


const styles = StyleSheet.create({
map: {
  height: '100%'
}
});

