# REACT NATIVE & TYPESCRIPT (Navigation Options App)

---

# Temas puntuales de la sección

### ¿Qué veremos en esta sección?

- Ver los tipos de navegación que tenemos a nuestra disposición ya que comprender cada uno de los diferentes controles de navegaciones es una pieza fundamental en cualquier aplicación móvil.

  - Stack Navigator (es una forma para realizar las transiciones entre pantallas o screens): https://reactnavigation.org/docs/stack-navigator/
  - Drawer Navigator (es como un menu lateral que tendrá información de navegación, del usuario, etc.): https://reactnavigation.org/docs/drawer-navigator/
  - Bottom Tabs Navigator (es una barra de pestañas simple en la parte inferior de la pantalla que permite cambiar entre diferentes rutas. Las rutas se inicializan de forma diferida, es decir, sus componentes de pantalla no se montan hasta que se enfocan por primera vez, es como un lazy loading): https://reactnavigation.org/docs/bottom-tab-navigator
  - Material Bottom Tabs Navigator (es para usar el tema de material-design para la barra inferior de pestañas, sería como para darle un efecto más nativo para android, su configuración es similar a la de Bottom Tabs Navigator): https://reactnavigation.org/docs/material-bottom-tab-navigator
  - Material Top Tabs Navigator (es para usar el tema de material-design para la barra superior de pestañas): https://reactnavigation.org/docs/material-top-tab-navigator/
  - Iconos: https://github.com/oblador/react-native-vector-icons

### ¿Qué veremos en esta sección?

- Comunicar los componentes entre sí, sin importar su ubicación en el árbol de componentes.

- Colocar el tipado a todo y usar el context para poder renderizar nuevamente los componentes cuando surjan cambios.

### \* PASOS A REALIZAR:

- **NOTA:** Cada vez que se hagan instalaciones de paquetes puede ser que salgan algunos errores o warnings en el dispositivo, si es así entonces tumbar la terminal y volver a levantar el código con `npx react-native run-android` o `npx react-native run-ios` ya que como se hicieron instalaciones entonces hay que tumbarlo y volverlo a levantar para que tome esas últimas instalaciones.
- **NOTA:** Para iOS se tendrá que utilizar `npx pod-install` cada vez que se hagan instalaciones de paquetes para que pueda tomar esas últimas instalaciones.

