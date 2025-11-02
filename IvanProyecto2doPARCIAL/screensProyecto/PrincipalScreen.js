import { useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, Image } from 'react-native'

export default function MioScreen () {
  const [items, setItems] = useState ([
    {type: 'image', source: require ('../assets/Recursos/4.jpg')},
    {type: 'image', source: require ('../assets/Recursos/4.jpg')},
    {type: 'image', source: require ('../assets/Recursos/4.jpg')}
  ])

  return (
    <View style={styles.container}>
    <ScrollView 
     style = {styles.Scroll }
     contentContainerStyle = {styles.scrollContainer}
     horizontal = {true}
     showsHorizontalScrollIndicator= {true}
     persistentScrollbar= {true}
     >
     {items.map((item, index) => (
     <View key= {index} style= {styles.box}>
      {item.type === 'image' ? (
       <Image source={item.source} style={styles.image} /> 
      ): (
        <Text style = {styles.boxText} >{item.content}</Text>
      )}    
     </View>
     ))} 

    </ScrollView>

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
    justifyContent: 'left',
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
    alignSelf:'flex-start',
    paddingVertical: 60, // alto
    paddingHorizontal: 0, // ancho

  },
     texto3: {
    color: 'white',
    marginBottom: 20,
    textAlign: 'flex-start',   
    marginVertical: -80, 
    alignSelf:'left',
    paddingVertical: 0, // alto
    paddingHorizontal: 10, // ancho

  },

  boton: {
  position :  'absolute',
  bottom: 300,
  alignSelf:  'center',
  backgroundColor: 'white',
  paddingVertical: 20, // alto
  paddingHorizontal: 60, // ancho
  borderRadius: 10, // bordes redondeados
  minWidth: 200, //asegura un ancho minimo
  alignItems: 'center', ///centrar
  //marginTop: -30,

  },
  botontexto: {
   color: 'purple',
   fontSize: 18 ,
   
 
  },
  header: {// todo este centrado
    position:  'absolute',
    top: 100,
 //   alignItems:  'center',
    width: '100%', //para centrar tmb
    paddingHorizontal: 20
  },
  box: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal:10,
    borderRadius:10
  },
  boxText:{
    color: 'purple',
    fontSize:  18, 
    
  },

  scroll: {
   // position: 'absolute',
    top: 250,
    height : 100,
    width:  '100%',
    paddingHorizontal:10,
    backgroundColor:  'white',
    zIndex:1
    marginTop: 2500,
  },
  scrollContainer:{ //centra y limita el scroll
    alignItems:'center',
    justifyContent: 'center',
  },
  image: {
width: 100,
height: 100,
borderRadius: 10,
resizeMode: 'cover',

  }

})