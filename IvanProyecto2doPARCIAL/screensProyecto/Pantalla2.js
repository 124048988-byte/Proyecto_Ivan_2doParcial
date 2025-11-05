import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function App() {
  const [pantalla, setPantalla] = useState('registro'); // registro | error | exito
  const [correo, setCorreo] = useState('');
  const [confirmarCorreo, setConfirmarCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  const validar = () => {
    if (correo === '' || confirmarCorreo === '' || telefono === '') {
      setPantalla('error');
    } else {
      setPantalla('exito');
    }
  };

  // ===================== PANTALLA REGISTRO =====================
  if (pantalla === 'registro') {
    return (
      <View style={styles.Pantalla2}>
        <Text style={styles.Titulo2}>Registro</Text>

        <TouchableOpacity onPress={() => alert('¡Notificaciones abiertas!')} style={styles.campana}>
          <Text style={styles.emoji}>🔔</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="✍️Escribe tu correo:"
          value={correo}
          onChangeText={setCorreo}
        />

        <TextInput
          style={styles.input}
          placeholder="✍️Confirma tu correo:"
          value={confirmarCorreo}
          onChangeText={setConfirmarCorreo}
        />

        <TextInput
          style={styles.input}
          placeholder="📞Escribe tu teléfono:"
          value={telefono}
          onChangeText={setTelefono}
        />

        <TouchableOpacity style={styles.Botones} onPress={validar}>
          <Text>Registro</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // ===================== PANTALLA ERROR =====================
  if (pantalla === 'error') {
    return (
      <View style={styles.containerError}>
        <Text style={styles.tituloVolver}>Regresar</Text>
        <Image source={require('./assets/tache.png')} style={styles.icono} />
        <View style={styles.cajaTexto}>
          <Text style={styles.texto}>¡Faltan datos!</Text>
        </View>
        <TouchableOpacity style={styles.botonRojo} onPress={() => setPantalla('registro')}>
          <Text style={styles.textoBoton}>Regresar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // ===================== PANTALLA ÉXITO =====================
  if (pantalla === 'exito') {
    return (
      <View style={styles.containerExito}>
        <Text style={styles.tituloVolver}>ÉXITO</Text>
        <Image source={require('./assets/palomita.png')} style={styles.icono} />
        <View style={styles.cajaTexto}>
          <Text style={styles.texto}>¡Aprobada!</Text>
        </View>

        <TouchableOpacity style={styles.botonAzul} onPress={() => setPantalla('registro')}>
          <Text style={styles.textoBlanco}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botonGris} onPress={() => setPantalla('registro')}>
          <Text style={styles.textoGris}>Menu principal</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // ==== Estilos Pantalla Registro ====
  Pantalla2: {
    backgroundColor: '#2a6db0ff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  Titulo2: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    width: '80%',
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#89bef3ce',
    marginVertical: 20,
  },
  emoji: {
    position: 'absolute',
    top: 40,
    right: 70,
    fontSize: 25,
  },
  campana: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  Botones: {
    backgroundColor: '#89bef3ce',
    borderRadius: 13,
    paddingVertical: 25,
    paddingHorizontal: 100,
    borderColor: 'white',
    marginVertical: 35,
  },

  // ==== Estilos Pantalla Error ====
  containerError: {
    backgroundColor: '#2d2025',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloVolver: {
    color: 'white',
    fontSize: 18,
    position: 'absolute',
    top: 40,
    left: 20,
  },
  icono: {
    width: 120,
    height: 120,
    marginBottom: 40,
  },
  cajaTexto: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 60,
  },
  texto: {
    color: 'navy',
    fontSize: 22,
    fontWeight: 'bold',
  },
  botonRojo: {
    backgroundColor: 'darkred',
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  textoBoton: {
    color: 'white',
    fontSize: 18,
  },

  // ==== Estilos Pantalla Éxito ====
  containerExito: {
    backgroundColor: '#1d63e8',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonAzul: {
    backgroundColor: '#004de8',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 60,
    marginBottom: 20,
  },
  botonGris: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  textoBlanco: {
    color: 'white',
    fontSize: 18,
  },
  textoGris: {
    color: 'gray',
    fontSize: 18,
  },
});
