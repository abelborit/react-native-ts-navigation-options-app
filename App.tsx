import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigatorOptions/StackNavigator';
// import {DrawerNavigatorBasic} from './src/navigatorOptions/DrawerNavigatorBasic';
import {DrawerNavigator} from './src/navigatorOptions/DrawerNavigator';
// import { BottomTabsNavigator } from './src/navigatorOptions/BottomTabsNavigator';
import {Provider as PaperProvider} from 'react-native-paper';
import {DefaultTheme} from './src/theme/appTheme';

const theme = {
  ...DefaultTheme,
};

export const App = () => {
  return (
    /* El PaperProvidercomponente proporciona el tema a todos los componentes del marco. También actúa como un portal hacia los componentes que deben representarse en el nivel superior */
    /* Si tiene otro proveedor (como Redux), envuélvalo afuera PaperProvider para que el contexto esté disponible para los componentes renderizados dentro de un Modal desde la biblioteca */
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {/* se comenta StackNavigator ya que esos componentes no van a ser los principales para mostrar */}
        {/* <StackNavigator /> */}
        {/* <DrawerNavigatorBasic /> */}
        <DrawerNavigator />

        {/* no se coloca aquí el BottomTabsNavigator porque solo me aparecerían los tabs y no el menú lateral del DrawerNavigator pero yo quiero que se mantenga ese menú lateral y que los tabs sean un screen aparte */}
        {/* <BottomTabsNavigator/> */}
      </NavigationContainer>
    </PaperProvider>
  );
};
