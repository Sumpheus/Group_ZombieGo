import React from 'react'
import { Video } from 'expo-av'
import { StatusBar } from 'react-native'
import { NavigationContainer, NavigationHelpersContext } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import { SearchBar } from 'react-native-elements'
import { StyleSheet, 
         Text,
         FlatList, 
         View,
         ActivityIndicator,
         Button,
         TextInput,
         Animated } from 'react-native'
        





class Search extends React.Component {

  render() {
    return (
    <View style={styles.container}>
      <StatusBar
        barStyle = "light-content"
        hidden = {false}
        backgroundColor = "indigo" // ou une couleur..à voir
        translucent = {false}
      />
    <Video style={styles.backgroundVideo}
        // source={require("./../assets/videos/nom de la video")}
        // style={styles.backvideo}
        // resizeMode={"cover"}
        // rate={1.0}
        // ignoresSilentSwitch={"obey"}
        // shouldPlay
        // isLooping
     > 
    </Video>  

      <View style={styles.research}>
        <TextInput style={styles.Searchbar} placeholder="Search for an Item" /* onChangeText={text => this.SearchFilterFunction(text)}
        onClear={text => this.SearchFilterFunction('')} */ />
        <Button title='Ok'/>
                 
      </View>

      <SearchBar style={styles.research} 
     round
     searchIcon={{ size: 38 }}
     onChangeText={text => this.SearchFilterFunction(text)}
     onClear={text => this.SearchFilterFunction('')}
     placeholder="Type Here..."
     value={this.state.search}

   />
    </View>
     
     
    

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  Searchbar: {
    fontSize: 24,
    backgroundColor: 'red',
  }  
  
})

export default Search
