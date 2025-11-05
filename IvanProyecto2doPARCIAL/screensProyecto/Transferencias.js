import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Transferencias() {
  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} color="white" />
        <Text style={styles.headerTitulo}>Transferir</Text>
        <Ionicons name="close" size={24} color="white" />
      </View>

   
      <View style={styles.content}>
        <View style={styles.cartera}>
          <Text style={styles.carteraTitulo}>Tu dinero</Text>
          <Text style={styles.dinero}>$100.00</Text>
          <Text style={styles.subtitulo}>Saldo disponible</Text>
          <Text style={styles.cuenta}>• 213</Text>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2a6db0ff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitulo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  cartera: {
    backgroundColor: '#E7F0FF',
    borderRadius: 10,
    padding: 20,
    marginVertical: 40,
  },
  carteraTitulo: {
    color: '#0061E0',
    fontSize: 16,
    fontWeight: '600',
  },
  dinero: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    marginVertical: 5,
  },
  subtitulo: {
    color: '#555',
    fontSize: 12,
  },
  cuenta: {
    color: '#333',
    fontSize: 12,
    marginTop: 2,
  },
  button: {
    backgroundColor: '#0061E0',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
