import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Transferencias2() {
  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitulo}>Transferir</Text>
        <TouchableOpacity>
          <Ionicons name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        
        <View style={styles.cartera}>
          <Text style={styles.carteraTitulo}>Tu dinero</Text>
          <Text style={styles.cuenta}>• 213</Text>
          <Text style={styles.dinero}>$ 100.00</Text>
          <Text style={styles.subtitulo}>Saldo disponible</Text>
        </View>

  
        <Text style={styles.destinoTitulo}>Destino</Text>

        <TouchableOpacity style={styles.opcion}>
          <Ionicons name="add-circle-outline" size={20} color="#0061E0" />
          <Text style={styles.opcionTexto}>Nuevo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcion}>
          <Ionicons name="card-outline" size={20} color="#0061E0" />
          <Text style={styles.opcionTexto}>Mis cuentas y tarjetas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.opcion}>
          <Ionicons name="heart-outline" size={20} color="#0061E0" />
          <Text style={styles.opcionTexto}>Contactos guardados</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0061E0',
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
    backgroundColor: '#0052D4',
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
  },
  carteraTitulo: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  cuenta: {
    color: 'white',
    fontSize: 13,
    marginTop: 2,
  },
  dinero: {
    fontSize: 28,
    fontWeight: '700',
    color: 'white',
    marginTop: 8,
  },
  subtitulo: {
    color: 'white',
    fontSize: 13,
  },
  destinoTitulo: {
    color: '#003087',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 15,
  },
  opcion: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F8FF',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 12,
  },
  opcionTexto: {
    marginLeft: 10,
    fontSize: 16,
    color: '#0061E0',
    fontWeight: '500',
  },

});
