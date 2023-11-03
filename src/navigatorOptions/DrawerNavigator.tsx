import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens/SettingsScreen';
import {
  useWindowDimensions,
  Image,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {styles} from '../theme/appTheme';

/* si quisiera dirigirme a otra pantalla desde este menú lateral no se podría usar el useNavigation() porque como no estamos dentro de un objeto del navigation, es decir, no se está trabajando igual que con el StackNavigator que se crea un padre y en sus hijos ya se puede usar el useNavigation, ya que con el DrawerNavigator recién se está creando al renderizarse pero se puede usar una de sus propiedades que es drawerContent={} que es una función que tiene navigation props que nos ayuda a trabajarlo de forma similar. Y como nos menciona la documentación: "Tenga en cuenta que no puede utilizar el hook useNavigation dentro del drawerContent ya que useNavigation solo está disponible dentro de las pantallas. Obtienes un navigation prop para tu drawerContent que puedes usar en su lugar." */

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const {width, height} = useWindowDimensions();

  return (
    /* drawerContent es una función que recibe props de tipo DrawerContentComponentProps y retorna un JSX (elemento de react) para renderizar como contenido del drawer, como por ejemplo items de navegación */
    /* swipeEdgeWidth Permite definir a qué distancia del borde de la vista de contenido debe activarse el gesto de deslizar */
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
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

/* crear un nuevo functional component para utilizar en el drawerContent y pasarle las navigation props de tipo DrawerContentComponentProps */
const CustomDrawerContent = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar Container */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Options Menu Container */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuOptions}
          onPress={() => navigation.navigate('StackNavigator')}>
          <Text style={styles.menuOptionsText}>Navigation Stack</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuOptions}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuOptionsText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
