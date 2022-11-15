import React from 'react';
import { Text, View } from 'react-native';

const HolaMundoScreen = () => {
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
    }}>
      <Text style={{
        fontSize: 50,
        textAlign: 'center',
      }}>
        Hola Mundo React Native!
      </Text>
    </View>
  )
}

export default HolaMundoScreen;