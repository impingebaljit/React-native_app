import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../constant/Styles';
import String from '../constant/String';
import Colors from '../constant/Colors';
const HelloWorldApp = () => {
  return (
    <View
      style={Styles.mobxContainer}>
      <Text style={{color:Colors.white}}>{String.Coming}</Text>
    </View>
  )
}
export default HelloWorldApp;