/* Zona de componentes */

import { Text, StyleSheet, View, Button} from 'react-native' /* Con esto me sirve para crear un nuevo componente: rncs */
import React, { useState } from 'react' 
import Pantalla1 from './Pantalla1'
import Pantalla2 from './Pantalla2'
import CargaScreen from './CargaScreen'
import Transferencias from './Transferencias';
import Transferencias2 from './Transferencias2';
import Transferencias3 from './Transferencias3';
import Transferencias4 from './Transferencias4';
import Transferencias5 from './Transferencias5';
import TransferenciaExitosa from './TransferenciaExitosa';
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
        
        case 'Transferencias':
              return <Transferencias />;
            case 'Transferencias2':
              return <Transferencias2 />;
            case 'Transferencias3':
              return <Transferencias3 />;
            case 'Transferencias4':
              return <Transferencias4 />;
            case 'Transferencias5':
              return <Transferencias5 />;
            case 'TransferenciaExitosa':
              return <TransferenciaExitosa />;
            case 'Contador':
            

        case 'Menu':
            default:
                    return (
                        <View style={styles.EstiloBotones}>
                            <Text>Menu de practicas</Text>
                            <Button color= "orange" title='Pract:pantalla1' onPress={()=> setScreen('Pantalla1')}/>
                            <Button color= "orange" title='Pract:pantalla2' onPress={()=> setScreen('Pantalla2')}/>
                            <Button color= "orange" title='Pract:CargaScreen' onPress={()=> setScreen('CargaScreen')}/>
                            <Button color= "orange" title='Pract:pantalla2' onPress={()=> setScreen('Pantalla2')}/>
                            <Button title='Transferencias' onPress={() => setScreen('Transferencias')} />
                            <Button title='Transferencias2' onPress={() => setScreen('Transferencias2')} />
                            <Button title='Transferencias 3' onPress={() => setScreen('Transferencias3')} />
                            <Button title='Transferencias 4' onPress={() => setScreen('Transferencias4')} />
                            <Button title='Transferencias 5' onPress={() => setScreen('Transferencias5')} />
                            <Button title='Transferencia Exitosa' onPress={() => setScreen('TransferenciaExitosa')} />
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
      alignItems:'center',
      flex: 1,
    gap: 10,
    } , 


});  