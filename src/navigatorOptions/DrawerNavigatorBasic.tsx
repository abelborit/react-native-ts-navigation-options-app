import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerNavigatorBasic = () => {
  const {width, height} = useWindowDimensions();

  return (
    /* swipeEdgeWidth Permite definir a qué distancia del borde de la vista de contenido debe activarse el gesto de deslizar. */
    <Drawer.Navigator
      screenOptions={{
        swipeEdgeWidth: 150,
        drawerType: width > height ? 'permanent' : 'front', // Menú modo horizontal
        headerShown: width > height ? false : true, // Oculta la hamburguesa
      }}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{title: 'Settings'}}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
