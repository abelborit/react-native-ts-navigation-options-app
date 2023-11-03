import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

/* se crea una interface que se extienda de StackScreenProps pero este me pide dos argumentos StackScreenProps<un objeto llamado, especificar las propiedades que va a tener ese objeto> "StackScreenProps<ParamList, RouteName>". Se extiende porque este componente puede ser que reciba otra información aparte de lo que ya le da StackScreenProps, como por ejemplo un id, name, address, email, etc... */
interface Page1ScreenProps extends StackScreenProps<any, any> {}

/* al tener como padre al StackNavigator.tsx y este ser un stack entonces ya se le envían varias propiedades que aquí las vamos a desestructurar */
export const Page1Screen = ({navigation}: Page1ScreenProps) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.globalTitle}>Page1Screen</Text>

      <Button
        title="Ir a página 2"
        onPress={() => navigation.navigate('Page2Screen')}
      />

      <Text>Navegar con argumentos</Text>
      <View style={styles.globalBtnContainer}>
        <TouchableOpacity
          // style={[styles.globalBtn, {backgroundColor: '#1d5b69'}]} // forma 1
          style={{...styles.globalBtn, backgroundColor: '#1d5b69'}} // forma 2
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Pedro',
            })
          }>
          <Text style={styles.globalBtnText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.globalBtn, {backgroundColor: '#e47c7c'}]}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Maria',
              address: 'Dirección',
            })
          }>
          <Text style={styles.globalBtnText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
