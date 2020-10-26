import * as React from 'react';
import { StyleSheet, View, Text, Linking } from 'react-native';


const Credits = () => {
  return (
    <View style = {styles.container}>
      <View style = {styles.footercontainer}>
        <Text style = {[styles.footerText, {flexDirection:'row'}]}>
          <Text style = {{color:'black'}}>App created by </Text>
          <Text style = {{color:'#850606'}} onPress={() => Linking.openURL('https://www.linkedin.com/in/kevin-nguma/')}>Kevin</Text>
          <Text style = {{color:'black'}}>, </Text>
          <Text style = {{color:'#850606'}} onPress={() => Linking.openURL('https://www.linkedin.com/in/oswald-quevillart/')}>Oswald </Text>
          <Text style = {{color:'black'}}>and </Text>
          <Text style = {{color:'#850606'}} onPress={() => Linking.openURL('https://www.linkedin.com/in/philippe-perechodov/')}>Philippe</Text>
        </Text>
        <Text style = {[styles.footerText, {color:'black'}]}>
          ACS project - October 2020
        </Text>
        <Text style = {[styles.footerText, {color:'#850606'}]} onPress={() => Linking.openURL('https://github.com/Sumpheus/Group_ZombieGo')}>
          Github
        </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footercontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  footerText: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center',
  },
});


export default Credits