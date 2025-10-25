import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView} from "react-native";

export default function MenuLateralScreen({navigation}) {
    return(
         <ScrollView style={styles.container}>
            <Text style={styles.nombre}> Luis Fernando </Text>
            <Text style={styles.subtitulo}> Perfil </Text>

            <Text style={styles.menuOpcion}> Configuración</Text>
            <Text style={styles.menuOpcion}> Seguridad y Privacidad</Text>
            <Text style={styles.menuOpcion}> Token Móvil</Text>
            <Text style={styles.menuOpcion}> Sostenibilidad</Text>
            <Text style={styles.menuOpcion}> Emergencias</Text>
            <Text style={styles.menuOpcion}> Zona de Cobro</Text>
            <Text style={styles.menuOpcion}> Puntos y Promociones</Text>
            <Text style={styles.menuOpcion}> Consulta retiro sin tarjeta</Text>
            <Text style={styles.menuOpcion}> Sucuarsales y cajeros</Text>
            <Text style={styles.menuOpcion}> Aclaraciones</Text>
            <Text style={styles.menuOpcion}> Línea Ahorra+App</Text>
            <Text style={styles.menuOpcion}> Acerca de Ahorra+App</Text>

            <Text style={[styles.menuOpcion, {marginTop: 20, color: '#FFCDD2'}]}>Salir</Text>     
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1E40AF',
        flex: 1,
        padding: 20,
    },
    nombre:{
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    },
    subtitulo:{
        color: '#E0E7FF',
        marginBottom: 20,
    },
    option: {
        color: '#fff',
        fontSize: 16,
        marginVertical: 6,
    },
});