import { useLinkProps } from '@react-navigation/native';
import React, {useState} from 'react';
import Step from './step';
import { View } from './Themed';

export default function StepNavigation(props: {labelArray: number[], currentItem:number}){
    return(
        <View>
            {props.labelArray.map((item:number) => {return (<Step step={item} current_step={props.currentItem}></Step>)})}
        </View>
        
    );
}