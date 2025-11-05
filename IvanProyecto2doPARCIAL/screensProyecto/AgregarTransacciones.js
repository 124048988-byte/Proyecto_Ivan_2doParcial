import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AgregarTransacciones({ navigation }) {
  const [concepto, setConcepto] = useState('');
  const [monto, setMonto] = useState('');
  const [tipoTransaccion, setTipoTransaccion] = useState('egreso');
  const [transacciones, setTransacciones] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleAgregar = () => {
    if (!concepto.trim() || !monto.trim()) {
      Alert.alert('Error', 'Por favor completa todos los campos');
      return;
    }

    const nuevaTransaccion = {
      id: Date.now(),
      concepto,
      monto,
      tipo: tipoTransaccion,
      fecha: new Date()
    };

    const ordenadas = [nuevaTransaccion, ...transacciones].sort(
      (a, b) => b.fecha - a.fecha
    );

    setTransacciones(ordenadas);
    setConcepto('');
    setMonto('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitulo}>Transacciones</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        
        {transacciones.length > 0 && (
          <View style={styles.lista}>
            {transacciones.map((item) => (
              <View key={item.id} style={styles.item}>
                <View>
                  <Text style={styles.itemConcepto}>{item.concepto}</Text>
                  <Text style={styles.itemFecha}>{item.fecha.toLocaleDateString()}</Text>
                </View>
                <Text style={[styles.itemMonto, { color: item.tipo === 'ingreso' ? '#00C292' : '#E53935' }]}>
                  {item.tipo === 'ingreso' ? '+' : '-'}${item.monto}
                </Text>
              </View>
            ))}
          </View>
        )}

        <TouchableOpacity
          style={styles.botonMostrarFormulario}
          onPress={() => setMostrarFormulario(!mostrarFormulario)}
        >
          <Ionicons name={mostrarFormulario ? "close" : "add-circle"} size={22} color="#fff" />
          <Text style={styles.botonMostrarFormularioText}>
            {mostrarFormulario ? "Cerrar" : "Agregar Transacción"}
          </Text>
        </TouchableOpacity>

        {mostrarFormulario && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Nueva Transacción</Text>

            <View style={styles.typeSelector}>
              <TouchableOpacity
                style={[styles.typeButton, tipoTransaccion === 'ingreso' && styles.typeButtonActive]}
                onPress={() => setTipoTransaccion('ingreso')}
              >
                <Ionicons name="arrow-down-circle" size={20} color={tipoTransaccion === 'ingreso' ? '#fff' : '#0061E0'} />
                <Text style={[styles.typeButtonText, tipoTransaccion === 'ingreso' && styles.typeButtonTextActive]}>
                  Ingreso
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.typeButton, tipoTransaccion === 'egreso' && styles.typeButtonActive]}
                onPress={() => setTipoTransaccion('egreso')}
              >
                <Ionicons name="arrow-up-circle" size={20} color={tipoTransaccion === 'egreso' ? '#fff' : '#0061E0'} />
                <Text style={[styles.typeButtonText, tipoTransaccion === 'egreso' && styles.typeButtonTextActive]}>
                  Egreso
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Concepto</Text>
              <TextInput
                style={styles.input}
                placeholder="Ej: Compra en tienda"
                placeholderTextColor="#999"
                value={concepto}
                onChangeText={setConcepto}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Monto</Text>
              <View style={styles.inputWithPrefix}>
                <Text style={styles.prefix}>$</Text>
                <TextInput
                  style={styles.inputWithPrefixText}
                  placeholder="0.00"
                  placeholderTextColor="#999"
                  keyboardType="decimal-pad"
                  value={monto}
                  onChangeText={setMonto}
                />
              </View>
            </View>

            <TouchableOpacity style={styles.agregarButton} onPress={handleAgregar}>
              <Ionicons name="checkmark-circle" size={20} color="#fff" />
              <Text style={styles.agregarButtonText}>Agregar Transacción</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
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
  lista: {
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#F5F5F5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemConcepto: {
    fontSize: 14,
    fontWeight: '600',
  },
  itemFecha: {
    fontSize: 12,
    color: '#777',
  },
  itemMonto: {
    fontSize: 16,
    fontWeight: '700',
  },
  botonMostrarFormulario: {
    flexDirection: 'row',
    backgroundColor: '#0061E0',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 15,
  },
  botonMostrarFormularioText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginBottom: 20,
  },
  typeSelector: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 25,
  },
  typeButton: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#E7F0FF',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  typeButtonActive: {
    backgroundColor: '#0061E0',
    borderColor: '#0061E0',
  },
  typeButtonText: {
    color: '#0061E0',
    fontWeight: '600',
    fontSize: 14,
  },
  typeButtonTextActive: {
    color: '#fff',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    color: '#000',
  },
  inputWithPrefix: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  prefix: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0061E0',
    marginRight: 5,
  },
  inputWithPrefixText: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: '#000',
  },
  agregarButton: {
    flexDirection: 'row',
    backgroundColor: '#00C292',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 10,
  },
  agregarButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
