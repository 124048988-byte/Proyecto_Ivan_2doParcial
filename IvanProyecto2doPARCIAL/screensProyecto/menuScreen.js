import { Text, StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import ConfiguracionScreen from './ConfiguracionScreen';
import CargaScreen from './CargaScreen';
import Transferencias from './Transferencias';
import Transferencias2 from './Transferencias2';
import Transferencias3 from './Transferencias3';
import Transferencias4 from './Transferencias4';
import Transferencias5 from './Transferencias5';
import TransferenciaExitosa from './TransferenciaExitosa';
import PrincipalScreen from './PrincipalScreen';
import { ImageBackground } from 'react-native-web';

export default function menuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'ConfiguracionScreen':
      return <ConfiguracionScreen />;

    case 'CargaScreen':
      return <CargaScreen />;

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

    case 'Principal':
      return <PrincipalScreen />;

    default:
      return (
        <View style={styles.EstiloBotones}>
          <Text>Menu de pantallas</Text>
          <Button title='Configuraciones' onPress={() => setScreen('ConfiguracionScreen')} />
          <Button title='CargaScreen' onPress={() => setScreen('CargaScreen')} />
          <Button title='Transferencias' onPress={() => setScreen('Transferencias')} />
          <Button title='Transferencias2' onPress={() => setScreen('Transferencias2')} />
          <Button title='Transferencias 3' onPress={() => setScreen('Transferencias3')} />
          <Button title='Transferencias 4' onPress={() => setScreen('Transferencias4')} />
          <Button title='Transferencias 5' onPress={() => setScreen('Transferencias5')} />
          <Button title='Transferencia Exitosa' onPress={() => setScreen('TransferenciaExitosa')} />
          <Button color="orange" title='Pract:Buttons' onPress={() => setScreen('botones')} />
          <Button color="orange" title='Pract:Input y Alert' onPress={() => setScreen('input_alert')} />
          <Button color="orange" title='Pract:Image Background' onPress={() => setScreen('image_background')} />
          <Button color="orange" title='Pract:Slapsh Screen' onPress={() => setScreen('slapsh_screen')} />
          <Button color="orange" title='Pract:Scroll view' onPress={() => setScreen('scroll_view')} />
          <Button color="orange" title='Pract:Activity Indicator' onPress={() => setScreen('activity_indicator')} />
          <Button color="orange" title='Pract:Flat list' onPress={() => setScreen('flat_list')} />
          <Button color="orange" title='Pract:Modal' onPress={() => setScreen('modal')} />
          <Button color="orange" title='Pract:Bottom sheet' onPress={() => setScreen('bottom_sheet')} />
          <Button color="orange" title='Pract:Carga' onPress={() => setScreen('Carga')} />
          <Button color="orange" title='Principal' onPress={() => setScreen('Principal')} />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  EstiloBotones: {
    color: "#2a6db0ff",
    alignItems: 'center',
    gap: 10,
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    justifyContent: 'center',
    flex: 1,
  },
});