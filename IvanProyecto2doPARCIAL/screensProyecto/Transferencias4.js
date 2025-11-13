import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Transferencias4() {
  const [monto, setMonto] = useState('');
  const [visible, setVisible] = useState(false);

  const abrirModal = () => setVisible(true);
  const cerrarModal = () => setVisible(false);

  const confirmar = () => {
    console.log(`Transferencia por $${parseFloat(monto).toFixed(2)} iniciada.`);
    cerrarModal();
  };

  return (
    <View style={styles.area}>
      <View style={styles.cabecera}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>

        <Text style={styles.titulo}>Transferir</Text>

        <TouchableOpacity>
          <Ionicons name="close-circle" size={28} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.contenedor}>
        <View style={styles.tarjeta}>
          <Text style={styles.tituloTarjeta}>Tu dinero</Text>

          <View style={styles.fila}>
            <Text style={styles.textoSec}>. 213</Text>

            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.moneda}>$100.00</Text>
              <Text style={styles.textoSec}>Saldo disponible</Text>
            </View>
          </View>
        </View>

        <View style={styles.tarjeta}>
          <View style={styles.fila}>
            <Text style={styles.tituloTarjeta}>Destino</Text>
            <Text style={styles.textoSec}>Modificar</Text>
          </View>

          <Text style={styles.nombre}>SEBASTIAN</Text>
          <Text style={styles.textoSec}>AhoSebas</Text>
          <Text style={styles.textoSec}>888 666 222 111</Text>
          <Text style={styles.textoSec}>Ahorra+app</Text>
        </View>

        <Text style={styles.tituloSeccion}>Monto</Text>

        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            placeholder="0.00"
            keyboardType="numeric"
            value={monto}
            onChangeText={setMonto}
          />
          <Text style={styles.simbolo}>$</Text>
        </View>

        <TouchableOpacity 
          style={styles.boton}
          onPress={abrirModal}
        >
          <Text style={styles.textoBoton}>Continuar</Text>
        </TouchableOpacity>
      </View>

      <Modal transparent visible={visible} animationType="fade" onRequestClose={cerrarModal}>
        <TouchableOpacity style={styles.fondo} onPress={cerrarModal}>
          <View style={styles.modal}>
            <Text style={styles.modalTitulo}>Monto a transferir</Text>

            <Text style={styles.modalMonto}>
              $ {parseFloat(monto ).toFixed(2)}
            </Text>

            <Text style={styles.modalComision}>Comisión $ 0.00</Text>

            <TouchableOpacity style={styles.modalBoton} onPress={confirmar}>
              <Text style={styles.modalTexto}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  area: { 
    flex: 1, 
    backgroundColor: '#D3D3D3' 
  },

  cabecera: {
    backgroundColor: '#0061E0',
    paddingTop: 25,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  titulo: { 
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold' 
  },

  contenedor: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -15,
  },

  tarjeta: {
    backgroundColor: '#0061E0',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
  },

  tituloTarjeta: { 
    color: 'white', 
    fontSize: 16, 
    fontWeight: 'bold', 
    marginBottom: 10 
  },

  fila: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center' 
  },

  textoSec: { 
    color: 'rgba(255,255,255,0.8)', 
    fontSize: 14 
  },

  moneda: { 
    color: 'white', 
    fontSize: 28, 
    fontWeight: 'bold' 
  },

  nombre: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 5 
  },

  tituloSeccion: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#333', 
    marginBottom: 10 
  },

  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 20,
    height: 55,
  },

  input: { 
    flex: 1, 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#000', 
    textAlign: 'right' 
  },

  simbolo: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#555' 
  },

  boton: {
    backgroundColor: '#4A8DFF',
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical: 15,
  },

  textoBoton: { 
    fontSize: 18, 
    color: 'white', 
    fontWeight: 'bold' 
  },

  fondo: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.6)', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },

  modal: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
  },

  modalTitulo: { 
    fontSize: 18, 
    fontWeight: '600', 
    color: '#555', 
    marginBottom: 10 
  },

  modalMonto: { 
    fontSize: 36, 
    fontWeight: 'bold', 
    color: '#0061E0', 
    marginVertical: 15 
  },

  modalComision: { 
    fontSize: 16, 
    color: '#888', 
    marginBottom: 25 
  },

  modalBoton: {
    backgroundColor: '#4A8DFF',
    borderRadius: 12,
    paddingVertical: 15,
    width: '100%',
    alignItems: 'center',
  },

  modalTexto: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
});
