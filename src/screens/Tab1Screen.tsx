import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';
import {styles, themeColors} from '../theme/appTheme';

export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.globalTitle}>Iconos</Text>

      <Text>
        <Icon name="airplane-outline" size={60} color={themeColors.secondary} />

        <Icon name="apps-outline" size={60} color={themeColors.secondary} />

        <Icon
          name="bag-handle-outline"
          size={60}
          color={themeColors.secondary}
        />

        <Icon
          name="at-circle-outline"
          size={60}
          color={themeColors.secondary}
        />

        <Icon name="balloon-outline" size={60} color={themeColors.secondary} />

        <Icon name="bonfire-outline" size={60} color={themeColors.secondary} />

        <Icon
          name="car-sport-outline"
          size={60}
          color={themeColors.secondary}
        />

        <Icon name="card-outline" size={60} color={themeColors.secondary} />
      </Text>
    </View>
  );
};
