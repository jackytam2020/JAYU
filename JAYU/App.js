

import React from 'react';
import SignIn from './comps/setup/SignIn'
import SetUp from  './comps/setup/SetUp';
import Term from  './comps/setup/Term';
import Passcode from  './comps/setup/Passcode';
import PasscodeInput from  './comps/setup/PasscodeInput';
import PasscodeReInput from  './comps/setup/PasscodeReInput';
import FaceID from  './comps/setup/FaceID';
import Subject from  './comps/setup/Subject';
import HomeScreen from './comps/homescreen/homescreen'
import Schedule from './comps/calendar/calendar';
import Classboard from './comps/classBoard/classboard'
import Post from './comps/classBoard/post'
import Marks from './comps/marks/marks'
import Tophw from './comps/homework/Top'
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  SignIn: { screen: SignIn },
  Term: { screen: Term },
  SetUp: { screen: SetUp },
  Passcode: { screen: Passcode },
  PasscodeInput: { screen: PasscodeInput },
  Subject: { screen: Subject },
  HomeScreen: { screen: HomeScreen },
  Marks: { screen: Marks },
  },
  {
      // Specifing Initial Screen
      initalRoute: 'SignIn',
      headerMode: 'none'
  }
);

const AppContainer = createAppContainer(AppNavigator);

function App() {
  return (
    <View style={{flex:1}}>
      <AppContainer/> 
      
    </View>
  )
};

export default App;
