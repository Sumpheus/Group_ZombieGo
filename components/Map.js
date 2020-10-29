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
import { getElementIconFromApi, APILINK } from './../API/ElementItemApi';


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
      inventory: [],
      eventAlly: []
    }
  }

  // Chargement des fonctions avant rendu
  componentDidMount() {
    this.getCoords(),
    this.getRandomMarker(),
    this.fetchData(),
    this.fetchElement(),
    this.getData()
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

  storeData = async (value) => {
    try {
      var value = this.state.inventory
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  // récupération des données de l'API dans le state data et dans le state loot
  fetchData = async()=>{
    const data = []
    //data
    const response = await fetch(APILINK + '/api/v1/item')
    const test = await response.json()
    this.setState({data:test});
    //loot
    const items = this.state.data;
    var numberOfItem = items.length,
    randomItem = Math.floor(Math.random() * (numberOfItem - 1) + 1);
    this.setState({loot: items[randomItem]});
  }

  fetchElement = async()=>{
    //data
    const response = await fetch(APILINK + '/api/v1/element')
    const allyEvent = await response.json()
    this.setState({eventAlly:allyEvent});
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
      //fonction recupération de l'objet dans l'inventaire
      var enemyDetection = this.state.loot;
      var item = this.state.loot.element;
      var allyDonation = this.state.eventAlly
      var numberOfElement = allyDonation[1].Items.length
      var randomDonation = Math.floor(Math.random() * (numberOfElement - 1) + 1);
      var addToInventory = this.state.inventory.concat(this.state.loot);
      var addDonation = this.state.inventory.concat(allyDonation[1].Items[randomDonation])
      var getInventoryItem = this.state.inventory
      var haveCondition = false
      var roulette = Math.floor(Math.random() * Math.floor(2));


      if (item.title === "Ennemy") {
        if(enemyDetection.title === "Zombi"){
          for (let i = 0; i < getInventoryItem.length; i++) {
            const element = getInventoryItem[i];
            if (element.element.title ==="Weapon") {
              if (roulette = 1) {
                getInventoryItem.splice(i)
                this.setState({inventory : getInventoryItem})
                this.storeData()
              }
              haveCondition = true
              break
            }
          }
          if (haveCondition === true) {
            alert("Un zombie vous attaque. Vous survivez grâce à l'une de vos armes !")
          }
          else{
            alert("Un zombie vous surprend. Vous n'êtes hélas pas armé. C'est malheureusement la fin pour vous.")
            {this.setState({inventory : []}),this.storeData()}
          }
         }
        else if(enemyDetection.title === "Dangerous_animal"){
          for (let i = 0; i < getInventoryItem.length; i++) {
            const element = getInventoryItem[i];
            if (element.element.title ==="Weapon") {
              if (roulette = 1) {
                getInventoryItem.splice(i)
                this.setState({inventory : getInventoryItem})
                this.storeData()
              }
              haveCondition = true
              break
            }
          }
          if (haveCondition === true) {
            alert("Un animal sauvage se rue sur vous. Heuresement pour vous, vous étiez prêt... Vous sortez une de vos arme et abattez l'animal! ")
          }
          else{
            alert("Un animal sauvage vous attaque. Vous n'êtes hélas pas armé. C'est malheureusement la fin pour vous.")
            {this.setState({inventory : []}),this.storeData()}
          }
        }
        else if(enemyDetection.title === "Trap"){
          roulette
          if (roulette === 0) {
            alert("Vous marchez prudemment... Quand soudain vous regardez à vos pieds. C'était moins une! Quelqu'un à poser un piège et vous y echapper de peu!")
          }
          else{
            alert("Vous manquez d'attention... Malheureusement pour vous, vous tombez dans un piège... C'est la fin de votre aventure!")
            {this.setState({inventory : []}),this.storeData()}
          }
        }
        else if(enemyDetection.title === "Biohazard"){
          roulette
          if (roulette === 0) {
            alert("Grâce à vos magnifiques poils de nez, le virus qui à décimer une grande partie de la population ne parvient pas à pénétrer vore organisme!")
          }
          else{
            alert("Le danger n'est pas toujours visible à l'oeil nu... Cette pensée vous stress. Vous prenez une grand inspiration, hhélas en faisant cela vous aspirez des particules de virus... Vous voila devenu un Zombie...")
            {this.setState({inventory : []}),this.storeData()}
          }
        }
       }
      if (item.title === "Ally") {
        if(item.title === "Animal"){
          alert('Vous apercevez un petit animal inoffensif. Ce dernier fuit en vous voyant')
        }
        else{
          alert("Vous trouvez un camp de survivant. l'un d'entre eux s'approche et vous offre un peu de nourriture." )
          getInventoryItem.push(addDonation)
          this.setState({inventory: getInventoryItem}),
           this.storeData()
        }
      }
      else if(item.title !== "Ennemy" && item.title !== "Ally"){
      // message d'alert pour récupérer ou non l'objet
      Alert.alert(
        //titre
        'LOOT:',
        //body
        'do you want take '+ this.state.loot.title + ' ?',
        [
          {
            text: 'Yes',
            onPress: () => {
              this.setState({inventory : addToInventory}),this.storeData()
            }
          },
          {
            text: 'No',
            onPress: () => {this.setState({inventory : []}),this.storeData()}
          },
        ],
        {cancelable: false},
        //clicking out side of alert will not cancel
      );
      //créer un nouveau objectif
      haveCondition = false
      this.getRandomMarker();
      }
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
