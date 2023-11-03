import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Page1Screen} from '../screens/Page1Screen';
import {Page2Screen} from '../screens/Page2Screen';
import {Page3Screen} from '../screens/Page3Screen';
import {PersonScreen} from '../screens/PersonScreen';

export type RootStackParams = {
  /* colocar las rutas que vamos a tener */
  Page1Screen: undefined; // undefined significa que la ruta no tiene parámetros
  Page2Screen: undefined;
  Page3Screen: undefined;
  PersonScreen: {id: number; name: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    /* initialRouteName="Page2Screen" para empezar en una página que nosotros escojamos las primeras veces que se entra a la aplicación */
    /* screenOptions={{}} para personalizar varias cosas */
    <Stack.Navigator
      // initialRouteName="Page2Screen"
      screenOptions={{
        headerStyle: {
          elevation: 0, // quitar la linea abajo del header en Android
          shadowColor: 'transparent', // quitar la linea abajo del header en iOS
          backgroundColor: '#ddd',
        },
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      {/* options={{title: 'Página 1'}} colocar el texto que aparecerá en el header */}
      <Stack.Screen
        name="Page1Screen"
        options={{title: 'Página 1'}}
        component={Page1Screen}
      />
      <Stack.Screen
        name="Page2Screen"
        options={{title: 'Página 2'}}
        component={Page2Screen}
      />
      <Stack.Screen
        name="Page3Screen"
        options={{title: 'Página 3'}}
        component={Page3Screen}
      />
      <Stack.Screen name="PersonScreen" component={PersonScreen} />
    </Stack.Navigator>
  );
};
