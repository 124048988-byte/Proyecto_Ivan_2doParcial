import { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function PrincipalScreen() {
  const [items, setItems] = useState([
    { label: 'Token Móvil', source: require('../assets/RecursosProyectoIvan/Token.png') },
    { label: 'Operaciones QR', source: require('../assets/RecursosProyectoIvan/qr.jpg') },
    { label: 'Emergencias', source: require('../assets/RecursosProyectoIvan/sos.png') }
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appName}>Ahorra+ App</Text>
        <View style={styles.menuIcon}>
          <Text style={styles.menuLines}>≡</Text>
        </View>
        <Text style={styles.greeting}>Hola, Luis Fernando</Text>
        <Text style={styles.changeUser}>Cambiar de usuario</Text>
      </View>

      <TouchableOpacity style={styles.biometricsButton}>
        <Text style={styles.biometricsText}>Entrar con biometría</Text>
      </TouchableOpacity>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {items.map((item, index) => (
          <View key={index} style={styles.iconBox}>
            <Image source={item.source} style={styles.image} />
            <Text style={styles.iconLabel}>{item.label}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2C3EFA',
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  header: {
    marginBottom: 40,
    width: '100%',
    paddingHorizontal: 20,
    position: 'relative'
  },
  appName: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  menuIcon: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  menuLines: {
    fontSize: 30,
    color: 'white'
  },
  greeting: {
    fontSize: 22,
    color: 'white',
    marginTop: 20
  },
  changeUser: {
    fontSize: 16,
    color: 'white',
    textDecorationLine: 'underline',
    marginTop: 5
  },
  biometricsButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
    minWidth: 200
  },
  biometricsText: {
    color: '#6C2DC7',
    fontSize: 18
  },
  scroll: {
    flexGrow: 0
  },
  scrollContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    alignItems: 'center',
    width: 100
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 10,
    resizeMode: 'contain'
  },
  iconLabel: {
    fontSize: 14,
    color: '#6C2DC7',
    textAlign: 'center'
  }
});