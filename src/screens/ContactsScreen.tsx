import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const ContactsScreen = () => {
  const {authState, signIn} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.globalTitle}>ContactsScreen</Text>

      {!authState.isLoggedIn ? (
        <Button title="SigIn" onPress={() => signIn()} />
      ) : null}
    </View>
  );
};
