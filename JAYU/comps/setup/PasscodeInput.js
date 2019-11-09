import React from 'react';
import PasscodeInputStyle from '../../styles/setup/PasscodeInputStyle';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

function PasscodeInput(props){
    return(
        <View style={PasscodeInputStyle.app}>
        <SafeAreaView>
          {/* Nav Bar */}
          <View style={PasscodeInputStyle.navi}>
              <TouchableOpacity
                  onPress={()=>{
                      props.navigation.navigate('Subject')
                    }}
              >
                <Text style={PasscodeInputStyle.Cancel}> Cancel</Text>
              </TouchableOpacity>
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