import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Hook from "./screen/Hook";
import Mobx from "./screen/Mobx"
import Colors from './constant/Colors';
const Tab = createMaterialBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
    barStyle={{ backgroundColor: Colors.green}}
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name="HOOKS"
        component={Hook}
      />
      <Tab.Screen
        name="MOBX"
        component={Mobx}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
