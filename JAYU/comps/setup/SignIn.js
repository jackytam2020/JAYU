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
                <Text style={SignInStyle.header}>Welcome to JAYU</Text>
                {/* descriptions */}
                <Text style={SignInStyle.ds}>Design for D3 students.{"\n"}Track your Calendar, Schedules and Marks; all in one place</Text>

                <View style={SignInStyle.buttonview}>
                {/* Facebook Button */}
                <TouchableOpacity style={SignInStyle.Facebookbutton}>
                <Image source={require('../../assets/Images/f_logo.png')} style={SignInStyle.facebooklogo}></Image>
                    <Text style={SignInStyle.facebookbuttontext}
                        onPress={()=>{
                            props.navigation.navigate('Term')
                        }}
                    >Sign in with Facebook</Text>
                </TouchableOpacity>
                {/* Google Button */}
                <TouchableOpacity style={SignInStyle.Googlebutton}>
                <Image source={require('../../assets/Images/g-logo.png')} style={SignInStyle.googlelogo}></Image>
                    <Text style={SignInStyle.googlebuttontext}
                        onPress={()=>{
                            props.navigation.navigate('Term')
                        }}
                    >Sign in with Google</Text>
                </TouchableOpacity>
                {/*Apple button */}
                <TouchableOpacity style={SignInStyle.Applebutton}>
                    <Image source={require('../../assets/Images/Apple_Logo.png')} style={SignInStyle.applelogo}></Image>
                    <Text style={SignInStyle.applebuttontext}
                        onPress={()=>{
                            props.navigation.navigate('Term')
                        }}
                    >Sign in with Apple</Text>
                </TouchableOpacity>
                
                {/* Terms and conditions */}
                <Text style={SignInStyle.Terms}>By signing in, you are agreed to the</Text>
                 <TouchableOpacity style={SignInStyle.TermOpacity}>
                     <Text style={SignInStyle.Termblue}>JAYU's Terms and Conditions 􀆊</Text>
                </TouchableOpacity>
                </View>
            </SafeAreaView>
            </ImageBackground>
        </View>
    )
}
export default SignIn;