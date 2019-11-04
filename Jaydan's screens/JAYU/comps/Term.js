import React from 'react';
import TermStyle from '../styles/TermStyle';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  NavigatorIOS,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
  StatusBar,
  Divider,
  TextInput
} from 'react-native';

function Term(){
    return(
        <View style={TermStyle.app}>
        <SafeAreaView>
          {/* Nav Bar */}
          <View style={TermStyle.navi}>
              <Text style={TermStyle.back}>Done</Text>
          </View>
          {/* Title */}
          <View style={TermStyle.TermTitleView}>
              <View style={TermStyle.titleView}>
                  <Text style={TermStyle.Title}>JAYU and Your Privacy</Text>
              </View>
              <View style={TermStyle.shieldView}>
                  <Text style={TermStyle.shield}>􀞚</Text>
              </View>
          </View>
          {/* Terms */}
          <ScrollView>
              <Text style={TermStyle.ds}>JAYU use your account to keep all your datas up to date across all your devices. All your data (includes your Marks and Calendars) will be encripted, neither JAYU or Apple and read or use your data.</Text>
              
              <Text style={TermStyle.heading}>Location</Text>
              <Text style={TermStyle.ds}>With your permission, JAYU will use your location combines with Machine Learning to provide better study sugessions.</Text>
              
              <Text style={TermStyle.heading}>Face ID and Touch ID</Text>
              <Text style={TermStyle.ds}>Your Face ID (or Touch ID) will be encripted on-device and will not be send to Apple or JAYU developer</Text>
              
              <Text style={TermStyle.heading}>Notifications</Text>
              <Text style={TermStyle.ds}>To provide you with the most accurate notifications, JAYU will run in the background to track your application usage</Text>
          </ScrollView>
          </SafeAreaView>
        </View>
    )
}
export default Term;