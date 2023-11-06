import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {themeColors} from '../theme/appTheme';

const TopTab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  /* al trabajar con Android se mira normal pero al trabajar con iOS puede ser que choque con la parte del Notch pero eso sería entre comillas algo bueno ya que nos quiere decir que tenemos control sobre esa parte de la pantalla. Aquí se podría aplicar el componente <SafeAreaView>{código...}</SafeAreaView> pero en este caso se usará el hook porque eso da más control y no me aplica el SafeAreaView en todos lados sino en partes donde yo lo necesite y aquí se usará solo para el top. Si se ajusta de forma automática entonces no sería necesario usarlo */
  const insets = useSafeAreaInsets();

  return (
    <TopTab.Navigator
      style={{
        paddingTop: insets.top,
      }}
      sceneContainerStyle={{
        backgroundColor: '#fff',
      }}
      screenOptions={propsScreen => ({
        tabBarActiveTintColor: themeColors.secondary,
        tabBarPressColor: themeColors.primary,
        lazy: true, // carga lazy para cada tab
        lazyPlaceholder: () => (
          // sería como un loader pero como es rápido en cargar entonces que este componente sea liviano
          <Text
            style={{
              color: 'red',
            }}>
            "Loading..."
          </Text>
        ),
        tabBarIndicatorStyle: {
          backgroundColor: themeColors.secondary,
        },
        tabBarStyle: {
          shadowColor: 'transparent', // iOs
          elevation: 0, // Android
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: 'bold',
        },
        tabBarIconStyle: {
          flexDirection: 'row',
          justifyContent: 'center',
        },
        tabBarShowIcon: true,
        tabBarIcon: propsTabBar => {
          let iconName: string = '';

          switch (propsScreen.route.name) {
            case 'ChatScreen':
              iconName = 'chatbox-ellipses-outline';
              break;

            case 'ContactsScreen':
              iconName = 'people-outline';
              break;

            case 'AlbumsScreen':
              iconName = 'folder-outline';
              break;
          }
          // return <Text style={{color: propsTabBar.color}}>{iconName}</Text>;
          return <Icon name={iconName} size={20} color={propsTabBar.color} />;
        },
      })}>
      <TopTab.Screen
        name="ChatScreen"
        options={{title: 'Chat'}}
        component={ChatScreen}
      />
      <TopTab.Screen
        name="ContactsScreen"
        options={{title: 'Contacts'}}
        component={ContactsScreen}
      />
      <TopTab.Screen
        name="AlbumsScreen"
        options={{title: 'Albums'}}
        component={AlbumsScreen}
      />
    </TopTab.Navigator>
  );
};
