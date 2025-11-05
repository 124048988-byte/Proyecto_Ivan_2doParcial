import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CuentasScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.back}>⬅️</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Cuentas</Text>
        <TouchableOpacity>
          <Text style={styles.menu}>☰</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.body}>
        // Saldo Disponible 
        <View style={styles.card}>
          <Text style={styles.monto}>$ 100.00</Text>
          <Text style={styles.subtext}>Saldo disponible</Text>
          <Text style={styles.link}>Ver ingresos y gastos</Text>
        </View>

        //Apartados 
        <View style={styles.card}>
          <Text style={styles.subtitulo}>Total de apartados</Text>
          <Text style={styles.monto2}>$ 20,000.00</Text>
          <Text style={styles.link}>Ver apartados</Text>
        </View>

        //Opciones
        <View style={styles.rowButtons}>
          <TouchableOpacity style={styles.btnBox}>
            <Text style={styles.emoji}>🔁</Text>
            <Text style={styles.btnText}>Transferir</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnBox}>
            <Text style={styles.emoji}>📲</Text>
            <Text style={styles.btnText}>Recargas</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnBox}>
            <Text style={styles.emoji}>⋯</Text>
            <Text style={styles.btnText}>Ver más</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>ÚLTIMOS MOVIMIENTOS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1E3A8A" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  back: { fontSize: 26, color: "#fff" },
  menu: { fontSize: 26, color: "#fff" },
  headerTitle: { 
  color: "#fff", 
  fontSize: 20, 
  fontWeight: "bold" 
},
  body: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  card: {
    backgroundColor: "#E5F0FF",
    padding: 20,
    borderRadius: 14,
    marginBottom: 15,
  },
  monto: { 
  fontSize: 28, 
  fontWeight: "bold", 
  color: "#000" 
},
  monto2: { 
  fontSize: 26, 
  fontWeight: "bold", 
  color: "#000" 
},
  subtext: { 
  color: "#475569", 
  marginBottom: 5 
},
  subtitulo: { 
  color: "#475569", 
  fontSize: 16, 
  marginBottom: 5 
},
  link: { 
  color: "#1E3A8A", 
  fontWeight: "bold", 
  marginTop: 5 
},
  rowButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 15,
  },
  btnBox: {
    backgroundColor: "#E5F0FF",
    width: "30%",
    paddingVertical: 15,
    borderRadius: 14,
    alignItems: "center",
  },
  emoji: { 
    fontSize: 26 
  },
  btnText: { 
  marginTop: 5, 
  fontSize: 12, 
  fontWeight: "bold", 
  color: "#333" },
  sectionTitle: { 
  color: "#64748B", 
  fontWeight: "bold", 
  marginTop: 10 },
});