import React from 'react';
import FaceIDStyle from '../styles/FaceIDStyle';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch
} from 'react-native';

function FaceID(){
    return(
        <View style={FaceIDStyle.app}>
        <SafeAreaView>
          {/* Nav Bar */}
          <View style={FaceIDStyle.navi}>
            <TouchableOpacity>
                <Text style={FaceIDStyle.back}><Text style={FaceIDStyle.backarrow}> 􀆉</Text> Back</Text>
              </TouchableOpacity>
              <Text style={FaceIDStyle.navTitle}>Face ID</Text>
          </View>
          {/* Questions 1 */}
          <View style={FaceIDStyle.question1}>
            <Text style={FaceIDStyle.question}>Use Face ID</Text>
            <Switch style={FaceIDStyle.switch}/>
        </View>
        <View style={FaceIDStyle.questionView}>
            <Text style={FaceIDStyle.questionDs}>quickly access your marks without entering your passcode, you can change this latter in Setting</Text>
        </View>
        <View style={FaceIDStyle.imageview}>
            <Image source={require('../assets/Images/FaceIDdemo.png')} style={FaceIDStyle.image}/>
        </View>
          {/* Next button */}
          <View style={FaceIDStyle.NextButtonView}>
            <TouchableOpacity style={FaceIDStyle.NextButton}>
              <Text style={FaceIDStyle.NextButtonText}>Next 􀆊</Text>
            </TouchableOpacity>
          </View>
          </SafeAreaView>
        </View>
    )
}
export default FaceID;