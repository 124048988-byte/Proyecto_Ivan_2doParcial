import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react';

import { AntDesign } from '@expo/vector-icons';



export default function Pantalla2() {

const [correo, setCorreo] = useState('');
const [ConfirmarCorreo, setConfirmarCorreo] = useState('');
const [telefono, setTelefono] = useState('');
return (
    <View style={styles.Pantalla2}>
      <Text style={styles.Titulo2}>Registro</Text>


        <TextInput
            style={styles.input}
            placeholder="✍️Escribe tu correo:"
            value={correo}
            onChangeText={setCorreo}
        />

        <TextInput
            style={styles.input}
            placeholder="✍️Confirma tu correo:"
            value={ConfirmarCorreo}
            onChangeText={setConfirmarCorreo}
        />

        <TextInput
            style={styles.input}
            placeholder="📞Escribe tu teléfono:"
            value={telefono}
            onChangeText={setTelefono}
        />
     
    </View>
    
    

  );
}


const styles = StyleSheet.create({
  Pantalla2:
  {
    backgroundColor: '#2a6db0ff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  
  Titulo2: 
  {
    color: 'white',         // color del texto
    fontSize: 28,           // tamaño del texto
    fontWeight: 'bold',     // opcional: lo hace más grueso
    textAlign: 'center',    // centra el texto
    marginTop: 100,         // margen superior
  },


  Botones2:
  {
    backgroundColor: '#89bef3ce',
    borderRadius: 10,
    paddingVertical: 15,           // alto del botón
    paddingHorizontal: 40,           //Ancho del botón
    borderColor: 'white',         // color del borde
    marginVertical: 10,        // margen vertical entre botones
    flexDirection: 'row',   //  Ícono + texto en fila
    alignItems: 'center',   //  Centra verticalmente
    justifyContent: 'center', //  Centra todo horizontalmente
  },

  input:
{
  borderWidth: 1,
  borderColor: '#aaa',
  borderRadius: 5,
  width: '80%',
  padding: 10,
  marginBottom: 15,
},


});
