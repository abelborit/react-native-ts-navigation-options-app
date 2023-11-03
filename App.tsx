import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigatorOptions/StackNavigator';
// import {DrawerNavigatorBasic} from './src/navigatorOptions/DrawerNavigatorBasic';
import {DrawerNavigator} from './src/navigatorOptions/DrawerNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* se comenta StackNavigator ya que esos componentes no van a ser los principales para mostrar */}
      {/* <StackNavigator /> */}
      {/* <DrawerNavigatorBasic /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};
