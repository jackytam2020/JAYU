import React from 'react';
import PasscodeReInputStyle from '../styles/PasscodeReInputStyle';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

function PasscodeInput(){
    return(
        <View style={PasscodeReInputStyle.app}>
        <SafeAreaView>
          {/* Nav Bar */}
          <View style={PasscodeReInputStyle.navi}>
              <TouchableOpacity>
                <Text style={PasscodeReInputStyle.Cancel}> Cancel</Text>
              </TouchableOpacity>
          </View>
          {/* Passcode input */}
          <View style={PasscodeReInputStyle.passcodeform}>
              <Text style={PasscodeReInputStyle.text}>Re-enter your passcode</Text>
              <View style={PasscodeReInputStyle.passcodeInput}>
                  <Text style={PasscodeReInputStyle.each}>􀀀</Text>
                  <Text style={PasscodeReInputStyle.each}>􀀀</Text>
                  <Text style={PasscodeReInputStyle.each}>􀀀</Text>
                  <Text style={PasscodeReInputStyle.each}>􀀀</Text>
                  <Text style={PasscodeReInputStyle.each}>􀀀</Text>
                  <Text style={PasscodeReInputStyle.each}>􀀀</Text>
              </View>
          </View>
          </SafeAreaView>
        </View>
    )
}
export default PasscodeInput;