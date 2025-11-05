import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CerrarScreen() {
  return (
    <View style={styles.overlay}>
      <View style={styles.modalContent}>

        <Text style={styles.cerrarTxt}>Cerrar </Text>  <Text style={styles.iconos}>✖️ </Text>

        <Text style={styles.icon}>⚠️</Text>

        <Text style={styles.title}>¿Quieres salir?</Text>

        <Text style={styles.subtitle}>
          No se guardarán los datos de esta operación.
        </Text>

        <View style={styles.btnSalir}>
          <Text style={styles.txtSalir}>Salir</Text>
        </View>

        <View style={styles.btnVolver}>
          <Text style={styles.txtVolver}>Volver</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "78%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 25,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  iconos: {
    alignSelf: "flex-end",
    fontSize: 40,
    marginBottom: 10,
  },
  cerrarTxt: {
    alignSelf: "center",
    color: "#000",
    fontSize: 30,
    marginBottom: 5,
  },
  icon: {
    fontSize: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000",
  },
  subtitle: {
    fontSize: 13,
    textAlign: "center",
    color: "#6B7280",
    marginBottom: 25,
  },
  btnSalir: {
    width: "90%",
    backgroundColor: "#002C8A",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  txtSalir: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  btnVolver: {
    width: "90%",
    backgroundColor: "#E5E7EB",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  txtVolver: {
    color: "#374151",
    fontSize: 16,
    fontWeight: "bold",
  },
});