import React from 'react';
import SignInStyle from '../../styles/setup/SignInStyle';
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

function SignIn(props){
    return(
        <View style={SignInStyle.app}>
            <ImageBackground source={require('../../assets/BackgroundImages/SignInBackground.png')}style={SignInStyle.BackGround}>
            <SafeAreaView>
                {/* Heading */}
                <Text style={SignInStyle.header}>Welcome Back 
                {"\n"}to JAYU</Text>
                {/* descriptions */}
                <Text style={SignInStyle.ds}>Designed for D3 students.{"\n"}
                {"\n"}
                Track your Calendar, Schedules and Marks
                {"\n"}all in one place.</Text>

                <View style={SignInStyle.buttonview}>
            
                {/* Google Button */}
                <TouchableOpacity style={SignInStyle.Googlebutton}>
                <Image source={require('../../assets/Images/g-logo.png')} style={SignInStyle.googlelogo}></Image>
                    <Text style={SignInStyle.googlebuttontext}
                        onPress={()=>{
                            props.navigation.navigate('SetUp')
                        }}
                    >Sign into JAYU</Text>
                </TouchableOpacity>
               
                
                {/* Terms and conditions */}
                <View style={{flex:0.25}}>
                    <Text style={SignInStyle.Terms}>By signing in, you are agreed to the</Text>
                    <TouchableOpacity style={SignInStyle.TermOpacity}>
                        <Text style={SignInStyle.Termblue}
                        onPress={()=>{
                            props.navigation.navigate('Term')
                        }}>JAYU's Terms and Conditions 􀆊</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </SafeAreaView>
            </ImageBackground>
        </View>
    )
}
export default SignIn;