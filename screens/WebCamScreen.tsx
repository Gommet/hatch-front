import React, { useState, useEffect } from 'react';
import {LinearGradient} from 'react-native-linear-gradient'
import { StyleSheet } from 'react-native';


export default function WebCam() {

  return (
    <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
      
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