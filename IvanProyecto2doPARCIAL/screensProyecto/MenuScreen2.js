/* Zona de componentes */

import { Text, StyleSheet, View, Button} from 'react-native' /* Con esto me sirve para crear un nuevo componente: rncs */
import React, { useState } from 'react' 
import Pantalla1 from './Pantalla1'
import Pantalla2 from './Pantalla2'
import CargaScreen from './CargaScreen'
//import BotonesScreen from './BotonesScreen'
//import InputAlertScreen from './InputAlertScreen'
//import ImageBackgroundScreen from './ImageBackgroundScreen'



import { ImageBackground } from 'react-native-web'





export default function menuScreen()  { /* Esta linea era para crear componentes, pero ahora creamos una funcion */
 
    const [screen, setScreen] = useState('Menu');     /* lo del "menu" significa que por default siempre me abra la pantalla "Menu"  */
    switch(screen)
    {
        case 'Pantalla1':
            return <Pantalla1/>

       case 'Pantalla2':
            return <Pantalla2/>

         case 'CargaScreen':
            return <CargaScreen/>

        /*case 'image_background':
            return <ImageBackgroundScreen/>  */
            

        case 'Menu':
            default:
                    return (
                        <View style={styles.EstiloBotones}>
                            <Text>Menu de practicas</Text>
                            <Button color= "orange" title='Pract:pantalla1' onPress={()=> setScreen('Pantalla1')}/>
                            <Button color= "orange" title='Pract:pantalla2' onPress={()=> setScreen('Pantalla2')}/>
                            <Button color= "orange" title='Pract:CargaScreen' onPress={()=> setScreen('CargaScreen')}/>
                            <Button color= "orange" title='Pract:pantalla2' onPress={()=> setScreen('')}/>
                           {/*  <Button color="orange" title='Pract:Buttons'  onPress={()=> setScreen('botones')}/>
                            <Button color="orange" title='Pract:Input y Alert'  onPress={()=> setScreen('input_alert')}/>
                            <Button color="orange" title='Pract:Image Background'  onPress={()=> setScreen('image_background')}/> */}
                            
                        </View>
                    )

    }
    
  
}



/* Zona de estilos */
const styles = StyleSheet.create({
    EstiloBotones:
    {
      color: "#67a3e0ff",       //Nos cambia de color 
      fontSize: 30,               //Nos cambia el tamaño de la letra
      fontFamily: 'Times New Roman', //Nos cambia el tipo de letra
      fontWeight: 'bold',            //Nos pone la letra en negritas 
      fontStyle: 'italic',            //Nos ayuda a inclinar poquito el texto, como ponerlo tipo 'cursivo'
      justifyContent:'center',
      alignItems:'center'
    } , 


});  