/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import styles from './styles/homescreenStyle';
import TopHalf from './comps/top';
import BottomHalf from './comps/bottom';

function App(){
  return (
    <ImageBackground source={require('./Images/original.png')} style={styles.home}>
        <View style={styles.container}>
           <TopHalf />
           <BottomHalf />
        </View>

    </ImageBackground>
  )
}

export default App;
