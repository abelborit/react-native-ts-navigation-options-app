import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {authState, logOut} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.globalTitle}>AlbumsScreen</Text>

      {authState.isLoggedIn ? (
        <Button color={'#d00'} title="LogOut" onPress={() => logOut()} />
      ) : null}
    </View>
  );
};
