import React, {createContext, useCallback, useReducer} from 'react';
import {AuthReducer} from './AuthReducer';

// definir cómo luce la información que tendré
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// definir el estado inicial cuando la aplicación carga por primera vez
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

// definir qué va a proporcionar el contexto a sus componentes hijos
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logOut: () => void;
  handleChangeFavIcon: (iconName: string) => void;
  handleChangeUsername: (username: string) => void;
}

// crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

// componente que será quien provee la información / el estado
export const AuthProvider = ({
  children, // prop children
}: {
  children: JSX.Element | JSX.Element[]; // tipado
}) => {
  const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

  const signIn = () => {
    dispatch({type: '[Auth] SignIn'});
  };

  const logOut = () => {
    dispatch({type: '[Auth] LogOut'});
  };

  const handleChangeFavIcon = (iconName: string) => {
    dispatch({type: '[User] ChangeFavIcon', payload: iconName});
  };

  /* se coloca con un useCallback() ya que se está usando como dependencia en un useEffect() */
  const handleChangeUsername = useCallback((username: string) => {
    dispatch({type: '[User] ChangeUsername', payload: username});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logOut,
        handleChangeFavIcon,
        handleChangeUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
