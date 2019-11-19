import React from 'react';
import {View,Text,Button, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import classBoardStyles from '../../styles/classBoard/classBoardStyles'
import FooterBar from '../../comps/footerBar';
import normalize from 'react-native-normalize';



function Classboard(props){
  return (
      <View style={classBoardStyles.container}>
            <SafeAreaView style={classBoardStyles.safecontainer}>
          <View style={classBoardStyles.navBar}>
              <TouchableOpacity style={classBoardStyles.backholder}
                onPress={()=>{
                    props.navigation.navigate("HomeScreen")
                 }}>
                    <Text style={{fontSize:normalize(20), color:'#007AFF', fontFamily:"SFProDisplay-Medium"}}>􀆉Back</Text>
               </TouchableOpacity>
            <Text style={{fontSize:normalize(20), fontFamily:"SFProDisplay-Medium", marginLeft:normalize(70)}}>ClassBoard</Text>
            <TouchableOpacity
                onPress={()=>{
                    props.navigation.navigate('NewPost')
                 }}>
                    <Text style={{fontSize:normalize(20), color:'#007AFF', fontFamily:"SFProDisplay-Medium", marginLeft:normalize(100)}}>􀈐</Text>
               </TouchableOpacity>
          </View>

          {/* Posts */}
          <View style={{flex:1, width:'100%', flexDirection:'row', justifyContent:'center', backgroundColor:"#F2F2F2", paddingTop:normalize(10)}}>
              <View style={classBoardStyles.postBox}>
                <ScrollView style={classBoardStyles.scrollview}>


                  <View style={classBoardStyles.posts}>
                      <TouchableOpacity style={{flexDirection:"row", paddingLeft:10}}
                        onPress={()=>{
                          props.navigation.navigate('Post')
                      }}>
                            <View style={classBoardStyles.subjecticonview}>
                              <Text style={classBoardStyles.DS}>􀈌</Text>
                            </View>
                            <View style={{paddingLeft:normalize(10)}}>  
                              <Text style={classBoardStyles.subjectname}>Design 2</Text>
                              <Text style={classBoardStyles.personname}>9:15pm by Doris</Text>
                            </View>  
                      </TouchableOpacity>

                      <View style={classBoardStyles.line}></View>  

                      <Text style={classBoardStyles.thepost}>For Assignment 3 do we name the file</Text>
                  </View>

                  <View style={classBoardStyles.posts}>
                      <TouchableOpacity style={{flexDirection:"row", paddingLeft:10}}
                        onPress={()=>{
                          props.navigation.navigate('Post')
                      }}>
                            <View style={classBoardStyles.subjecticonview}>
                              <Text style={classBoardStyles.AC}>􀖘</Text>
                            </View>
                            <View style={{paddingLeft:normalize(10)}}>  
                              <Text style={classBoardStyles.subjectname}>Accounting for the Manager</Text>
                              <Text style={classBoardStyles.personname}>9:15pm by Doris</Text>
                            </View>  
                      </TouchableOpacity>

                      <View style={classBoardStyles.line}></View>  

                      <Text style={classBoardStyles.thepost}>For Assignment 3 do we name the file For Assignment 3 do we name the file For Assignment 3 do we name the file</Text>
                  </View>

                  <View style={classBoardStyles.posts}>
                      <TouchableOpacity style={{flexDirection:"row", paddingLeft:10}}
                        onPress={()=>{
                          props.navigation.navigate('Post')
                      }}>
                            <View style={classBoardStyles.subjecticonview}>
                              <Text style={classBoardStyles.ADI}>􀏀</Text>
                            </View>
                            <View style={{paddingLeft:normalize(10)}}>  
                              <Text style={classBoardStyles.subjectname}>Assets Design and Intergration</Text>
                              <Text style={classBoardStyles.personname}>9:15pm by Doris</Text>
                            </View>  
                      </TouchableOpacity>

                      <View style={classBoardStyles.line}></View>  

                      <Text style={classBoardStyles.thepost}>For Assignment 3 do we name the file</Text>
                  </View>

                  <View style={classBoardStyles.posts}>
                      <TouchableOpacity style={{flexDirection:"row", paddingLeft:10}}
                        onPress={()=>{
                          props.navigation.navigate('Post')
                      }}>
                            <View style={classBoardStyles.subjecticonview}>
                              <Text style={classBoardStyles.BC}>􀒡</Text>
                            </View>
                            <View style={{paddingLeft:normalize(10)}}>  
                              <Text style={classBoardStyles.subjectname}>Business Communication 2</Text>
                              <Text style={classBoardStyles.personname}>9:15pm by Doris</Text>
                            </View>  
                      </TouchableOpacity>

                      <View style={classBoardStyles.line}></View>  

                      <Text style={classBoardStyles.thepost}>For Assignment 3 do we name the file For Assignment 3 do we name the file xz</Text>
                  </View>

                  <View style={classBoardStyles.posts}>
                      <TouchableOpacity style={{flexDirection:"row", paddingLeft:10}}
                        onPress={()=>{
                          props.navigation.navigate('Post')
                      }}>
                            <View style={classBoardStyles.subjecticonview}>
                              <Text style={classBoardStyles.PS}>􀀣</Text>
                            </View>
                            <View style={{paddingLeft:normalize(10)}}>  
                              <Text style={classBoardStyles.subjectname}>Advanced Photoshops</Text>
                              <Text style={classBoardStyles.personname}>9:15pm by Doris</Text>
                            </View>  
                      </TouchableOpacity>

                      <View style={classBoardStyles.line}></View>  

                      <Text style={classBoardStyles.thepost}>For Assignment 3 do we name the file</Text>
                  </View>

                  <View style={classBoardStyles.posts}>
                      <TouchableOpacity style={{flexDirection:"row", paddingLeft:10}}
                        onPress={()=>{
                          props.navigation.navigate('Post')
                      }}>
                            <View style={classBoardStyles.subjecticonview}>
                              <Text style={classBoardStyles.PJ}>􀉮</Text>
                            </View>
                            <View style={{paddingLeft:normalize(10)}}>  
                              <Text style={classBoardStyles.subjectname}>Project 2</Text>
                              <Text style={classBoardStyles.personname}>9:15pm by Doris</Text>
                            </View>  
                      </TouchableOpacity>

                      <View style={classBoardStyles.line}></View>  

                      <Text style={classBoardStyles.thepost}>For Assignment 3 do we name the file</Text>
                  </View>

                  <View style={classBoardStyles.posts}>
                      <TouchableOpacity style={{flexDirection:"row", paddingLeft:10}}
                        onPress={()=>{
                          props.navigation.navigate('Post')
                      }}>
                            <View style={classBoardStyles.subjecticonview}>
                              <Text style={classBoardStyles.SA}>􀋤</Text>
                            </View>
                            <View style={{paddingLeft:normalize(10)}}>  
                              <Text style={classBoardStyles.subjectname}>Professional Sale Skills</Text>
                              <Text style={classBoardStyles.personname}>9:15pm by Doris</Text>
                            </View>  
                      </TouchableOpacity>

                      <View style={classBoardStyles.line}></View>  

                      <Text style={classBoardStyles.thepost}>For Assignment 3 do we name the file</Text>
                  </View>

                  <View style={classBoardStyles.posts}>
                      <TouchableOpacity style={{flexDirection:"row", paddingLeft:10}}
                        onPress={()=>{
                          props.navigation.navigate('Post')
                      }}>
                            <View style={classBoardStyles.subjecticonview}>
                              <Text style={classBoardStyles.WD}>􀁛</Text>
                            </View>
                            <View style={{paddingLeft:normalize(10)}}>  
                              <Text style={classBoardStyles.subjectname}>Web Development</Text>
                              <Text style={classBoardStyles.personname}>9:15pm by Doris</Text>
                            </View>  
                      </TouchableOpacity>

                      <View style={classBoardStyles.line}></View>  

                      <Text style={classBoardStyles.thepost}>For Assignment 3 do we name the file</Text>
                  </View>

                  
                </ScrollView>  
              </View>

          </View>

          <View style={{height:'10%', width:'100%', position:'absolute', bottom:0}}>
            <FooterBar/>
          </View>
          </SafeAreaView>
      </View>
      
    )
  }
  export default Classboard;
