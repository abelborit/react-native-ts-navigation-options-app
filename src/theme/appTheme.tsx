import {StyleSheet, Platform} from 'react-native';

export const themeColors = {
  primary: '#9eb1e0',
  secondary: '#3b569b',
};

export const DefaultTheme = {
  colors: {
    primary: 'rgb(0, 104, 116)',
    onPrimary: 'rgb(255, 255, 255)',
    primaryContainer: 'rgb(151, 240, 255)',
    onPrimaryContainer: 'rgb(0, 31, 36)',
    secondary: 'rgb(74, 98, 103)',
    onSecondary: 'rgb(255, 255, 255)',
    secondaryContainer: 'transparent',
    onSecondaryContainer: 'rgb(5, 31, 35)',
  },
};

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
    fontSize: 20,
    fontWeight: 'bold',
  },
});
