import { Text, StyleSheet, View, Button} from 'react-native' 
import React, { useState } from 'react' 
import MenuLateralScreen from './MenuLateralScreen'
import ConfiguracionScreen from './ConfiguracionScreen'
import CargaScreen from './CargaScreen'
import Transferencias from './Transferencias'
import PrincipalScreen from './PrincipalScreen'
import { ImageBackground } from 'react-native-web'



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


         case 'Principal':
            return <PrincipalScreen/>

        case 'menu':
            default:
                    return (
                        <View style={styles.EstiloBotones}>

                            <Text>Menu de pantallas</Text>
                            <Button  title='Menu Lateral' onPress={()=> setScreen('MenuLateralScreen')}/>
                            <Button  title='Configuraciones' onPress={()=> setScreen('ConfiguracionScreen')}/>
                            <Button  title='CargaScreen' onPress={()=> setScreen('CargaScreen')}/>
                            <Button  title='Transferencias' onPress={()=> setScreen('Transferencias')}/>
                            <Text>Menu de practicas</Text>
                            <Button color= "orange" title='Pract:MenuLateral' onPress={()=> setScreen('MenuLateral')}/>
                            <Button color="orange" title='Pract:Buttons'  onPress={()=> setScreen('botones')}/>
                            <Button color="orange" title='Pract:Input y Alert'  onPress={()=> setScreen('input_alert')}/>
                            <Button color="orange" title='Pract:Image Background'  onPress={()=> setScreen('image_background')}/>
                            <Button color="orange" title='Pract:Slapsh Screen'  onPress={()=> setScreen('slapsh_screen')}/>
                            <Button color="orange" title='Pract:Scroll view'  onPress={()=> setScreen('scroll_view')}/>
                            <Button color="orange" title='Pract:Activity Indicator'  onPress={()=> setScreen('activity_indicator')}/>
                            <Button color="orange" title='Pract:Flat list'  onPress={()=> setScreen('flat_list')}/>
                            <Button color="orange" title='Pract:Modal'  onPress={()=> setScreen('modal')}/>
                            <Button color="orange" title='Pract:Bottom sheet'  onPress={()=> setScreen('bottom_sheet')}/>
                            <Button color="orange" title='Pract:Carga'  onPress={()=> setScreen('Carga')}/>
                            <Button color="orange" title='Principal'  onPress={()=> setScreen('Principal')}/>

                        </View>
                    )

    }
    
  
}




const styles = StyleSheet.create({
    EstiloBotones:
    {
      color: "#67a3e0ff",     
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