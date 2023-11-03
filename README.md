# REACT NATIVE & TYPESCRIPT (Navigation Options App)

---

# Temas puntuales de la sección

### ¿Qué veremos en esta sección?

- Ver los tipos de navegación que tenemos a nuestra disposición ya que comprender cada uno de los diferentes controles de navegaciones es una pieza fundamental en cualquier aplicación móvil.
  - Stack navigation: https://reactnavigation.org/docs/stack-navigator/
  - Drawer navigation: https://reactnavigation.org/docs/drawer-navigator/

### \* PASOS A REALIZAR:

- **NOTA:** Cada vez que se hagan instalaciones de paquetes puede ser que salgan algunos errores o warnings en el dispositivo, si es así entonces tumbar la terminal y volver a levantar el código con `npx react-native run-android` o `npx react-native run-ios` ya que como se hicieron instalaciones entonces hay que tumbarlo y volverlo a levantar para que tome esas últimas instalaciones.
- **NOTA:** Para iOS se tendrá que utilizar `npx pod-install` cada vez que se hagan instalaciones de paquetes para que pueda tomar esas últimas instalaciones.

1. Para realizar la navegación se tiene que instalar react navigation, siguiendo la documentación (https://reactnavigation.org/docs/getting-started):

   - Instalaciones requeridas para el proyecto de React Native: `npm install @react-navigation/native`
   - Instalaciones de dependencias para un proyecto usando solo React Native crudo (para expo es otro código): `npm install react-native-screens react-native-safe-area-context`

2. Luego el paquete de `react-native-screens` requiere cierta configuración adicional para trabajar con dispositivos Android. Hay que ir al archivo `MainActivity.java` siguiendo la ruta de `android/app/src/main/java/<your package name>/MainActivity.java` y añadir dentro de la clase:

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

3. Luego envolver el componente padre de toda la aplicación, en este caso sería **App.tsx** de la siguiente forma (se podría usar el snippet creado y solo añadir lo referido a NavigationContainer):

   ```tsx
   import * as React from 'react';
   import {NavigationContainer} from '@react-navigation/native';

   export default function App() {
     return (
       <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
     );
   }
   ```

4. Pasos a realizar para instalar **Stack Navigator** (https://reactnavigation.org/docs/stack-navigator):

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

5. Pasos a realizar para instalar **Drawer Navigator** (https://reactnavigation.org/docs/drawer-navigator/):

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
