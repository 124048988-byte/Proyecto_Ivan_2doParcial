///interfaz ya quedo. no le he echo boton, solo es codigo completo. 
"use client"
import { useState } from "react"
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from "react-native"

export default function Destacacreen() {
  const [activeTab, setActiveTab] = useState("destacados")

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>inicio</Text>
        <View style={styles.menuIcon}>
          <TouchableOpacity onPress={() => Alert.alert('Proximamente..')}>
              <Text style={styles.menuLines}>≡</Text>
          </TouchableOpacity>
        
        </View>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "destacados" && styles.activeTab]}
          onPress={() => setActiveTab("destacados")}
        >
          <Text style={[styles.tabText, activeTab === "destacados" && styles.activeTabText]}>Destacados</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "productos" && styles.activeTab]}
          onPress={() => setActiveTab("productos")}
        >
          <Text style={[styles.tabText, activeTab === "productos" && styles.activeTabText]}>Tus productos</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.label}>Principales productos</Text>
          <Text style={styles.amount}>$ 100.00</Text>
          <Text style={styles.description}>Saldo disponible</Text>
          <TouchableOpacity style={styles.link} onPress={() => Alert.alert('Proximamente..')}>
            <Text style={styles.linkText}>Ver últimos movimientos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link} onPress={() => Alert.alert('Proximamente..')}>
            <Text style={styles.linkText}>Ver ingresos y gastos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}onPress={() => Alert.alert('Proximamente..')}>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => Alert.alert('Proximamente..')}>
          <Text style={styles.navIcon}>📦</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => Alert.alert('Proximamente..')}>
          <Text style={styles.navIcon}>👤</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => Alert.alert('Proximamente..')}>
          <Text style={styles.navIcon}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => Alert.alert('Proximamente..')}>
          <Text style={styles.navIcon}>≡</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#2C3EFA",
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  menuIcon: {
    padding: 8,
  },
  menuLines: {
    fontSize: 24,
    color: "white",
  },
  tabContainer: {
    backgroundColor: "white",
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  tab: {
    marginRight: 15,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
  },
  activeTab: {
    backgroundColor: "#2C3EFA",
  },
  tabText: {
    fontSize: 14,
    color: "#666",
  },
  activeTabText: {
    color: "white",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#999",
    marginBottom: 10,
  },
  amount: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2C3EFA",
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: "#999",
    marginBottom: 20,
  },
  link: {
    marginVertical: 10,
    paddingVertical: 10,
  },
  linkText: {
    color: "#2C3EFA",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  bottomNav: {
    backgroundColor: "#2C3EFA",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    paddingBottom: 20,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navIcon: {
    fontSize: 20,
  },
})