import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TransferenciaExitosa() {
  return (
    <View style={styles.container}>
    

      <View style={styles.header}>
        <Text style={styles.headerText}>Transferir</Text>
            <TouchableOpacity  onPress={() => Alert.alert('Proximamente..')}>
        <Ionicons name="close-circle-outline" size={24} color="white" />
          </TouchableOpacity>
      </View>
    

      <View style={styles.content}>
        <View style={styles.circle}>
          <Ionicons name="checkmark" size={60} color="#00C853" />
        </View>

        <Text style={styles.title}>Transferencia{"\n"}exitosa</Text>

        <Text style={styles.subtitle}>Monto Transferido</Text>
        <Text style={styles.amount}>$ 100.00</Text>

        <TouchableOpacity style={styles.primaryButton} onPress={() => Alert.alert('Proximamente..')}>
          <Text style={styles.primaryButtonText}>Compartir Comprobante</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={() => Alert.alert('Proximamente..')}>
          <Text style={styles.secondaryButtonText}>Menú principal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0061E0',
    alignItems: 'center',
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingTop: 45,
    paddingBottom: 25,
  },

  headerText: {
    color: 'white',
    fontSize: 16,
  },

  content: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    alignItems: 'center',
    paddingTop: 40,
  },

  circle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#EAF5FF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
    marginBottom: 25,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 10,
  },

  subtitle: {
    color: '#555',
    fontSize: 14,
    marginBottom: 5,
  },

  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 40,
  },

  primaryButton: {
    backgroundColor: '#0061E0',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
  },

  primaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },

  secondaryButton: {
    backgroundColor: '#F1F1F1',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderWidth: 1,
    borderColor: '#ccc',
  },

  secondaryButtonText: {
    color: '#555',
    fontSize: 16,
    fontWeight: '500',
  },
});
