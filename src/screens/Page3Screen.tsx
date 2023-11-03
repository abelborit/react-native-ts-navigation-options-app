import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Page3ScreenProps extends StackScreenProps<any, any> {}

export const Page3Screen = ({navigation}: Page3ScreenProps) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.globalTitle}>Page3Screen</Text>

      {/* pop() para regresar a la página anterior */}
      <Button title="Regresar a página 2" onPress={() => navigation.pop()} />

      {/* popToTop() para ir a la página principal o a la página que está por encima de todo */}
      <Button title="Ir al HOME" onPress={() => navigation.popToTop()} />
    </View>
  );
};
