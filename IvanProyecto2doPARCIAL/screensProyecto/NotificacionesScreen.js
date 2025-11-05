import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function NotificacionesScreen() {
  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notificaciones</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.emoji}>🔍</Text>
            <Text style={styles.iconText}>Buscar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.emoji}>📬</Text>
            <Text style={styles.iconText}>Leídos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.emoji}>⚙️</Text>
            <Text style={styles.iconText}>Configurar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Cuerpo */}
      <View style={styles.body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.sectionTitle}>27 septiembre</Text>

          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.emojiRow}>📧</Text>
              <Text style={styles.compraText}>Compra</Text>
              <Text style={styles.monto}>$1,490.00</Text>
            </View>
            <Text style={styles.detalle}>*1332</Text>
            <Text style={styles.movimiento}>Movimientos de dinero</Text>
          </View>

          <Text style={styles.sectionTitle}>26 septiembre</Text>

          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.emojiRow}>📧</Text>
              <Text style={styles.compraText}>Compra</Text>
              <Text style={styles.monto}>$72.00</Text>
            </View>
            <Text style={styles.detalle}>*1332</Text>
            <Text style={styles.movimiento}>Movimientos de dinero</Text>
          </View>
        </ScrollView>
      </View>

      {/* Barra inferior */}
      <View style={styles.footer}>
        <Text style={styles.footerEmoji}>🏠</Text>
        <Text style={styles.footerEmoji}>📄</Text>
        <Text style={styles.footerEmoji}>✉️</Text>
        <Text style={styles.footerEmoji}>☰</Text>
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
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
  },
  iconButton: {
    alignItems: "center",
  },
  emoji: {
    fontSize: 24,
  },
  iconText: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 4,
  },
  body: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },
  sectionTitle: {
    fontWeight: "bold",
    color: "#475569",
    marginVertical: 10,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 15,
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  emojiRow: {
    fontSize: 22,
    marginRight: 10,
  },
  compraText: {
    color: "#1E3A8A",
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
  },
  monto: {
    color: "#000",
    fontWeight: "600",
  },
  detalle: {
    color: "#64748B",
    fontSize: 13,
    marginTop: 5,
  },
  movimiento: {
    color: "#94A3B8",
    fontSize: 12,
    marginTop: 2,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1E3A8A",
    paddingVertical: 15,
  },
  footerEmoji: {
    fontSize: 24,
    color: "#FFFFFF",
  },
});