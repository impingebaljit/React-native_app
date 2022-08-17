'use strict';
import {StyleSheet} from 'react-native';
import Colors from "../constant/Colors"

export default StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor:Colors.lightBlack,
          alignItems: "center",
          justifyContent: "center",
        },
        inputView: {
          height:40,
          width:"80%",
          borderRadius:20,
          borderColor:Colors.white,
          borderWidth:1,
          margin:10,
          flexDirection:'row',
          right:15
        },
        TextInput: {
          height: 50,
          flex: 1,
          padding: 10,
          marginLeft: 20,
          color:Colors.white,
          justifyContent:"center", 
          alignSelf:'center',
          right:15
        },
        inputftView: {
          height:40,
          width:"35%",
          borderRadius:20,
          borderColor:Colors.white,
          borderWidth:1,
          margin:15,
          alignItems:'center',
          flexDirection:'row',
          right:15
        },
      btnText:{
      color:Colors.white
      },
        loginBtn: {
          width: "80%",
          borderRadius: 25,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
          backgroundColor:Colors.green,
        },
        imperialbtn: {
          width: "45%",
         borderBottomLeftRadius:15,
         borderTopLeftRadius:15,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 5,
          backgroundColor:Colors.green,
        },
        metricbtn: {
          width: "45%",
          borderBottomRightRadius:15,
          borderTopRightRadius:15,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 5,
          backgroundColor:Colors.green,
        },
        lbsTextinput:{
         color:Colors.white, 
         justifyContent:"center",
         alignSelf:'center',
        left:30
        },
        ftTextInput:{
          color:Colors.white,  
          alignSelf:'center',
          left:22,
        },
        inTextInput:{
          color:Colors.white, 
          justifyContent:"center", 
          alignSelf:'center',
         left:25
        },
        restText:{
         color:Colors.sky_blue,
         marginTop:20
        },
        mobxContainer:{
          backgroundColor:Colors.lightBlack,
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }

        })