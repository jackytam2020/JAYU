import React,{useState} from 'react';
import {View,Text, Button, TextInput, ImageBackground, ScrollView} from 'react-native';
import postStyle from '../styles/postStyle';

function Post(){
    const [upvotes, setUpvotes] = useState(0);
    const [replieUpVotes, setReplieUpVotes] = useState(0);
    const [value, setValue] = useState("Type your answer");
    const [RepliesValue, setRepliesValue] = useState("");
  return (
      <View style={postStyle.container}>
        
        <View style={postStyle.navBar}>
            <View style={{position:'relative', width:"20%"}}>
                <Button title={"Back"}/>  
            </View>
        </View>

        {/* The Post */}
        <View style={postStyle.post}>
            <View style={postStyle.subject}>
                <View style={postStyle.leftSubject}>
                    <View style={{height:20,width:20, backgroundColor:"red", borderRadius:40}}></View>
                    <View style={{paddingLeft:10}}>  
                        <Text>Advanced Photoshop</Text>
                        <Text style={{fontSize:10, color:'grey'}}>9:15pm by Doris</Text>
                    </View>  
                </View>
                <View style={postStyle.rightSubject}>
                    <Text>{upvotes}</Text>
                    <Text style={{fontSize:10, color:'grey'}}>upvotes</Text>
                </View>
            </View>
        </View>

        <View style={postStyle.line}></View>

        <View style={postStyle.questionBox}>
            <View style={postStyle.question}>
                <Text>What does Primary Text Frame do in inDesign?</Text>
            </View>
        </View>

        {/* Attachment area */}
        <View style={postStyle.attachmentBox}>
            <ImageBackground 
                source={{url:'https://www.petmd.com/sites/default/files/senior-golden-retriever-with-ball-picture-id488657289.jpg'}}
                style={{width:'100%', height:'100%'}}
            />
        </View>

        {/* Response box */}
        <View style={postStyle.responseContainer}>
            <View style={postStyle.responseBox}>
                <TextInput 
                    onChangeText={text => setValue(text)}
                    value={value}
                    multiline={true}
                    style={{width:'80%',left:10, color:'grey'}}
                />
                <Button 
                    title={'Send'}
                    onPress={()=>{
                        setRepliesValue(value)
                        setValue("Type your answer")
                    }}
                />
            </View>
        </View>

        {/* Replies section */}
        <View style={postStyle.repliesContainer}>
            <View style={postStyle.repliesBox}>
                <View style={postStyle.repliesTop}>
                    <View style={postStyle.repliesName}>
                        <Text>Mitch</Text>
                        <Text style={{fontSize:10, color:'grey'}}>1:20 PM</Text>
                    </View>
                    <View style={[postStyle.repliesVotes]}>
                        <Text style={{paddingRight:5}}>{replieUpVotes}</Text>
                    </View>
                </View>
                <View style={postStyle.repliesBot}>
                    <Text>{RepliesValue}</Text>
                </View>
            </View>
        </View>
       
      </View>
    )
  }
export default Post;
