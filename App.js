/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FirebaseState from './src/context/firebase/firebaseState';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//Screens
import Dashboard from './src/screens/Dashboard';
import Registers from './src/screens/Registers';

const App = () => {
  return (
    <>
      <FirebaseState>

      <Container>
        <NavigationContainer>
          
          <Drawer.Navigator initialRouteName="Registers">
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="Registers" component={Registers} />
          </Drawer.Navigator>
        </NavigationContainer>
      </ Container>
      </FirebaseState>
    </>
  );
};

export default App;
