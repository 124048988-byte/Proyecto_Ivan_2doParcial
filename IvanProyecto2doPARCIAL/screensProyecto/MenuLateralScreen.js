import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function MenuLateralScreen() {
    return(
         <ScrollView style={styles.container}>
            <Text style={styles.nombre}>LUIS FERNANDO</Text>
            <Text style={styles.subtitulo}>Perfil</Text>

            <Text style={styles.menuOpcion}>Configuración</Text>
            <Text style={styles.menuOpcion}>Seguridad y Privacidad</Text>
            <Text style={styles.menuOpcion}>Token Móvil</Text>
            <Text style={styles.menuOpcion}>Sostenibilidad</Text>
            <Text style={styles.menuOpcion}>Emergencias</Text>
            <Text style={styles.menuOpcion}>Zona de Cobro</Text>
            <Text style={styles.menuOpcion}>Puntos y Promociones</Text>
            <Text style={styles.menuOpcion}>Consulta retiro sin tarjeta</Text>
            <Text style={styles.menuOpcion}>Sucursales y cajeros</Text>
            <Text style={styles.menuOpcion}>Aclaraciones</Text>
            <Text style={styles.menuOpcion}>Línea Ahorra+App</Text>
            <Text style={styles.menuOpcion}>Acerca de Ahorra+App</Text>

            <Text style={[styles.menuOpcion, styles.salir]}>Salir</Text>     
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#1E40AF',
    width: '65%',        // Solo ocupa 3/4 de la pantalla
    height: '95%',
    padding: 25,
    borderTopRightRadius: 35,
    borderBottomRightRadius: 35,
    alignSelf: 'flex-end',
    },

    nombre:{
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6,
        marginTop: 10
    },
    subtitulo:{
        color: '#E0E7FF',
        marginBottom: 25,
        fontSize: 15,
    },
    menuOpcion: {
        color: '#fff',
        fontSize: 16,
        marginVertical: 10,
    },
    salir: {
        marginTop: 25,
        color: '#FFCDD2',
        fontWeight: '600'
    }
});
