import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import * as screens from './src/screens/index';

const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

const App = () => {
  const {Intro, SignUp, MyNote, Map, Write, Post, Setting} = screens;
  const Navigator = () => {
    const loginStack = () => {
      return (
        <Stack.Navigator initialRouteName="Intro" headerMode="false">
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      );
    };
    const homeStack = () => {
      return (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={homeTab} />
        </Stack.Navigator>
      );
    };
    const homeTab = () => {
      return (
        <BottomTabs.Navigator initialRouteName="MyNote" backBehavior="none">
          <BottomTabs.Screen name="MyNote" component={MyNote} />
          <BottomTabs.Screen name="Map" component={Map} />
          <BottomTabs.Screen name="Write" component={Write} />
          <BottomTabs.Screen name="Post" component={Post} />
          <BottomTabs.Screen name="Setting" component={Setting} />
        </BottomTabs.Navigator>
      );
    };
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          headerMode="false"
          backBehavior="none">
          <Stack.Screen name="Login" component={loginStack} />
          <Stack.Screen name="Home" component={homeStack} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  return <Navigator />;
};

export default App;
