import { useState } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'

export default function CargaScreen () {
  return (
    <View style={styles.container}>
      <Text style = {styles.texto} > Ahorra+App </Text>
      <ActivityIndicator size= "large" color = "white" style= {styles.loader} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a6db0ff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    color: 'white',
    fontSize: 30
  },
  loader: {
    marginTop: 10
  }
})