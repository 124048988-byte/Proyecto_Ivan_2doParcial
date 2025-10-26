import { Text, StyleSheet, View } from 'react-native'

export default function CargaScreen () {
  return (
    <View style={styles.container}>
      <Text style = {styles.texto} > Ahorra+App </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    color: 'white',
    fontSize: 30
  }
})