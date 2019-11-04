import React from 'react';
import SignInStyle from '../styles/SignInStyle';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

function SignIn(){
    return(
        <View style={SignInStyle.app}>
            <ImageBackground source={require('../assets/BackgroundImages/SignInBackground.png')}style={SignInStyle.BackGround}>
            <SafeAreaView>
                {/* Heading */}
                <Text style={SignInStyle.header}>Welcome to JAYU</Text>
                {/* descriptions */}
                <Text style={SignInStyle.ds}>Design for D3 students. Track your Calendar, Schedules and Marks; all in one place</Text>
                {/* button */}
                <TouchableOpacity style={SignInStyle.button}>
                    <Image source={require('../assets/Images/Apple_Logo.png')} style={SignInStyle.applelogo}></Image>
                    <Text style={SignInStyle.buttontext}>Sign in with Apple</Text>
                </TouchableOpacity>
                {/* sign in descriptions */}
                <Text style={SignInStyle.Signinds}>Sign in with Apple helps keep your data consistent across all your devices</Text>
                {/* Terms and conditions */}
                <Text style={SignInStyle.Terms}>By signing in, you are agreed to the</Text>
                 <TouchableOpacity style={SignInStyle.TermOpacity}>
                     <Text style={SignInStyle.Termblue}>JAYU's Terms and Conditions 􀆊</Text>
                </TouchableOpacity>
                
            </SafeAreaView>
            </ImageBackground>
        </View>
    )
}
export default SignIn;