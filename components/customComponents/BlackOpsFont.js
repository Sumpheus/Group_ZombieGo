import React from 'react';
import { useFonts, BlackOpsOne_400Regular } from '@expo-google-fonts/dev';
import { View } from 'react-native';

let customFonts = {
    'BlackOpsOne': require('./assets/fonts/BlackOpsOne_Regular'),
  };
  
  export default class App extends React.Component {
    state = {
      fontsLoaded: false,
    };
  
    async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
    }
  
    componentDidMount() {
      this._loadFontsAsync();
    }
  
    render() {
      if (this.state.fontsLoaded) {
        return (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Platform Default</Text>
            <Text style={{ fontFamily: 'Inter-Black' }}>Inter Black</Text>
            <Text style={{ fontFamily: 'Inter-SemiBoldItalic' }}>
              Inter SemiBoldItalic
            </Text>
          </View>
        );
      } else {
        return <AppLoading />;
      }
    }
  }