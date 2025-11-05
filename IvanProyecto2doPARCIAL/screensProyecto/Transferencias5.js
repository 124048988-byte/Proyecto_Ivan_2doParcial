import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CodigoSeguridad() {
  const [codigo, setCodigo] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Código de seguridad</Text>
        <Ionicons name="close-circle-outline" size={24} color="white" />
      </View>

      <View style={styles.iconCircle}>
        <Ionicons name="time-outline" size={50} color="#0061E0" />
      </View>

      <Text style={styles.title}>Código de seguridad</Text>

      <TextInput
        style={styles.input}
        value={codigo}
        onChangeText={setCodigo}
        placeholderTextColor="#000"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Proximamente..')}>
        <Text style={styles.buttonText}>Aceptar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0061E0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
  },

  header: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    alignItems: 'center',
  },

  headerText: {
    color: 'white',
    fontSize: 16,
    textAlign: "center"
  },

  iconCircle: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 15,
    marginBottom: 30,
  },

  title: {
    color: 'white',
    fontSize: 24,
    textAlign: "center",
    fontWeight: 'bold',
    marginBottom: 30,
  },

  input: {
    backgroundColor: '#5CA8FF',
    borderRadius: 8,
    width: '80%',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    paddingVertical: 10,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#004BB5',
  },

  button: {
    backgroundColor: '#5CA8FF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: '#004BB5',
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
