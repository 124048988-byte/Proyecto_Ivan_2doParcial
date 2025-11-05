import { Text, StyleSheet, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function Pantalla2() {
  const [correo, setCorreo] = useState('');
  const [ConfirmarCorreo, setConfirmarCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  return (
    <View style={styles.Pantalla2}>
      <Text style={styles.Titulo2}>Registro</Text>

      <TouchableOpacity onPress={() => alert('¡Notificaciones abiertas!')} style={styles.campana}>
        <Text style={styles.emoji}>🔔</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="✍️ Escribe tu correo:"
        value={correo}
        onChangeText={setCorreo}
      />

      <TextInput
        style={styles.input}
        placeholder="✍️ Confirma tu correo:"
        value={ConfirmarCorreo}
        onChangeText={setConfirmarCorreo}
      />

      <TextInput
        style={styles.input}
        placeholder="📞 Escribe tu teléfono:"
        value={telefono}
        onChangeText={setTelefono}
      />

      
      <TouchableOpacity
        style={styles.Botones}
        onPress={() => Alert.alert('Aviso', 'Aún no está disponible esa funcionalidad')}
      >
        <Text>Registro</Text>
      </TouchableOpacity>
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
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100,
  },

  Botones2: 
  {
    backgroundColor: '#89bef3ce',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderColor: 'white',
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: 
  {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#89bef3ce',
    marginVertical: 20,
  },

  emoji: 
  {
    position: 'absolute',
    top: 40,
    right: 70,
    fontSize: 25,
  },

  campana: 
  {
    position: 'absolute',
    top: 20,
    right: 20,
  },

  Botones: 
  {
    backgroundColor: '#89bef3ce',
    borderRadius: 13,
    paddingVertical: 25,
    paddingHorizontal: 100,
    borderColor: 'white',
    marginVertical: 35,
  },
});
