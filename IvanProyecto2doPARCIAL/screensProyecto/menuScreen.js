

import { Text, StyleSheet, View, Button} from 'react-native' 
import React, { useState } from 'react' 

import MenuLateralScreen from './MenuLateralScreen'
import ConfiguracionScreen from './ConfiguracionScreen'
import CargaScreen from './CargaScreen'







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

        case 'menu':
            default:
                    return (
                        <View style={styles.EstiloBotones}>
                            <Text>Menu de practicas</Text>
                            <Button  title='Menu Lateral' onPress={()=> setScreen('MenuLateralScreen')}/>
                            <Button  title='Configuraciones' onPress={()=> setScreen('ConfiguracionScreen')}/>
                            <Button  title='CargaScreen' onPress={()=> setScreen('CargaScreen')}/>
                        </View>
                    )

    }
    
  
}




const styles = StyleSheet.create({
    EstiloBotones:
    {
      color: "#67a3e0ff",     
      alignItems: 'center',  
      fontSize: 30,               
      fontFamily: 'Times New Roman', 
      fontWeight: 'bold',            
      fontStyle: 'italic',            
      justifyContent:'center',
      flex: 1,
    
    } , 


});  