import React, {useState} from 'react';
import { Text, View } from './Themed';
import * as WebBrowser from 'expo-web-browser';
import { Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';

export default function Step(props: {step:number, current_step:number}){

  const handleProgressStyles = (step:number, current_step:number) => {
    if (step < current_step) return styles.getStartedContainerCircleDone
    else if(step == current_step) return styles.getStartedContainerCircleActual
    else return styles.getStartedContainerCirclePending
  }

    return(
      <View style={styles.getStartedContainerCircleWrapper}>
        <View style={handleProgressStyles(props.step, props.current_step)}> 
          <Text style={styles.getStartedText}>{props.step.toString()}</Text>
        </View>
      </View>

    );
    /*
    <View style={styles.getStartedContainerStepBlock }>
    {/*<View style={styles.getStartedContainerCircleWrapper}>
    <View style={handleProgressStyles(props.step, props.current_step)}> 
    <Text style={styles.getStartedText}>{props.step.toString()}</Text>
  </View>
 </View>
</View>*/
}
const styles = StyleSheet.create({
    getStartedContainerCircleWrapper: {
      alignItems: 'stretch',
      marginHorizontal: 50,   
      backgroundColor:'orange',
      width:0,
    },
    getStartedContainerCircleDone: {
      alignItems: 'center',
      marginHorizontal: 50,
      width: 35,
      height:35,
      lineHeight:20,
      backgroundColor:'green',
      color:'white',
      borderRadius:50,
      borderColor:'green',
      borderWidth:4,
    },
    getStartedContainerCircleActual: {
      alignItems: 'center',
      marginHorizontal: 50,
      width: 35,
      height:35,
      lineHeight:5,
      backgroundColor:'white',
      borderRadius:50,
      borderColor:'green',
      borderWidth:4,
    },
    getStartedContainerCirclePending: {
      alignItems: 'center',
      marginHorizontal: 50,
      alignContent:'center',
      width: 35,
      height:35,
      lineHeight:5,
      borderRadius:50,
      borderWidth:4,
      borderColor:'gray',
      backgroundColor:'gray',
      color:'white',
      
    },
    homeScreenFilename: {
      marginVertical: 7,
    },
    codeHighlightContainer: {
      borderRadius: 3,
      paddingHorizontal: 4,
    },
    getStartedText: {
      fontSize: 17,
      lineHeight: 24,
      textAlign: 'center',
    },
    helpContainer: {
      marginTop: 15,
      marginHorizontal: 20,
      alignItems: 'center',
    },
    helpLink: {
      paddingVertical: 15,
    },
    helpLinkText: {
      textAlign: 'center',
    },
  });