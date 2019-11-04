import React from 'react';
import {View,Text,Button} from 'react-native';
import classBoardStyles from '../styles/classBoardStyles'


function Classboard(){
  return (
      <View style={classBoardStyles.container}>
          <View style={classBoardStyles.navBar}>
            <Button 
              title={"Back"}
            />
            <Text style={{fontSize:20}}>ClassBoard</Text>
            <Button 
              title={"Post"}
            />
          </View>

          {/* Posts */}
          <View style={classBoardStyles.posts}>
            <View style={{flexDirection:"row", paddingLeft:10}}>
                  <View style={{height:20,width:20, backgroundColor:"blue", borderRadius:40}}></View>
                  <View style={{paddingLeft:10}}>  
                    <Text>Advanced Photoshop</Text>
                    <Text style={{fontSize:10}}>9:15pm by Doris</Text>
                  </View>  
            </View>

            <View style={classBoardStyles.line}></View>  

            <Text style={{paddingLeft:10}}>For Assignment 3 do we name the file</Text>
          </View>

          <View style={classBoardStyles.posts}>
            <View style={{flexDirection:"row", paddingLeft:10}}>
                  <View style={{height:20,width:20, backgroundColor:"blue", borderRadius:40}}></View>
                  <View style={{paddingLeft:10}}>  
                    <Text>Advanced Photoshop</Text>
                    <Text style={{fontSize:10}}>9:15pm by Doris</Text>
                  </View>  
            </View>

            <View style={classBoardStyles.line}></View>  

            <Text style={{paddingLeft:10}}>For Assignment 3 do we name the file</Text>
          </View>

          <View style={classBoardStyles.posts}>
            <View style={{flexDirection:"row", paddingLeft:10}}>
                  <View style={{height:20,width:20, backgroundColor:"blue", borderRadius:40}}></View>
                  <View style={{paddingLeft:10}}>  
                    <Text>Advanced Photoshop</Text>
                    <Text style={{fontSize:10}}>9:15pm by Doris</Text>
                  </View>  
            </View>

            <View style={classBoardStyles.line}></View>  

            <Text style={{paddingLeft:10}}>For Assignment 3 do we name the file</Text>
          </View>
        
      </View>
    )
  }
  export default Classboard;
