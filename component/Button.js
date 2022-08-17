import React, { useState,useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Styles from "../constant/Styles";
import String from "../constant/String";


const Button =(props) => {
    return(
<TouchableOpacity style={props.btnDesign} onPress={props.click}>
<Text style={Styles.btnText}>{props.text}</Text>
</TouchableOpacity>
    )
} 

export default Button;