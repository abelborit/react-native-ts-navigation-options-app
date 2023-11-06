import {AuthState} from './AuthContext';

export type AuthAction =
  | {type: '[Auth] SignIn'}
  | {type: '[Auth] LogOut'}
  | {type: '[User] ChangeFavIcon'; payload: string}
  | {type: '[User] ChangeUsername'; payload: string};

export const AuthReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    /* siempre crear un nuevo estado porque el estado es un objeto y por ello tenemos como su valor la referencia en memoria donde él mismo está definido. Al mutar dicho objeto su referencia es exactamente la misma (el objeto sigue definido en el mismo espacio en memoria) por lo tanto si se verifica si el estado inicial es igual al estado luego de mutarlo, pues efectivamente seria el "mismo objeto", la unica forma de verificarlo es con una comparación profunda (cada una de las propiedades que este contenga) lo cual afectaria el rendimiento de nuestra aplicación.

    Haciendo uso de funciones puras (funciones que no deberían tener lógica externa para resolver algo, no hay console.log(), no se disparan useEffect(), etc.), retornamos un nuevo objeto (o el estado actual si se intenta ejecutar una accion no definida) y se hace esta comparación (el nuevo estado tiene un nuevo espacio en memoria) como es distinto React procede a re-renderizar los componentes necesarios para mostrar el nuevo estado. */
    case '[Auth] SignIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };

    case '[Auth] LogOut':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined,
      };

    case '[User] ChangeUsername':
      return {
        ...state,
        isLoggedIn: true,
        username: action.payload,
      };

    case '[User] ChangeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };

    default:
      return state;
  }
};
