import React,{useState} from 'react';
import {View,Text, Button, TextInput, ImageBackground, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import postStyle from '../../styles/classBoard/postStyle';
import FooterBar from '../../comps/footerBar';
import normalize from 'react-native-normalize'
import CommentBox from '../classBoard/commentsBox'

function Post(props){
    const [upvotes, setUpvotes] = useState(0);
    const [replieUpVotes, setReplieUpVotes] = useState(0);
    const [RepliesValue, setRepliesValue] = useState("");
    const [replies, setReplies] = useState([1,1,1]);
    const [likes,setLikes] = useState(0);

    var answer = "";

  return (
      <SafeAreaView style={postStyle.container}>
        
        <View style={postStyle.navBar}>
            <TouchableOpacity style={{position:'relative', width:"20%"}}
                onPress={()=>{
                    props.navigation.goBack()
             }}>
                <Text style={{fontSize:20, marginLeft:20, color:'#007AFF'}}>back</Text>
            </TouchableOpacity>
        </View>

        {/* The Post */}
        <View style={postStyle.post}>
            <View style={postStyle.subject}>
                <View style={postStyle.leftSubject}>
                    <View style={{height:20,width:20, backgroundColor:"red", borderRadius:40}}></View>
                    <View style={{paddingLeft:10}}>  
                        <Text>{props.navigation.getParam("course")}</Text>
                        <Text style={{fontSize:10, color:'grey'}}>{props.navigation.getParam("time")} by {props.navigation.getParam("user")}</Text>
                    </View>  
                </View>
                <View style={postStyle.rightSubject}>
                    <Text>{upvotes}</Text>
                    <Text style={{fontSize:8, color:'grey'}}>upvotes</Text>
                </View>
            </View>
        </View>

        <View style={postStyle.line}></View>

        <View style={postStyle.questionBox}>
            <View style={postStyle.question}>
                <Text>{props.navigation.getParam("question")}</Text>
            </View>
        </View>

        {/* Attachment area */}
        <View style={postStyle.attachmentBox}>
            {/* there should be no child elements here if user does not have an attachment */}
            { /* <ImageBackground
            source={require('../../assets/BackgroundImages/original.png')} style={{width:'100%', height:200}}
            />
            */}
        </View>

        {/* Response box */}
        <View style={postStyle.responseContainer}>
            <View style={postStyle.responseBox}>
                <TextInput 
                    clearTextOnFocus={true}
                    onChangeText={(text) => {answer = text}}
                    defaultValue={"Type your answer"}
                    multiline={true}
                    style={{width:'80%',left:10, color:'grey'}}
            
                />
                <Button 
                    title={'Send'}
                    onPress={()=>{
                        
                        var arr = replies;
                              arr.push(1);
                              arr = arr.map((o)=>{
                                  return o;
                              })

                              console.log(answer)
                    
                    }}
                />
            </View>
        </View>

        {/* Replies section */}
        <View style={postStyle.repliesContainer}>
            <ScrollView>
            {  
                replies.map((obj,i)=>{
                    return <CommentBox 
                    answer={obj.answer}
                    />
                })
                
            }
            </ScrollView>

        </View>

        <View style={{height:'10%', width:'100%', position:'absolute', bottom:0}}>
            <FooterBar/>
          </View>
       
      </SafeAreaView>
    )
  }
export default Post;