1.  Para realizar la navegación se tiene que instalar react navigation, siguiendo la documentación (https://reactnavigation.org/docs/getting-started):

    - Instalaciones requeridas para el proyecto de React Native: `npm install @react-navigation/native`
    - Instalaciones de dependencias para un proyecto usando solo React Native crudo (para expo es otro código): `npm install react-native-screens react-native-safe-area-context`

2.  Luego el paquete de `react-native-screens` requiere cierta configuración adicional para trabajar con dispositivos Android. Hay que ir al archivo `MainActivity.java` siguiendo la ruta de `android/app/src/main/java/<your package name>/MainActivity.java` y añadir dentro de la clase:

    ```java
     public class MainActivity extends ReactActivity {
       // ...
       @Override
       protected void onCreate(Bundle savedInstanceState) {
         super.onCreate(null);
       }
       // ...
     }
    ```

    - Luego, en el mismo archivo en la parte superior colocar también: `import android.os.Bundle;`
    - Quedaría así:

      ```java
      package com.reactnativetsnavigationoptionsapp;

      import com.facebook.react.ReactActivity;
      import com.facebook.react.ReactActivityDelegate;
      import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
      import com.facebook.react.defaults.DefaultReactActivityDelegate;
      import android.os.Bundle;

      public class MainActivity extends ReactActivity {

        /**
         * Returns the name of the main component registered from JavaScript. This is used to schedule
        * rendering of the component.
        */
        @Override
        protected String getMainComponentName() {
          return "ReactNativeTSNavigationOptionsApp";
        }

        /**
         * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
        * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
        * (aka React 18) with two boolean flags.
        */
        @Override
        protected ReactActivityDelegate createReactActivityDelegate() {
          return new DefaultReactActivityDelegate(
              this,
              getMainComponentName(),
              // If you opted-in for the New Architecture, we enable the Fabric Renderer.
              DefaultNewArchitectureEntryPoint.getFabricEnabled());
        }

        @Override
        protected void onCreate(Bundle savedInstanceState) {
          super.onCreate(null);
        }
      }
      ```

3.  Luego envolver el componente padre de toda la aplicación, en este caso sería **App.tsx** de la siguiente forma (se podría usar el snippet creado y solo añadir lo referido a NavigationContainer):

    ```tsx
    import * as React from 'react';
    import {NavigationContainer} from '@react-navigation/native';

    export default function App() {
      return (
        <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
      );
    }
    ```

    ### \* INSTALACIÓN DE DIFERENTES NAVIGATORS:

    Para instalar cualquier tipo de navigator se necesita realizar los pasos anteriores para que pueda funcionar correctamente.

    ### \* Stack Navigator:

    1. Pasos a realizar para instalar **Stack Navigator** (https://reactnavigation.org/docs/stack-navigator):

       - Instalación de stack navigator: `npm install @react-navigation/stack`

         - Este paquete de stack navigator necesita instalaciones y configuraciones adicionales:
           - `npm install react-native-gesture-handler`
           - Opcional: si se quiere usar el UIKit style animations, cosa que sería recomendable instalarlo también para personalizar los headers que los paquetes nos ofrecen: `npm install @react-native-masked-view/masked-view`
         - Una vez que se instaló `react-native-gesture-handler` entonces hay que ir al componente padre de toda la aplicación, en este caso sería **App.tsx**, y realizar la importación de `import 'react-native-gesture-handler';` pero es **IMPORTANTE** colocarlo en la parte superior de todo, que no haya nada antes de esta importación:

           ```tsx
           import 'react-native-gesture-handler';
           import React from 'react';
           import {NavigationContainer} from '@react-navigation/native';
           import {StyleSheet, Text, View} from 'react-native';

           export const App = () => {
             return (
               <NavigationContainer>
                 <View style={styles.container}>
                   <Text>App</Text>
                 </View>
               </NavigationContainer>
             );
           };

           const styles = StyleSheet.create({
             container: {},
           });
           ```

       - Terminado ya todo lo anterior, entonces empezar a usar el **Stack Navigator** para crear las distintas vistas según nuestros requerimientos.

    ### \* Drawer Navigator:

    1.  Pasos a realizar para instalar **Drawer Navigator** (https://reactnavigation.org/docs/drawer-navigator/):

        - Instalación de drawer navigator: `npm install @react-navigation/drawer`

          - Este paquete de drawer navigator necesita instalaciones y configuraciones adicionales:
            - `npm install react-native-gesture-handler react-native-reanimated`
          - Una vez que se instaló `react-native-gesture-handler` entonces hay que ir al componente padre de toda la aplicación, en este caso sería **App.tsx**, y realizar la importación de `import 'react-native-gesture-handler';` pero es **IMPORTANTE** colocarlo en la parte superior de todo, que no haya nada antes de esta importación:

            ```tsx
            import 'react-native-gesture-handler';
            import React from 'react';
            import {NavigationContainer} from '@react-navigation/native';
            import {StyleSheet, Text, View} from 'react-native';

            export const App = () => {
              return (
                <NavigationContainer>
                  <View style={styles.container}>
                    <Text>App</Text>
                  </View>
                </NavigationContainer>
              );
            };

            const styles = StyleSheet.create({
              container: {},
            });
            ```

        - Yendo a la página oficial de React Native Reanimated (https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/) en la parte de instalación nos menciona sobre colocar una configuración en el archivo babel.config.js:

          ```js
            module.exports = {
              presets: [
                ... // don't add it here :)
              ],
              plugins: [
                ...
                'react-native-reanimated/plugin',
              ],
            };
          ```

          - Una vez hecho esto nos dice también que debemos usar este comando `npm start -- --reset-cache` o `npx react-native start --resetCache`

          - Algunos problemas que se presentaron fueron:

            - Ir a la ruta `android\gradle.properties` y colocar lo siguiente, el primero fue para mostrar los errores de una forma más clara y el otro fue porque salía un error de que algo estaba deprecado:

              ```
              # ...
              # When set to all, summary or none, Gradle will use different warning type display. See Command-line logging options for details. Default is summary.
              org.gradle.warning.mode=all

              # WARNING:Software Components will not be created automatically for Maven publishing from Android Gradle Plugin 8.0. To opt-in to the future behavior, set the Gradle property android.disableAutomaticComponentCreation=true in the `gradle.properties` file or use the new publishing DSL.
              # The AbstractCompile.destinationDir property has been deprecated. This is scheduled to be removed in Gradle 9.0. Please use the destinationDirectory property instead. Consult the upgrading guide for further information: https://docs.gradle.org/8.0.1/userguide/upgrading_version_7.html#compile_task_wiring
              android.disableAutomaticComponentCreation=true
              ```

            - Otro error fue la ruta, porque habían problemas con el CMake similares a:

              ```
                CMake Warning in CMakeLists.txt:
                The object file directory
              ```

              - Y lo que se hizo fue mover toda la carpeta del proyecto al escritorio para reducir el tamaño de la ruta y que sea más directa para que no tenga un nombre tan largo.

        - Terminado ya todo lo anterior, entonces empezar a usar el **Drawer Navigator** para crear las distintas vistas según nuestros requerimientos.

    ### \* Bottom Tabs Navigator:

    1.  Pasos a realizar para instalar **Bottom Tabs Navigator** (https://reactnavigation.org/docs/bottom-tab-navigator):

        - Instalación de bottom tab navigator: `npm install @react-navigation/bottom-tabs`

        - Terminado ya todo lo anterior, entonces empezar a usar el **Bottom Tabs Navigator** para crear las distintas vistas según nuestros requerimientos.

        ### \* Material Bottom Tabs Navigator:

        - Cuando se esté trabajando con el **Bottom Tabs Navigator** se puede se puede ir mejorando su aspecto o también implementar **Material Bottom Tabs Navigator** para mejorar ese aspecto y comportamiento de los botones en Android ya que no se ve tan nativo o tan propio como en el caso de iOS (ya que la forma en como estamos trabajando del aspecto y ciertas funcionalidades es más referido para iOS)

          - Para trabajar con **Material Bottom Tabs Navigator** (https://reactnavigation.org/docs/material-bottom-tab-navigator) se necesitan ciertas instalaciones:
            - `npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons`
          - Con esto ya se podría hacer una validación para que dependiendo del sistema operativo como en el archivo BottomTabsNavigator.tsx use **Bottom Tabs Navigator** o **Material Bottom Tabs Navigator** ya que son muy similares pero tiene algunas configuraciones distintas.
          - Para el caso de **Material Bottom Tabs Navigator** como menciona al final de su documentación, para personalizarlo debemos usar `react-native-paper` (https://callstack.github.io/react-native-paper/) pero como ya se encuentra instalado previamente entonces seguir con sus otras instalaciones:

            - `npm install react-native-safe-area-context` A partir de la versión 5 es necesario instalar "react-native-safe-area-context" para manejar el área segura.
            - También instalar `npm install react-native-vector-icons` pero eso ya se tiene instalado previamente.
            - Para obtener un tamaño más pequeño del bundle size al excluir los módulos que no usa, puede usar nuestro babel plugin. El plugin reescribe automáticamente las declaraciones de importación para que solo se importen los módulos que utiliza en lugar de toda la biblioteca. Agregue react-native-paper/babel a la sección de plugins en su babel.config.js entorno de producción. Debe tener un aspecto como este:

            ```js
            module.exports = {
              presets: ['module:metro-react-native-babel-preset'],
              env: {
                production: {
                  plugins: ['react-native-paper/babel'],
                },
              },
            };
            ```

          - Luego para trabajar con "react-native-paper" envuelva su componente raíz "PaperProvider" desde react-native-paper en el componente más alto de la aplicación, en este caso en el App.tsx de la siguiente forma y también crear un DefaultTheme y de ahí ir editando los colores que queremos:

          ```tsx (App.tsx)
          /* más código */
          import {Provider as PaperProvider} from 'react-native-paper';
          import {DefaultTheme} from './src/theme/appTheme';

          const theme = {
            ...DefaultTheme,
          };

          export const App = () => {
            return (
              /* El PaperProvidercomponente proporciona el tema a todos los componentes del marco. También actúa como un portal hacia los componentes que deben representarse en el nivel superior */
              /* Si tiene otro proveedor (como Redux), envuélvalo afuera PaperProvider para que el contexto esté disponible para los componentes renderizados dentro de un Modal desde la biblioteca */
              /* <StoreProvider store={store}> */
              <PaperProvider theme={theme}>
                <NavigationContainer>
                  {/* se comenta StackNavigator ya que esos componentes no van a ser los principales para mostrar */}
                  {/* <StackNavigator /> */}
                  {/* <DrawerNavigatorBasic /> */}
                  <DrawerNavigator />

                  {/* no se coloca aquí el BottomTabsNavigator porque solo me aparecerían los tabs y no el menú lateral del DrawerNavigator pero yo quiero que se mantenga ese menú lateral y que los tabs sean un screen aparte */}
                  {/* <BottomTabsNavigator/> */}
                </NavigationContainer>
              </PaperProvider>
              /*  </StoreProvider> */
            );
          };
          ```

          ```tsx (appTheme.tsx)
          /* más código */

          export const DefaultTheme = {
            colors: {
              primary: 'rgb(0, 104, 116)',
              onPrimary: 'rgb(255, 255, 255)',
              primaryContainer: 'rgb(151, 240, 255)',
              onPrimaryContainer: 'rgb(0, 31, 36)',
              secondary: 'rgb(74, 98, 103)',
              onSecondary: 'rgb(255, 255, 255)',
              secondaryContainer: 'rgb(88, 86, 214)',
              onSecondaryContainer: 'rgb(5, 31, 35)',
            },
          };

          /* más código */
          ```

    ### \* Material Top Tabs Navigator:

    1.  Pasos a realizar para instalar **Material Top Tabs Navigator** (https://reactnavigation.org/docs/material-top-tab-navigator/):

        - Instalación de material top navigator: `npm install @react-navigation/material-top-tabs react-native-tab-view`

          - Este paquete de material top navigator necesita instalaciones y configuraciones adicionales:
            - `npm install react-native-pager-view`

        - Terminado ya todo lo anterior, entonces empezar a usar el **Material Top Tabs Navigator** para crear las distintas vistas según nuestros requerimientos.

    ### \* Instalar Íconos:

    1.  Pasos a realizar para instalar íconos en react-native (https://github.com/oblador/react-native-vector-icons):

        - Instalación de íconos: `npm install --save react-native-vector-icons`

          - Se necesitan hacer las configuraciones para Android e iOS

            - \* Ahora toca configurarlo para Android:

              - Según la documentación lo recomendado es hacerlo con Gradle (porque también se puede hacer de forma manual) entonces:

                - Editar el archivo `android/app/build.gradle` (lo trabajaremos con instalación de fuentes en particular porque solo se instalará un paquete de íconos entonces usaremos la segunda opción):

                      ```groovy (build.gradle)(Instalar todas las fuentes)
                      /* código... */

                      apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")

                      /* código... */
                      ```

                      ```groovy (build.gradle)(Instalar fuentes en particular)
                      /* código... */

                      project.ext.vectoricons = {
                          iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' ] // Specify font files
                      }

                      apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")

                      /* código... */
                      ```

                - Para usarlo sería de la siguiente manera:

                  ```tsx
                  /* import Icon from 'react-native-vector-icons/<Nombre Paquete de Iconos>'; */
                  import Icon from 'react-native-vector-icons/FontAwesome';

                  const myIcon = <Icon name="rocket" size={30} color="#900" />;
                  ```

                - Puede ser que salga un warning en la importación del paquete de íconos porque nos recomienda instalar `npm i --save-dev @types/react-native-vector-icons` o `npm i -D @types/react-native-vector-icons` (que es lo mismo pero escrito diferente) ya que esta librería no está escrita para TypeScript y tampoco tiene por defecto el archivo de definición de los íconos, entonces nos recomienda instalar como devDependencies para ayudarnos a tener todo el tipado.

                - Puede ser que salga un error en la terminal al correr `npx react-native run-android` similar a:

                  ```bash (aparece en la terminal)
                  FAILURE: Build failed with an exception.

                  * Where:
                  Build file 'C:\Users\Lenovo\Desktop\ReactNativeTSNavigationOptionsApp\android\app\build.gradle' line: 6

                  * What went wrong:
                  Could not compile build file 'C:\Users\Lenovo\Desktop\ReactNativeTSNavigationOptionsApp\android\app\build.gradle'.
                  > startup failed:
                    build file 'C:\Users\Lenovo\Desktop\ReactNativeTSNavigationOptionsApp\android\app\build.gradle': 6: Statement labels may not be used in build scripts.
                    In case you tried to configure a property named 'iconFontNames', replace ':' with '=' or ' ', otherwise it will not have the desired effect.
                    @ line 6, column 20.
                          iconFontNames: [ 'Ionicons.ttf' ] // Specify font files
                  ```

                  - Para solucionarlo se hace la configuración según monorepo como dice la documentación:

                    ```groovy (build.gradle)(Instalar fuentes en particular)
                    /* código... */

                    project.ext.vectoricons = [
                        iconFontsDir: "../../node_modules/react-native-vector-icons/Fonts",
                        iconFontNames: [ 'Ionicons.ttf' ] // Specify font files
                    ]

                    apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")

                    /* código... */
                    ```

            - \* Ahora toca configurarlo para iOS:

              - Hacer la configuración manual yendo al siguiente archivo `ios/<Nombre del proyecto>.xcWorkspace` y abrirlo y eso abrirá el XCode y en la carpeta general que tiene el nombre del proyecto crear un nuevo grupo llamado `Fonts`.
              - Luego ir a la ruta `node_modules/react-native-vector-icons` y en su carpeta Fonts son todos los íconos que podemos usar en la aplicación y según la documentación nos dice jalar toda esa carpeta en la ventana que se abrió anteriormente pero hacerlo así puede presentar algunos problemas es por eso que se creó un nuevo grupo de forma manual, entonces ahora se pueden jalar todos esos archivos o el archivo/paquete de íconos que vayamos a usar al nuevo grupo creado de `Fonts` con eso se abrirá una nueva ventana y asegurarnos de seleccionar la opción de "Copy items if needed" y finalizar y con eso ya tengo al paquéte de íconos como un recurso extra de mi aplicación.
              - Ahora toca hacer la configuración en el archivo `Info.plist` que se encuentra dentro de la carpeta que tiene el mismo nombre de la aplicación que está dentro de la carpeta general que también tiene el mismo nombre de la aplicación y al hacer click en `Info.plist` hay varias opciones y de repente no estará la opción de las fuentes, entonces en el archivo `Info.plist` hacer click derecho y abrirlo como código (Open As -> Source Code) y ya lo vemos como código y al final, antes de que se cierre el diccionario, colocar lo que nos dice la documentación, pero como solo usaremos una fuente de íconos entonces dejar solo la que utilizaremos (ahora solo se comenta pero en el código sería bueno borrar todas las que no necesitemos):

              ```
              <!-- código -->

              <dict>
              <!-- código -->

                <key>UIAppFonts</key>
                <array>
                  // <string>AntDesign.ttf</string>
                  // <string>Entypo.ttf</string>
                  // <string>EvilIcons.ttf</string>
                  // <string>Feather.ttf</string>
                  // <string>FontAwesome.ttf</string>
                  // <string>FontAwesome5_Brands.ttf</string>
                  // <string>FontAwesome5_Regular.ttf</string>
                  // <string>FontAwesome5_Solid.ttf</string>
                  // <string>FontAwesome6_Brands.ttf</string>
                  // <string>FontAwesome6_Regular.ttf</string>
                  // <string>FontAwesome6_Solid.ttf</string>
                  // <string>Foundation.ttf</string>
                  <string>Ionicons.ttf</string>
                  // <string>MaterialIcons.ttf</string>
                  // <string>MaterialCommunityIcons.ttf</string>
                  // <string>SimpleLineIcons.ttf</string>
                  // <string>Octicons.ttf</string>
                  // <string>Zocial.ttf</string>
                  // <string>Fontisto.ttf</string>
                </array>
              </dict>

              <!-- código -->
              ```

              - Ahora en el xcode, en la barra lateral izquierda hacer click en el nombre de la app, aparecera la configuracion general y hay que buscar el tap "Build Phases", despues buscar la opción "Copy Bundle Resources" y ahí agregar un nuevo item, hay que buscar los iconos que agregamos en la carpera Font y listo
              - Luego aceptar y cerrar todo
              - Después ir a la terminal del proyecto en sí y hacer el `npx pod-install` para tomar las últimas dependencias, instalaciones y configuraciones.

        - Terminado ya todo lo anterior, entonces empezar a usar los íconos según nuestros requerimientos ya sea en Android e iOS.

### \* RECURSOS A USAR:

- react navigation (https://reactnavigation.org/): npm install @react-navigation/native
- ejemplo
- ejemplo

---

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
