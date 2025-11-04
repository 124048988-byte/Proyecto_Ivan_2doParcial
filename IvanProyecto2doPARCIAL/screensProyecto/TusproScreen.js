//ya quedo, no se le ha echo boton, solo es codigo completo. 
"use client"
import { useState } from "react"
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from "react-native"

export default function Tusprocreen() {
  const [activeTab, setActiveTab] = useState("destacados")
  const [tasks, setTasks] = useState([
    { id: "001", label: "000latv213", date: "20/10/2024", amount: "₨" },
    { id: "002", label: "000zatv213", date: "16/10/2024", amount: "₨" },
  ])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>inicio</Text>
        <View style={styles.menuIcon}>
          <Text style={styles.menuLines}>≡</Text>
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
        {/* Card de Cuentas */}
        <View style={styles.card}>
          <Text style={styles.label}>Cuentas</Text>
          <Text style={styles.amount}>$ 100.00</Text>
          <Text style={styles.description}>Saldo disponible</Text>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Ver ingresos y gastos</Text>
          </TouchableOpacity>
        </View>

        {/* Sección de Tarifas */}
        <View style={styles.taskSection}>
          <Text style={styles.sectionTitle}>Tajetas</Text>
          <Text style={styles.dateLabel}>20/10/2024</Text>
          {tasks.map((task) => (
            <View key={task.id} style={styles.taskItem}>
              <View style={styles.taskLeft}>
                <View style={styles.taskIcon}>
                  <Text style={styles.taskIconText}>💳</Text>
                </View>
                <View>
                  <Text style={styles.taskLabel}>{task.label}</Text>
                  <Text style={styles.taskDate}>{task.date}</Text>
                </View>
              </View>
              <Text style={styles.taskAmount}>{task.amount}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>↔</Text>
          <Text style={styles.actionLabel}>Transferir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>📋</Text>
          <Text style={styles.actionLabel}>Recargas y paquetes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>⋯</Text>
          <Text style={styles.actionLabel}>Ver mas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📦</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
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
  taskSection: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  dateLabel: {
    fontSize: 12,
    color: "#999",
    marginBottom: 15,
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  taskLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  taskIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e0e7ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  taskIconText: {
    fontSize: 20,
  },
  taskLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  taskDate: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },
  taskAmount: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#999",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
  actionButton: {
    alignItems: "center",
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: 5,
  },
  actionLabel: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    maxWidth: 70,
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