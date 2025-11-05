import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NuevoDestino() {
  const [account, setAccount] = useState('');

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.headerTitulo}>Nuevo destino</Text>
          <TouchableOpacity style={styles.closeButton}>
            <Ionicons name="close-circle" size={28} color="#E0E0E0" />
          </TouchableOpacity>
        </View>

        <Text style={styles.instruction}>
          Ingresa el número de cuenta, CLABE, tarjeta o celular del beneficiario
        </Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Cuenta, CLABE, tarjeta..."
            placeholderTextColor="#888"
            value={account}
            onChangeText={setAccount}
            keyboardType="numeric"
          />
          <Ionicons name="person-outline" size={24} color="#555" />
        </View>

        <View style={styles.infoContainer}>
          <Ionicons 
            name="information-circle-outline" 
            size={20} 
            color="#555" 
            style={{ marginTop: 2 }}
          />
          <Text style={styles.infoText}>
            Puedes hacer transferencias a cuentas o tarjetas de otros bancos
          </Text>
        </View>

        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.otherButton}>
          <Text style={styles.otherButtonText}>Elegir otro destino</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#0061E0', 
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20, 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20, 
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitulo: {
    color: '#111', 
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
  },
  instruction: {
    fontSize: 15,
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0061E0', 
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  textInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#000',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 25,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: '#555',
    marginLeft: 8,
    lineHeight: 20,
  },
  searchButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
  },
  searchButtonText: {
    fontSize: 16,
    color: '#aaa',
    fontWeight: '500',
  },
  otherButton: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  otherButtonText: {
    fontSize: 16,
    color: '#0061E0', 
    fontWeight: '500',
  },
});