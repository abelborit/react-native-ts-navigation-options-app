import React from 'react';
import {Text, View} from 'react-native';
import {styles, themeColors} from '../theme/appTheme';
import {TouchableIcon} from '../components/TouchableIcon';

const Icons = [
  {
    iconName: 'airplane-outline',
    iconSize: 60,
    iconColor: themeColors.secondary,
  },
  {iconName: 'apps-outline'},
  {iconName: 'bag-handle-outline'},
  {iconName: 'at-circle-outline'},
  {iconName: 'balloon-outline'},
  {iconName: 'bonfire-outline'},
  {iconName: 'car-sport-outline'},
  {iconName: 'card-outline'},
];

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.globalTitle}>Iconos</Text>

      <Text>
        {Icons.map(iconElement => (
          <TouchableIcon
            key={iconElement.iconName}
            iconName={iconElement.iconName}
            iconSize={iconElement.iconSize}
            iconColor={iconElement.iconColor}
          />
        ))}
      </Text>
    </View>
  );
};
