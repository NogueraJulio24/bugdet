/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FirebaseState from './src/context/firebase/firebaseState';

const Stack = createStackNavigator();

//Screens
import Dashboard from './src/screens/Dashboard';
import Registers from './src/screens/Registers';

const App = () => {
  return (
    <>
      <FirebaseState>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#FFDA00'
              },
              headerTitleStyle:{
                fontWeight: 'bold'
              }
            }}
          >
            <Stack.Screen 
              name="Registers"
              component={Registers}
              options={{
                title: "Registro"
              }}
            />

            <Stack.Screen 
              name="Dashboard"
              component={Dashboard}
              options={{
                title: "Inicio"
              }}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </FirebaseState>
    </>
  );
};

export default App;
