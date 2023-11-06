import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {StackNavigator} from './StackNavigator';
import {Platform} from 'react-native';
import {TopTabsNavigator} from './TopTabsNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab1Screen} from '../screens/Tab1Screen';
import {themeColors} from '../theme/appTheme';

/* este es el componente que se retornará y es quien tendrá el condicional para mostrar un aspecto u otro según el sistema operativo de iOS o Android */
export const BottomTabsNavigator = () => {
  return Platform.OS === 'ios' ? (
    <BottomTabsNavigatorIOS />
  ) : (
    <BottomTabsNavigatorANDROID />
  );
};

/* IOS */
const BottomTabIOS = createBottomTabNavigator();

/* cada tap se mantiene activo. Cuando se carga nuestro screen donde están estos tabs no carga todos los tabs de manera simultanea, son diferidos o aplazados, es decir que aplica como un lazy loading que carga bajo demanda y la primera vez que se renderiza recién se mantiene activo, un ejemplo que en un tap1 haya un useEffect sin dependencias y si se va al tap2 y se vuelve al tap1 entonces ese useEffect ya no se dispara de nuevo. Los otros tap2 y tab3 si tienen useEffect no se disparan hasta que se entre a ese tap2 o tap 3 */
const BottomTabsNavigatorIOS = () => {
  /* para colocar el ícono se pueden hacer de varias formas pero las usuales son colocar en una configuración global en el <Tab.Navigator></Tab.Navigator> o sino hacerlo por cada <Tab.Screen/> */
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}
      /* Las propiedades 'route' y 'navigation' siguen estando dentro de 'screenOptions'. */
      screenOptions={propsScreen => ({
        tabBarActiveTintColor: themeColors.secondary,
        tabBarStyle: {
          borderTopColor: themeColors.secondary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
        },
        tabBarIcon: propsTabBar => {
          let iconName: string = '';

          switch (propsScreen.route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline';
              break;

            case 'TopTabsNavigator':
              iconName = 'basketball-outline';
              break;

            case 'StackNavigator':
              iconName = 'bookmarks-outline';
              break;
          }
          return (
            <Icon
              name={iconName}
              size={propsTabBar.size || 24}
              color={propsTabBar.color}
            />
          );
        },
      })}>
      {/* hacerlo por cada <Tab.Screen/> puede ser más verboso porque hay mucho código, también se puede hacer en una función aparte y luego mandarla a llamar en tabBarIcon pero igual es hacer más configuración */}
      {/* <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
          tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        }}
        component={Tab1Screen}
      /> */}
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="TopTabsNavigator"
        options={{title: 'TopTabsNavigator'}}
        component={TopTabsNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{title: 'StackNavigator'}}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};

/* ANDROID */
const BottomTabANDROID = createMaterialBottomTabNavigator();

const BottomTabsNavigatorANDROID = () => {
  /* para colocar el ícono se pueden hacer de varias formas pero las usuales son colocar en una configuración global en el <Tab.Navigator></Tab.Navigator> o sino hacerlo por cada <Tab.Screen/> */
  return (
    <BottomTabANDROID.Navigator
      inactiveColor="#fff"
      activeColor="#0ab79d"
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: themeColors.secondary,
      }}
      screenOptions={propsScreen => ({
        tabBarIcon: propsTabBar => {
          let iconName: string = '';

          switch (propsScreen.route.name) {
            case 'Tab1Screen':
              iconName = 'bandage-outline';
              break;

            case 'TopTabsNavigator':
              iconName = 'basketball-outline';
              break;

            case 'StackNavigator':
              iconName = 'bookmarks-outline';
              break;
          }
          return <Icon name={iconName} size={24} color={propsTabBar.color} />;
        },
      })}>
      <BottomTabANDROID.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <BottomTabANDROID.Screen
        name="TopTabsNavigator"
        options={{title: 'TopTabsNavigator'}}
        component={TopTabsNavigator}
      />
      <BottomTabANDROID.Screen
        name="StackNavigator"
        options={{title: 'StackNavigator'}}
        component={StackNavigator}
      />
    </BottomTabANDROID.Navigator>
  );
};
