import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Playlist(){
    return (
        <View>
        <StatusBar barStyle = "dark-content" hidden = {false} 
        backgroundColor = "red" translucent = {false}/>
        </View>
    )
}

export default bartel