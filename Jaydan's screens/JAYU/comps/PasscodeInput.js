import React from 'react';
import PasscodeInputStyle from '../styles/PasscodeInputStyle';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

function PasscodeInput(){
    return(
        <View style={PasscodeInputStyle.app}>
        <SafeAreaView>
          {/* Nav Bar */}
          <View style={PasscodeInputStyle.navi}>
              <Text style={PasscodeInputStyle.Cancel}> Cancel</Text>
          </View>
          {/* Passcode input */}
          <View style={PasscodeInputStyle.passcodeform}>
              <Text style={PasscodeInputStyle.text}>Enter your passcode</Text>
              <View style={PasscodeInputStyle.passcodeInput}>
                  <Text style={PasscodeInputStyle.each}>􀀀</Text>
                  <Text style={PasscodeInputStyle.each}>􀀀</Text>
                  <Text style={PasscodeInputStyle.each}>􀀀</Text>
                  <Text style={PasscodeInputStyle.each}>􀀀</Text>
                  <Text style={PasscodeInputStyle.each}>􀀀</Text>
                  <Text style={PasscodeInputStyle.each}>􀀀</Text>
              </View>
          </View>
          </SafeAreaView>
        </View>
    )
}
export default PasscodeInput;