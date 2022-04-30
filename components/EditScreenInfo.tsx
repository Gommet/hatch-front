import * as WebBrowser from 'expo-web-browser';
import { Button, StyleSheet, TouchableOpacity } from 'react-native';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import React, {useState} from 'react';
import StepNavigation from './stepNavigation';

export default function EditScreenInfo(props: {clues: string[]}) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Clues:
        </Text>
  
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            {props.clues.map((clue:string) => {
              return ( 
              <Text style={styles.getStartedText2}
                lightColor="rgba(0,0,0,0.8)"
                darkColor="rgba(255,255,255,0.8)">- {clue}
              </Text>)})}
        </View>

        
      </View>

      
    </View>
  );
}

/*function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}*/

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'flex-start',
    marginHorizontal: 10,
    marginLeft:40,
  },
  homeScreenFilename: {
    marginVertical: 7,
    marginBottom:5,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    marginTop:10,
    alignItems: 'flex-start',
    marginRight:260,
    width:100,
  },
  getStartedText2: {
    fontSize: 17,
    lineHeight: 24,
    textAlign:'left',
    marginRight:50,
    width:230,
    flexWrap:'wrap',
    paddingLeft:10,


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
  buttonStyle:{
    alignItems:'center',
    alignContent:'center',

    width: 55,
      height:55,
  },
});
