

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
import NewClass from './comps/calendar/newClass'
import AdjustingClass from './comps/calendar/adjustingClass'
import Classboard from './comps/classBoard/classboard'
import Post from './comps/classBoard/post'
import NewPost from './comps/classBoard/newPost'
import Marks from './comps/marks/marks'
import Tophw from './comps/homework/Top'
import ComposePost from './comps/classBoard/composePost'
import FooterBar from './comps/footerBar'


import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'




// App default Navigation stack
const AppNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  SignIn: { screen: SignIn },
  Term: { screen: Term },
  SetUp: { screen: SetUp },
  Passcode: { screen: Passcode },
  PasscodeInput: { screen: PasscodeInput },
  Subject: { screen: Subject },
  Schedule: {screen: Schedule},
  Homework: {screen: Tophw},
  Marks: { screen: Marks },
  Classboard: {screen: Classboard},
  NewPost: {screen: NewPost},
  ComposePost: {screen: ComposePost},
  Post: {screen: Post},
  Footer: {screen: FooterBar}
  }, 
  {
      // Specifing Initial Screen
      initalRoute: 'SignIn',
      headerMode: 'none',
  },

);

const AppContainer = createAppContainer(AppNavigator);

//Footer Navigation

const TabNavigator = createBottomTabNavigator({
  HomeFooter: HomeScreen,
  ScheduleFooter: Schedule,
  HomeworkFooter: Tophw,
  ClassboardFooter: Classboard,
  MarksFooter: Marks
});

const FooterContainer = createAppContainer(TabNavigator);

function App() {
  return (
    <View style={{flex:1}}>
      <AppContainer/> 
    </View>
  )
};

export default App;
