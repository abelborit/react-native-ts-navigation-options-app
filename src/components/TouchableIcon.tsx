import React, {useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {themeColors} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

interface TouchableIconProps {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
}

export const TouchableIcon = ({
  iconName,
  iconSize = 60,
  iconColor = themeColors.secondary,
}: TouchableIconProps) => {
  const {handleChangeFavIcon} = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => handleChangeFavIcon(iconName)}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
    </TouchableOpacity>
  );
};
