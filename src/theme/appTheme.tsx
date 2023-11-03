import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  globalTitle: {
    fontSize: 30,
    marginVertical: 16,
  },
  globalBtnContainer: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    marginTop: 16,
  },
  globalBtn: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#1d5b69',
    justifyContent: 'center',
    alignItems: 'center',
  },
  globalBtnText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  avatarContainer: {
    marginTop: Platform.OS === 'android' ? 16 : 5,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 20,
    gap: 20,
  },
  menuOptions: {
    width: '100%',
  },
  menuOptionsText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
