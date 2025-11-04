import { Text, StyleSheet, View, Button} from 'react-native' 
import React, { useState } from 'react' 
import MenuLateralScreen from './MenuLateralScreen'
import ConfiguracionScreen from './ConfiguracionScreen'
import CargaScreen from './CargaScreen'
import Transferencias from './Transferencias'



export default function menuScreen()  { 
 
    const [screen, setScreen] = useState('menu');     
    switch(screen)
    {
        case 'MenuLateralScreen':
            return <MenuLateralScreen/>

        case 'ConfiguracionScreen':
            return <ConfiguracionScreen/>
       
        case 'CargaScreen':
            return <CargaScreen/>
        
        case 'Transferencias':
            return <Transferencias/>

        case 'menu':
            default:
                    return (
                        <View style={styles.EstiloBotones}>
                            <Text>Menu de pantallas</Text>
                            <Button  title='Menu Lateral' onPress={()=> setScreen('MenuLateralScreen')}/>
                            <Button  title='Configuraciones' onPress={()=> setScreen('ConfiguracionScreen')}/>
                            <Button  title='CargaScreen' onPress={()=> setScreen('CargaScreen')}/>
                            <Button  title='Transferencias' onPress={()=> setScreen('Transferencias')}/>
                        </View>
                    )

    }
    
  
}




const styles = StyleSheet.create({
    EstiloBotones:
    {
      color: "#2a6db0ff",     
      alignItems: 'center',  
      gap: 10,
      fontSize: 30,               
      fontFamily: 'Times New Roman', 
      fontWeight: 'bold',            
      fontStyle: 'italic',            
      justifyContent:'center',
      flex: 1,
    
    } , 


});  