import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
const Tarjeta = require('../assets/RecursosProyectoIvan/TartjetaBBVAproyecto.png');

export default function Pantalla1() {
  return (
    <View style={styles.Pantalla1}>
      <Text style={styles.Titulo}>Ahorra+App</Text>
      <Image source={Tarjeta} style={styles.imagenes} resizeMode="contain" />

      <TouchableOpacity style={styles.Botones} onPress={() => console.log('Presionado')}>
        <Text>Registro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Botones} onPress={() => console.log('Presionado')}>
        <Text>Registro</Text>
      </TouchableOpacity>


     
    </View>
    
    

  );
}


const styles = StyleSheet.create({
  Pantalla1:
  {
    backgroundColor: '#337fcaff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  
  Titulo: 
  {
    color: 'white',         // color del texto
    fontSize: 28,           // tamaño del texto
    fontWeight: 'bold',     // opcional: lo hace más grueso
    textAlign: 'center',    // centra el texto
    marginTop: 100,         // margen superior
  },

  imagenes:
  {
    width: 300,
    height: 300,
    marginBottom: 12,
    marginVertical: 20  ,
  },

  Botones:
  {
    backgroundColor: '#89bef3ce',
    borderRadius: 30,
    paddingVertical: 15,           // alto del botón
    paddingHorizontal: 40,           //Ancho del botón
    borderColor: 'white',         // color del borde
    marginVertical: 10,        // margen vertical entre botones
  },


});
