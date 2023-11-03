import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigatorOptions/StackNavigator';

/* tipar el navigator */
// type RootStackParamList = {
//   /* colocar el nombre de las rutas a usar */
//   Page3Screen: undefined; // undefined significa que la ruta no tiene parámetros
// };

/* se puede usar NativeStackScreenProps para Stack Navigator nativo y con eso se mantiene el tipado y las opciones a sus métodos de navigator.<opciones> */
// type UseNavigationProps = StackNavigationProp<RootStackParamList>;

export const Page2Screen = () => {
  /* en vez de usar el paso de props se usará el useNavigation() propio de react-navigation donde navigator (nombre colocado por conveniencia pero puede ser otro nombre X) este tiene exactamente lo mismo como si se pasara por props */
  /* dentro de lo posible sería conveniente usar el paso por props porque al ser un hook entonces ya tiene cierta lógica un poco más robusta y posiblemente poco más pesada dentro que al final retorna lo mismo como si se pasara por props (recordar que los hooks de react igualmente son extremadamente rápidos pero si ya se tiene por props entonces sería más eficiente usarlo desde ahí) */

  /* colocar así de frente bota un warning de que el tipo del argumento en "onPress={() => navigator.navigate('Page3Screen')}" no es válido pero la aplicación funciona normal. Al useNavigation se podría colocar como tipo <any> pero así no cumpliría la idea de typescript pero es una solución rápida. Otra solución es colocarlo como menciona en https://reactnavigation.org/docs/typescript/#type-checking-screens que sería tipar el navigator y luego usar el NativeStackScreenProps */
  // const navigator = useNavigation(); // forma directa
  // const navigator = useNavigation<any>(); // usando el any pero rompe la idea principal de usar typescript
  // const navigator = useNavigation<StackNavigationProp<any>>(); // para mantener el autocompletado pero sigue con any
  // const navigator = useNavigation<StackNavigationProp<RootStackParamList>>(); // forma un poco más directa
  // const navigator = useNavigation<UseNavigationProps>();
  const navigator = useNavigation<StackNavigationProp<RootStackParams>>(); // forma un poco más directa usando el RootStackParams desde StackNavigator.tsx

  useEffect(() => {
    navigator.setOptions({
      title: 'Editado desde componente',
      // headerBackTitle: 'Retroceder', // solo funciona con iOS. Si se pasa un string vacio "" entonces tomará el nombre que tenga el botón de regreso y según el idioma del celular
    });
  }, [navigator]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.globalTitle}>Page2Screen</Text>

      <Button
        title="Ir a página 3"
        onPress={() => navigator.navigate('Page3Screen')}
      />
    </View>
  );
};
