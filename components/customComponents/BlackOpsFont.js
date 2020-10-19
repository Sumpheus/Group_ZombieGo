import React, { useState, useEffect } from 'react';

import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts, BlackOpsOne_400Regular } from '@expo-google-fonts/black-ops-one';

export default () => {
  let [fontsLoaded] = useFonts({
    BlackOpsOne_400Regular,
  });

  let fontSize = 24;
  let paddingVertical = 6;

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontSize,
            paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'BlackOpsOne_400Regular',
          }}>
          Black Ops One Regular
        </Text>
      </View>
    );
  }
};