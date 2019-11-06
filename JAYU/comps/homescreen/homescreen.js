
import React, {useState} from 'react';
import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import styles from '../../styles/homescreen/homescreenStyle';


function HomeScreen(props){
    const [expand, setExpand] = useState("expand")
    const [barHeight, setBarHeight] = useState(0.08)
    const [showItems, setShowItems] = useState(styles.hideItems)
  return (
        <ImageBackground source={require('../../assets/BackgroundImages/original.png')} style={{flex:1, justifyContent:'flex-end'}}>
            <View style={styles.home}>
               
               <View style={styles.greetingBox}>
                   <View style={styles.greetingRow}>
                       <Text style={{fontSize:25, color:'white'}}>Good morning Irvin</Text>
                       <Text style={{fontSize:15, color:'white'}}>so far, you're doing great!</Text>
                       <Text style={{fontSize:15, color:'white'}}>46% of today's progress</Text>
                       <Text style={{fontSize:15, color:'white'}}>20 tasks left</Text>
                   </View>
               </View>

               {/* Deadline bar */}
               <View style={{ flex:barHeight,flexDirection:'row',justifyContent:'center', top:20}}>
                   <View style={styles.deadlineRow}>
                       <View style={styles.deadlineTitle}>
                           <Text style={{fontSize:15}}>coming up next</Text>
                           <Text style={{fontSize:10, color:'grey'}}
                           onPress={()=>{
                               if(expand == 'expand'){
                                setExpand('collapse')
                                setShowItems(styles.itemContainer);
                                setBarHeight(0.23)
                               }
                               if(expand == 'collapse'){
                                setExpand('expand')
                                setShowItems(styles.hideItems);
                                setBarHeight(0.08)
                            }
                           }}
                           >{expand}</Text>
                       </View>
                       <View style={showItems}>
                            <View style={{flexDirection:"row", marginBottom:5}}>
                                <Text style={{color:'grey'}}>Design 2 exam in 1 week</Text>
                            </View>
                            <View style={{flexDirection:"row", marginBottom:5}}>
                                <Text style={{color:'grey'}}>Business Communication exam in 2 weeks</Text>
                            </View>
                            <View style={{flexDirection:"row", marginBottom:5}}>
                                <Text style={{color:'grey'}}>Project 2 weekly report due tomorrow</Text>
                            </View>
                            <View style={{flexDirection:"row", marginBottom:5}}>
                                <Text style={{color:'grey'}}>Sales Presentation due in 2 days</Text>
                            </View>
                       </View>
                   </View>
               </View>
            
            {/* Bottom Section for main modules */}

            <View style={styles.bottomContainer}>
                <View style={styles.bottom}>
                    <View style={{flex:0.30}}>
                        <View style={styles.boxItems}>
                            <View style={styles.boxRow}>
                                <View style={{flex:0.25}}></View>
                                <TouchableOpacity style={{flex:0.75}}
                                     onPress={()=>{
                                        props.navigation.navigate('Schedule')
                                     }}
                                >
                                    <Text style={{fontSize:15}}>Calendar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>   

                    <View style={{flex:0.30}}>
                        <View style={styles.boxItems}>
                            <View style={styles.boxRow}>
                                <View style={{flex:0.25}}></View>
                                <TouchableOpacity style={{flex:0.75}}
                                    onPress={()=>{
                                        props.navigation.navigate('Homework')
                                     }}
                                >
                                    <Text style={{fontSize:15}}>Homework</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                     <View style={{flex:0.30}}>
                        <View style={styles.boxItems}>
                            <View style={styles.boxRow}>
                                <View style={{flex:0.25}}></View>
                                <TouchableOpacity style={{flex:0.75}}
                                     onPress={()=>{
                                        props.navigation.navigate('Classboard')
                                    }}
                                >
                                    <Text style={{fontSize:15}}>ClassBoard</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>  

                    <View style={{flex:0.30}}>
                        <View style={styles.boxItems}>
                            <View style={styles.boxRow}>
                                <View style={{flex:0.25}}></View>
                                <TouchableOpacity style={{flex:0.75}}
                                    onPress={()=>{
                                        props.navigation.navigate('Marks')
                                    }}
                                >
                                    <Text style={{fontSize:15}}>View Marks</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>  

  

                </View>        
            </View>     

            </View>
        </ImageBackground>
  )
}

export default HomeScreen;
