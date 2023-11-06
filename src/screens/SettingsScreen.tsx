import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles, themeColors} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const SettingsScreen = () => {
  const {authState} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.globalTitle}>SettingsScreen</Text>
      <Text style={{fontSize: 18}}>{JSON.stringify(authState, null, 3)}</Text>

      <View
        style={{
          marginTop: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {authState.favoriteIcon ? (
          <View>
            <Text
              style={{
                fontSize: 25,
                marginBottom: 10,
              }}>
              Tu ícono favorito es:
            </Text>
            <Icon
              style={{alignSelf: 'center'}}
              name={authState.favoriteIcon}
              size={100}
              color={themeColors.secondary}
            />
          </View>
        ) : (
          <Text
            style={{
              fontSize: 25,
              marginBottom: 10,
            }}>
            No hay ícono favorito aún...
          </Text>
        )}
      </View>
    </View>
  );
};
