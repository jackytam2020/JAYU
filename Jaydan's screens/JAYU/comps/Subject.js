import React from 'react';
import SubjectStyle from '../styles/SubjectStyle';
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

function Subject(){
    return(
        <View style={SubjectStyle.app}>
        <SafeAreaView>
          {/* Nav Bar */}
          <View style={SubjectStyle.navi}>
              <Text style={SubjectStyle.back}><Text style={SubjectStyle.backarrow}> 􀆉</Text> Back</Text>
              <Text style={SubjectStyle.navTitle}>Subjects</Text>
          </View>
          {/* Questions 1 */}
          <View style={SubjectStyle.question1}>
            <Text style={SubjectStyle.question}>Get to know your subjects!</Text>
            <Text style={SubjectStyle.questionDs}>you have eight subjects for Term 3</Text>
            <Text style={SubjectStyle.questionDs}>Each subject comes with a unique icon and color</Text>
            <Text style={SubjectStyle.questionDs}>Take your time, you will adapt these icons and colors within 2 weeks of using JAYU</Text>
          </View>
          {/* Subjects field */}
          <View style={SubjectStyle.subjectView}>

              
              <View style={SubjectStyle.each}>
                  <Text style={SubjectStyle.AC}>􀘝</Text>
                  <Text style={SubjectStyle.name}>Accounting for the Manager</Text>
              </View>
              <View style={SubjectStyle.each}>
                  <Text style={SubjectStyle.PS}>􀋆</Text>
                  <Text style={SubjectStyle.name}>Advanced Photoshop</Text>
              </View>
              <View style={SubjectStyle.each}>
                  <Text style={SubjectStyle.ADI}>􀏀</Text>
                  <Text style={SubjectStyle.name}>Assets Design and Intergration</Text>
              </View>
              <View style={SubjectStyle.each}>
                  <Text style={SubjectStyle.BC}>􀒡</Text>
                  <Text style={SubjectStyle.name}>Business Communication</Text>
              </View>
              <View style={SubjectStyle.each}>
                  <Text style={SubjectStyle.DS}>􀈌</Text>
                  <Text style={SubjectStyle.name}>Design 2</Text>
              </View>
              <View style={SubjectStyle.each}>
                  <Text style={SubjectStyle.SA}>􀋤</Text>
                  <Text style={SubjectStyle.name}>Professional Sale Skills</Text>
              </View>
              <View style={SubjectStyle.each}>
                  <Text style={SubjectStyle.PJ}>􀉮</Text>
                  <Text style={SubjectStyle.name}>Project 2</Text>
              </View>
              <View style={SubjectStyle.each}>
                  <Text style={SubjectStyle.WD}>􀁛</Text>
                  <Text style={SubjectStyle.name}>Web Development</Text>
              </View>

          </View>
          {/* JAYU button */}
          <View style={SubjectStyle.NextButtonView}>
            <TouchableOpacity style={SubjectStyle.NextButton}>
              <Text style={SubjectStyle.NextButtonText}>Start using JAYU 􀆊</Text>
            </TouchableOpacity>
          </View>
          </SafeAreaView>
        </View>
    )
}
export default Subject;