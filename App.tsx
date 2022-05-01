import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, TouchableOpacity } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from 'react-navigation';
import React, { Component } from 'react';
import  ModalScreen  from './screens/ModalScreen'; 
import  SessionScreen  from  './screens/SessionScreen';
import  WebCamScreen  from  './screens/WebCamScreen';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

/*export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const Stack = createNativeStackNavigator();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator  initialRouteName="EnterSession">
          <Stack.Screen 
            name="EnterSession" 
            component={SessionScreen}
            options={({ navigation }) => ({
              title: 'Awesome app',
              navigate: () => (
                <Button title="" onPress={() => navigation.navigate("Cache")} />
              ),
            })}/>
          <Stack.Screen name="Cache" component={ModalScreen} />
          <Stack.Screen name="WebCam" component={WebCamScreen} />
        </Stack.Navigator>
      </NavigationContainer> 
    );
  }
}*/
/*const AppNavigator = StackNavigator({
  Setting: { screen: ModalScreen },
  Home: { screen: SessionScreen },
  WebCam: {screen:WebCamScreen},
});
export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
*/
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="EnterSession">
        <Stack.Screen name="EnterSession" component={SessionScreen}/>
        <Stack.Screen name="Cache" component={ModalScreen} />
        <Stack.Screen name="WebCam" component={WebCamScreen} />
      </Stack.Navigator>
    </NavigationContainer> 
    );
  }
}


