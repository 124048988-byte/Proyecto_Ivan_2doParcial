import { useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'

export default function MioScreen () {
  const [items, setItems] = useState (["op 1", "op 2", "op 3"])

  return (
    <View style={styles.container}>
    <ScrollView 
     style = {styles.Scroll }
     contentContainerStyle = {style.scrollContainer}
     horizontal = {true}
     showsHorizontalScrollIndicator= {true}
     persistentScrollbar= {true}
     >
     {items.map((item, index)(
     <View Key= {index} style= {styles.box}>
       <Text style = {styles.boxText} >{item}</Text>
     </View>
     ))}
    <ScrollView/>

      <View style ={styles.header}>  
      <Text style = {styles.texto} > Ahorra+App </Text>
      <Text style = {styles.texto2} > Hola, Luis Fernando </Text>
      <Text style = {styles.texto3} > Cambiar de usuario </Text>
      </View> 
     <TouchableOpacity style = {styles.boton}>
     <Text style = {styles.botontexto} > Entrar con biometría </Text>
     </TouchableOpacity>
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
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center'
   
  },
    texto2: {
    color: 'white',
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'left',   
    //marginLeft: 0 
    alignSelf:'left',
    paddingVertical: 60, // alto
    paddingHorizontal: 0, // ancho

  },
     texto3: {
    color: 'white',
    marginBottom: 20,
    textAlign: 'left',   
    marginVertical: -80, 
    alignSelf:'left',
    paddingVertical: 0, // alto
    paddingHorizontal: 10, // ancho

  },

  boton: {
  backgroundColor: 'white',
  paddingVertical: 20, // alto
  paddingHorizontal: 60, // ancho
  borderRadius: 10, // bordes redondeados
  minWidth: 200, //asegura un ancho minimo
  alignItems: 'center' ///centrar

  },
  botontexto: {
   color: 'purple',
   fontSize: 18 
  },
  header: {// todo este centrado
    position:  'absolute',
    top: 100,
 //   alignItems:  'center',
    width: '100%', //para centrar tmb
    paddingHorizontal: 20
  }
  

})