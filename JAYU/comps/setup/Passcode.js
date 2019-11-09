import React from 'react';
import PasscodeStyle from '../../styles/setup/PasscodeStyle';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

function Passcode(props){
    return(
        <View style={PasscodeStyle.app}>
        <SafeAreaView>
          {/* Nav Bar */}
          <View style={PasscodeStyle.navi}>
            <TouchableOpacity
                    onPress={()=>{
                      props.navigation.goBack()
                  }}
            >
              <Text style={PasscodeStyle.back}><Text style={PasscodeStyle.backarrow}> 􀆉</Text> Back</Text>
            </TouchableOpacity>
              <Text style={PasscodeStyle.navTitle}>Passcode</Text>
          </View>
          {/* Questions 1 */}
          <View style={PasscodeStyle.question1}>
            <Text style={PasscodeStyle.question}>Creat a 6-digit passcode</Text>
            <Text style={PasscodeStyle.questionDs}>your passcode will be use to protect your marks, this can be change latter in Setting</Text>
          </View>
          <View style={PasscodeStyle.imageview}>
              <Image source={require('../../assets/Images/PasscodeSetup.png')} style={PasscodeStyle.image}/>
          </View>
          {/* Next button */}
          <View style={PasscodeStyle.NextButtonView}>
            <TouchableOpacity style={PasscodeStyle.NextButton}
                  onPress={()=>{
                     props.navigation.navigate('PasscodeInput')
                  }}
            >
              <Text style={PasscodeStyle.NextButtonText}>Next 􀆊</Text>
            </TouchableOpacity>
          </View>
          </SafeAreaView>
        </View>
    )
}
export default Passcode;