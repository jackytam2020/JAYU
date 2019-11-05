import React from 'react';
import SetUpStyle from '../../styles/setup/SetUpStyle'
import {
  SafeAreaView,
  View,
  Text,
  NavigatorIOS,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  StatusBar,
  Divider,
  TextInput
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

function SetUp(props){
    return(
        <View style={SetUpStyle.app}>
        <SafeAreaView>
          {/* Nav Bar */}
          <View style={SetUpStyle.navi}>
            <TouchableOpacity
              onPress={()=>{
                props.navigation.goBack()
                }}
            >
              <Text style={SetUpStyle.back}><Text style={SetUpStyle.backarrow}> 􀆉</Text> Back</Text>
            </TouchableOpacity>
              <Text style={SetUpStyle.navTitle}>Set Up</Text>
          </View>
          {/* Questions 1 */}
          <View style={SetUpStyle.question1}>
            <Text style={SetUpStyle.question}>What is your name?</Text>
            <Text style={SetUpStyle.questionDs}>your name will be display on ClassBoard</Text>
            <TextInput title={"Username"} defaultValue={"tap to Edit"} style={SetUpStyle.NameForm}/>
          </View>
          {/* Questions 2*/}
          <View style={SetUpStyle.question2}>
            <Text style={SetUpStyle.question}>What is your Term?</Text>
            <Text style={SetUpStyle.questionDs}>if this is your first time in D3, select Term 1</Text>
            <View style={SetUpStyle.QuestionButtons}>
              <View style={SetUpStyle.FirstHalf}>
                <TouchableOpacity style={SetUpStyle.optionbutton}>
                  <Text style={SetUpStyle.option}>Term 1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={SetUpStyle.optionbutton}>
                  <Text style={SetUpStyle.option}>Term 2</Text>
                </TouchableOpacity>
              </View>
              <View style={SetUpStyle.SecondHalf}>
                <TouchableOpacity style={SetUpStyle.optionbutton}>
                  <Text style={SetUpStyle.option}>Term 3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={SetUpStyle.optionbutton}>
                  <Text style={SetUpStyle.option}>Term 4</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Question 3 */}
          <View style={SetUpStyle.question3}>
            <Text style={SetUpStyle.question}>What is your Set?</Text>
            <Text style={SetUpStyle.questionDs}>if you are unsure about your set, contact your Program Lead</Text>
            <View style={SetUpStyle.QuestionButtons}>
              <View style={SetUpStyle.FirstHalf}>
                <TouchableOpacity style={SetUpStyle.optionbutton}>
                  <Text style={SetUpStyle.option}>Set A</Text>
                </TouchableOpacity>
                <TouchableOpacity style={SetUpStyle.optionbutton}>
                  <Text style={SetUpStyle.option}>Set B</Text>
                </TouchableOpacity>
              </View>
              <View style={SetUpStyle.SecondHalf}>
                <TouchableOpacity style={SetUpStyle.optionbutton}>
                  <Text style={SetUpStyle.option}>Set C</Text>
                </TouchableOpacity>
                <TouchableOpacity style={SetUpStyle.optionbutton}>
                  <Text style={SetUpStyle.option}>Set D</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* Next button */}
          <View style={SetUpStyle.NextButtonView}>
            <TouchableOpacity style={SetUpStyle.NextButton}
                onPress={()=>{
                  props.navigation.navigate('Passcode')
                }}
            >
              <Text style={SetUpStyle.NextButtonText}>Next 􀆊</Text>
            </TouchableOpacity>
          </View>
          </SafeAreaView>
        </View>
    )
}
export default SetUp;