import React, { useState, useEffect } from 'react';
import {LinearGradient} from 'react-native-linear-gradient'
import { StyleSheet } from 'react-native';
import { Button, View, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import  ModalScreen  from './ModalScreen'; 
import  SessionScreen  from  './SessionScreen';
import  WebCamScreen  from  './WebCamScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//const Stack = createNativeStackNavigator();

export default function EnterSession() {


    const onChangeText = () => {
        
    }

  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Enter Session</Text>
            <TextInput
                onChangeText={onChangeText}
                value={"Session"}
            />
            {/*<Button
                title="Go to Details"
                onPress={() => {<NavigationContainer>
                  <Stack.Navigator initialRouteName="Cache">
                   
                    <Stack.Screen name="Cache" component={ModalScreen} />
   
                  </Stack.Navigator>
                </NavigationContainer> }}
            />*/}
        </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({ 
    linearGradient: {
      alignItems:'center',
      justifyContent: 'center',
      borderRadius:5,
    },
  });