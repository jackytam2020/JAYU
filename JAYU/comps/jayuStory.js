import React from 'react';
import { storiesOf } from '@storybook/react-native';
import SignIn from './setup/SignIn';
import Term from './setup/Term';
import SetUp from  './setup/SetUp';
import Passcode from  './setup/Passcode';
import PasscodeInput from  './setup/PasscodeInput';
import PasscodeReInput from  './setup/PasscodeReInput';
import FaceID from  './setup/FaceID';
import Subject from  './setup/Subject';
import HomeScreen from './homescreen/homescreen'
import Schedule from './calendar/calendar';
import Classboard from './classBoard/classboard'
import Marks from './marks/marks'
import Tophw from './homework/Top'
import NewClass from './calendar/newClass'
import AdjustingClass from './calendar/adjustingClass'
import Post from './classBoard/post'
import NewPost from './classBoard/newPost'
import ComposePost from './classBoard/composePost'
import NewMark from './marks/newMark'
import EditMark from './marks/editMark'
import ViewMark from  './marks/viewMarks'
import DatePick from './homework/datePicker'


storiesOf("JayU", module)
    .add("SignIn", ()=>{
        return <SignIn/>
    })

storiesOf("JayU", module)
    .add("Term", ()=>{
        return <Term/>
    })

storiesOf("JayU", module)
    .add("SetUp", ()=>{
        return <SetUp/>
    })

storiesOf("JayU", module)
    .add("Passcode", ()=>{
        return <Passcode/>
    })

 storiesOf("JayU", module)
    .add("Subject", ()=>{
        return <Subject/>
    })

storiesOf("JayU", module)
    .add("HomeScreen", ()=>{
        return <HomeScreen/>
    })
  
storiesOf("JayU", module)
    .add("Schedule", ()=>{
        return <Schedule/>
    })    

 storiesOf("JayU", module)
    .add("Tophw", ()=>{
        return <Tophw/>
    })    

storiesOf("JayU", module)
    .add("Classboard", ()=>{
        return <Classboard/>
    })    

storiesOf("JayU", module)
    .add("Marks", ()=>{
        return <Marks/>
    })  

storiesOf("JayU", module)
    .add("ViewMark", ()=>{
        return <ViewMark/>
    })


storiesOf("JayU", module)
    .add("NewClass", ()=>{
        return <NewClass/>
    })  

storiesOf("JayU", module)
    .add("AdjustingClass", ()=>{
        return <AdjustingClass/>
    })  

storiesOf("JayU", module)
    .add("Post", ()=>{
        return <Post/>
    })  

storiesOf("JayU", module)
    .add("NewPost", ()=>{
        return <NewPost/>
    })  

storiesOf("JayU", module)
    .add("ComposePost", ()=>{
        return <ComposePost/>
    })  

storiesOf("JayU", module)
    .add("ComposePost", ()=>{
        return <ComposePost/>
    })  

storiesOf("JayU", module)
    .add("ComposePost", ()=>{
        return <ComposePost/>
    })  

    
storiesOf("JayU", module)
    .add("ComposePost", ()=>{
        return <DatePick/>
    })  