import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Camera} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../global/components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Tab.Screen name="Camera" component={Camera}  options={{headerShown:false}}/>
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" headerMode="none" initialRouteName="MainApp">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false,}}
        />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{headerShown: false,}}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{headerShown: false,}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
