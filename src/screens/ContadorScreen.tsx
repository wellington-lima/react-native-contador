import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const ConatdorScreen = () => {

  const [contador, setContador] = useState(10);

  return(
    <View style={ styles.container }>
      <Text style={ styles.title }>
        Contador: { contador }
      </Text>

      <TouchableOpacity
        onPress={ ()=> setContador(contador + 1) }
      >
        <View 
          style={ styles.buttonIncrement }
        >
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign:'center',
    fontSize: 40,
    top: -20
  },
  buttonIncrement: {
    backgroundColor:'red',
    borderRadius: 100
  }
})

export default ConatdorScreen;