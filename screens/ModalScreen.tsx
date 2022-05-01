import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, Button } from 'react-native';
import {IconButton, Colors} from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import EditScreenInfo from '../components/EditScreenInfo';
import StepNavigation from '../components/stepNavigation';
import { Text, View } from '../components/Themed';
import {LinearGradient} from 'react-native-linear-gradient'
import  SessionScreen  from  './SessionScreen';
import  WebCamScreen  from  './WebCamScreen';
import { NavigationContainer } from '@react-navigation/native';

//const Stack = createNativeStackNavigator();


export default function ModalScreen() {
  
  const [nameCatche, setNameCache] = useState("Primer Cache");
  const [totalNumCaches, setTotalNumCaches] = useState(5);
  const [indexCurrentCatche, setIndexCurrentCatche] = useState(0);
  const [cluesList, setClueList] = useState(["Clue 1", "Clue 2"]);
  const [currentStep, setCurrentStep] = useState(1);
  const navigation = useNavigation();

  useEffect(() => {
    
  }, []);

  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
      <View style={styles.container}>
        <Text style={styles.title}>{nameCatche}</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={{flex:1, paddingLeft:10}}>
          <EditScreenInfo clues={cluesList}/>
        </View>
        <View style={{flex:1, paddingRight:0, width:0, marginTop:-80, paddingBottom:400}}>
          <StepNavigation labelArray={Array.from({ length: totalNumCaches }, (_, i) => i + 1)} currentItem={currentStep}></StepNavigation>
        </View>
        {/*<Button title="" onPress={() => {<NavigationContainer>
                  <Stack.Navigator initialRouteName="WebCam">
                   
                    <Stack.Screen name="WebCam" component={WebCamScreen} />
   
                  </Stack.Navigator>
        </NavigationContainer> }}/>*/}
      </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:25,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttonStyle:{
    
    alignContent:'center',
    
    width: 55,
      height:55,
      marginBottom:20,
      textAlignVertical:'center',
  },
  linearGradient: {
    alignItems:'center',
    justifyContent: 'center',
    borderRadius:5,
  },
});

