import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigatorOptions/StackNavigator';
import {AuthContext} from '../context/AuthContext';

// interface RouteParamsInterface {
//   id: number;
//   name: string;
// }

/* se crea una interface que se extienda de StackScreenProps pero este me pide dos argumentos StackScreenProps<un objeto llamado, especificar las propiedades que va a tener ese objeto> "StackScreenProps<ParamList, RouteName>". Se extiende porque este componente puede ser que reciba otra información aparte de lo que ya le da StackScreenProps, como por ejemplo un id, name, address, email, etc... */
interface PersonScreenProps
  extends StackScreenProps<RootStackParams, 'PersonScreen'> {
  address?: string;
}

export const PersonScreen = ({navigation, route}: PersonScreenProps) => {
  // const params = route.params as RouteParamsInterface;
  const params = route.params;
  const {handleChangeUsername} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [navigation, params]);

  useEffect(() => {
    handleChangeUsername(params.name);
  }, [handleChangeUsername, params]);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.globalTitle}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
