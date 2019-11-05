

import React from 'react';
import SignIn from './comps/setup/SignIn'
import SetUp from  './comps/setup/SetUp';
import Term from  './comps/setup/Term';
import Passcode from  './comps/setup/Passcode';
import PasscodeInput from  './comps/setup/PasscodeInput';
import PasscodeReInput from  './comps/setup/PasscodeReInput';
import FaceID from  './comps/setup/FaceID';
import Subject from  './comps/setup/Subject';
import Schedule from './comps/calendar/calendar';
import Classboard from './comps/classBoard/classboard'
import Post from './comps/classBoard/post'
import Marks from './comps/marks/marks'
import {SafeAreaView,StyleSheet,ScrollView,View,Text,StatusBar,} from 'react-native';

function App() {
  return (
    <View style={{flex:1}}>
      <Marks/> 
      
    </View>
  )
};

export default App;
