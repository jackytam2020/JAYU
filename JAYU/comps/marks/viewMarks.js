import React, {useState} from 'react';
import {
    View, 
    SafeAreaView,
    Text, 
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import viewMarkStyles from '../../styles/marks/viewMarkStyles';
import FooterBar from '../footerBar';
import normalize from 'react-native-normalize';


function ViewMark(props){



    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
            <View style={viewMarkStyles.header}>
                <Text style= {viewMarkStyles.back}
                    onPress={()=>{
                        props.navigation.navigate("HomeScreen")
                }}
                > 􀆉 Back</Text>
                <Text style= {viewMarkStyles.title}>Marks</Text>
            </View> 
        
            <ScrollView style ={viewMarkStyles.classesCont}>
                <TouchableOpacity style= {[{backgroundColor:"#FFEBD4"}, viewMarkStyles.classes]}
<<<<<<< HEAD
                    onPress={ () =>{
                        props.navigation.navigate('Marks', 
                        {classname: "Accounting for the Manager", 
                        bg: "#FFEBD4",
                        icon: "􀘝",
                        color: "#FF9500"
=======
                    onPress={()=>{
                        props.navigation.navigate('Marks', 
                            {classname: "Accounting for the Manager", 
                        bg: "#FFEBD4",
                        icon: '􀘝',
                        color: "#FF9500",
                        courseKey: "marksaccounting_create",
                        courseReadKey: "marksaccounting_read",
                        courseDeleteKey: "marksaccounting_delete",
                        courseUpdateKey: "marksaccounting_update"
>>>>>>> 55406c57c4af7f91c80019d1b87218839a50c07c
                    }) 
                    }}>
                    <Text style={[{color:"#FF9500"},viewMarkStyles.circle]}>􀘝</Text>
                    <Text style = {viewMarkStyles.classText}>Accounting for the Manager</Text>
                    
                </TouchableOpacity>


                <TouchableOpacity style= {[{backgroundColor:"#D6F0FC"}, viewMarkStyles.classes]}
<<<<<<< HEAD
                      onPress={ ()=>{
                        props.navigation.navigate('Marks', 
                        {classname: "Advanced Photoshop",
                        bg: "#D6F0FC",
                        icon: "􀀣",
                        color: "#00AEEF"
                    }) 
                    }}>
=======
                onPress={ ()=>{
                    props.navigation.navigate('Marks', 
                    {classname: "Advanced Photoshop",
                    bg: "#D6F0FC",
                    icon: "􀀣",
                    color: "#00AEEF",
                    courseKey: "marksphotoshop_create",
                    courseReadKey: "marksphotoshop_read",
                    courseDeleteKey: "marksphotoshop_delete",
                    courseUpdateKey: "marksphotoshop_update"
                }) 
                }}>
>>>>>>> 55406c57c4af7f91c80019d1b87218839a50c07c
                    <Text style={[{color:"#00AEEF"},viewMarkStyles.circle]}>􀀣</Text>
                    <Text style = {viewMarkStyles.classText}>Advanced Photoshop</Text>
                </TouchableOpacity>

                <TouchableOpacity style= {[{backgroundColor:"#FFF5D7"},viewMarkStyles.classes]}
<<<<<<< HEAD
                    onPress={ () =>{
                        props.navigation.navigate('Marks', 
                        {classname: "Assets Design and Integration", 
                        bg: "#FFF5D7",
                        icon: "􀏀",
                        color: "#FFCF00"
                    }) 
                }}
                >
=======
                 onPress={ () =>{
                    props.navigation.navigate('Marks', 
                    {classname: "Assets Design and Integration", 
                    bg: "#FFF5D7",
                    icon: "􀏀",
                    color: "#FFCF00",
                    courseKey: "marksassets_create",
                    courseReadKey: "marksassets_read",
                    courseDeleteKey: "marksassets_delete",
                    courseUpdateKey: "marksassets_update"
                }) 
                }}>
>>>>>>> 55406c57c4af7f91c80019d1b87218839a50c07c
                    <Text style={[{color:"#FFCF00"},viewMarkStyles.circle]}>􀏀</Text>
                    <Text style = {viewMarkStyles.classText}>Assets Design and Integration</Text>
                </TouchableOpacity>

                <TouchableOpacity style= {[{backgroundColor:"#DEF7E1"},viewMarkStyles.classes]}
                onPress={ () =>{
                    props.navigation.navigate('Marks', 
                    {classname: "Business Communications", 
                    bg: "#DEF7E1",
                    icon: "􀒡",
<<<<<<< HEAD
                    color: "#4CD964"
                }) 
            }}
                >
=======
                    color: "#4CD964",
                    courseKey: "marksbusiness_create",
                    courseReadKey: "marksbusiness_read",
                    courseDeleteKey: "marksbusiness_delete",
                    courseUpdateKey: "marksbusiness_update"    
                }) 
                }}>
>>>>>>> 55406c57c4af7f91c80019d1b87218839a50c07c
                    <Text style={[{color:"#4CD964"},viewMarkStyles.circle]}>􀒡</Text>
                    <Text style = {viewMarkStyles.classText}>Business Communications</Text>
                </TouchableOpacity>

                <TouchableOpacity style= {[{backgroundColor:"#FFDBD8"},viewMarkStyles.classes]}
<<<<<<< HEAD
                 onPress={ () =>{
=======
                onPress={ () =>{
>>>>>>> 55406c57c4af7f91c80019d1b87218839a50c07c
                    props.navigation.navigate('Marks', 
                    {classname: "Design 2", 
                    bg: "#FFDBD8",
                    icon: "􀈌",
<<<<<<< HEAD
                    color: "#FF3B30"
                }) 
            }}
                >
=======
                    color: "#FF3B30",
                    courseKey: "marksdesign2_create",
                    courseReadKey: "marksdesign2_read",
                    courseDeleteKey: "marksdesign2_delete",
                    courseUpdateKey: "marksdesign2_update"      
                }) 
                }}>
