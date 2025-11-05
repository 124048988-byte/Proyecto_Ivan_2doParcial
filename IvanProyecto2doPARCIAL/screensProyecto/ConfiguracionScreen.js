import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function ConfiguracionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Encabezado azul */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Configuración</Text>
      </View>

      {/* Contenido desplazable */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity style={styles.boton} onPress={() => Alert.alert('Proximamente..')}>
          <Text style={styles.textoBoton}>🔔 Notificaciones</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => Alert.alert('Proximamente..')}>
          <Text style={styles.textoBoton}>🤚 Límites de operaciones</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => Alert.alert('Proximamente..')}>
          <Text style={styles.textoBoton}>👁️ Mostrar y ocultar productos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boton} onPress={() => Alert.alert('Proximamente..')}>
          <Text style={styles.textoBoton}>📱 Pago con célula</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: { //superior
    backgroundColor: "#1E40AF", 
    paddingVertical: 20,
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  scrollContent: {
    padding: 20,
  },
  boton: {
    backgroundColor: "#82b5f8ff",
    paddingVertical: 18,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "flex-start",
    paddingHorizontal: 15,
  },
  textoBoton: {
    fontSize: 16,
    color: "#1E3A8A",
    fontWeight: "500",
  },
});
