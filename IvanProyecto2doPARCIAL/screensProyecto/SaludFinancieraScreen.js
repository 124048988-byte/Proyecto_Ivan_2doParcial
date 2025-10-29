import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SaludFinancieraScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Salud Financiera</Text>
      </View>

      <View style={styles.body}>
        <Text style={styles.producto}>Producto (2 de 3)</Text>
        <Text style={styles.periodo}>10 de Septiembre 2024 - 2025</Text>

        <View style={styles.boxInfo}>
          <Text style={styles.ingresos}>Ingresos: $0.00</Text>
          <Text style={styles.gastos}>Gastos: $0.00</Text>
        </View>

        <View style={styles.linea}></View>

        <Text style={styles.textoVacio}>No hay gastos que mostrar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E3A8A", 
  },
  header: {
    backgroundColor: "#1E3A8A",
    paddingVertical: 35,
    alignItems: "center",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -10,
    padding: 30,
    alignItems: "center",
  },
  producto: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginTop: 10,
    marginBottom: 5,
  },
  periodo: {
    fontSize: 14,
    color: "#64748B",
    marginBottom: 25,
  },
  boxInfo: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  ingresos: {
    fontSize: 16,
    color: "#15803D", 
    fontWeight: "bold",
    marginBottom: 8,
  },
  gastos: {
    fontSize: 16,
    color: "#B91C1C", 
    fontWeight: "bold",
  },
  linea: {
    width: "85%",
    height: 1,
    backgroundColor: "#CBD5E1",
    marginVertical: 20,
  },
  textoVacio: {
    fontSize: 16,
    color: "#1E3A8A",
    textAlign: "center",
    fontStyle: "italic",
  },
});