>>>>>>> 55406c57c4af7f91c80019d1b87218839a50c07c
                    <Text style={[{color:"#FF3B30"},viewMarkStyles.circle]}>􀈌
                    </Text>
                    <Text style = {viewMarkStyles.classText}>Design 2</Text>
                </TouchableOpacity>

                <TouchableOpacity style= {[{backgroundColor:"#DEDEF7"},viewMarkStyles.classes]}
<<<<<<< HEAD
                 onPress={ () =>{
=======
                onPress={ () =>{
>>>>>>> 55406c57c4af7f91c80019d1b87218839a50c07c
                    props.navigation.navigate('Marks', 
                    {classname: "Professional Sales Skills", 
                    bg: "#DEDEF7",
                    icon: "􀋤",
<<<<<<< HEAD
                    color: "#5856D6"
                }) 
            }}
                >
=======
                    color: "#5856D6",
                    courseKey: "markssales_create",
                    courseReadKey: "markssales_read",
                    courseDeleteKey: "markssales_delete",
                    courseUpdateKey: "markssales_update"     
                }) 
                }}>
>>>>>>> 55406c57c4af7f91c80019d1b87218839a50c07c
                    <Text style={[{color:"#5856D6"},viewMarkStyles.circle]}>􀋤</Text>
                    <Text style = {viewMarkStyles.classText}>Professional Sales Skills</Text>
                </TouchableOpacity>

                <TouchableOpacity style= {[{backgroundColor:"#D0E1FF"},viewMarkStyles.classes]}
<<<<<<< HEAD
                  onPress={ () =>{
=======
                onPress={ () =>{
>>>>>>> 55406c57c4af7f91c80019d1b87218839a50c07c
                    props.navigation.navigate('Marks', 
                    {classname: "Project 2", 
                    bg: "#D0E1FF",
                    icon: "􀉮",
<<<<<<< HEAD
                    color: "#007AFF"
                }) 
            }}
                >
=======
                    color: "#007AFF",
                    courseKey: "marksproject2_create",
                    courseReadKey: "marksproject2_read",
                    courseDeleteKey: "marksproject2_delete",
                    courseUpdateKey: "marksproject2_update" 
                }) 
                }}>
>>>>>>> 55406c57c4af7f91c80019d1b87218839a50c07c
                    <Text style={[{color:"#007AFF"},viewMarkStyles.circle]}>􀉮</Text>
                    <Text style = {viewMarkStyles.classText}>Project 2</Text>
                </TouchableOpacity>

                <TouchableOpacity style= {[{backgroundColor:"#F5EBE2"},viewMarkStyles.classes]}
<<<<<<< HEAD
                              onPress={ () =>{
                                props.navigation.navigate('Marks', 
                                {classname: "Web Development 3", 
                                bg: "#F5EBE2",
                                icon: "􀁛",
                                color: "#C69C6D"
                            }) 
                        }}
                >
=======
                onPress={ () =>{
                    props.navigation.navigate('Marks', 
                    {classname: "Web Development 3", 
                    bg: "#F5EBE2",
                    icon: "􀁛",
                    color: "#C69C6D",
                    courseKey: "markswebdev_create",
                    courseReadKey: "markswebdev_read",
                    courseDeleteKey: "markswebdev_delete",
                    courseUpdateKey: "markswebdev_update"      
                }) 
                }}>
>>>>>>> 55406c57c4af7f91c80019d1b87218839a50c07c
                    <Text style={[{color:"#C69C6D"},viewMarkStyles.circle]}>􀁛</Text>
                    <Text style = {viewMarkStyles.classText}>Web Development 3</Text>
                </TouchableOpacity>
            </ScrollView>
            </View>

            <View style={{width:'100%', height:'10%', position:'absolute', bottom:0}}>
                <FooterBar />
            </View>    
         </SafeAreaView>

    );

};

export default ViewMark;
