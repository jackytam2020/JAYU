/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import SignIn from  './comps/SignIn';
import SetUp from  './comps/SetUp';
import Term from  './comps/Term';
import Passcode from  './comps/Passcode';
import PasscodeInput from  './comps/PasscodeInput';
import PasscodeReInput from  './comps/PasscodeReInput';
import FaceID from  './comps/FaceID';
import Subject from  './comps/Subject';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


function App() {
  return (
    <View>
      {/* <SignIn/> */}
      {/* <Term/> */}
      {/* <SetUp/> */}
      {/* <Passcode/> */}
      {/* <PasscodeInput /> */}
      {/* <PasscodeReInput /> */}
      {/* <FaceID/> */}
      <Subject/>
    </View>
  )
};

export default App;
