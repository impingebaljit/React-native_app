import React, { useState,useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { saveLbs,getLbs, saveFt, saveInc, getFt ,getInc} from "../services/localservice";
import Colors from "../constant/Colors"
import String from "../constant/String"
import Styles from "../constant/Styles"
import Button from "../component.js/Button";

export default function Hook() {
const [lbs, setLbs] = useState("");
const [ft, setFt] = useState("");
const [inc, setInc]=useState("");
const [kg,setKg]=useState();
const [meter,setMeter]=useState();
const [select,setSelect]=useState(false)

const saveValue =() =>{
  saveLbs(lbs) 
  saveFt(ft)
  saveInc(inc)
  }
  
useEffect(()=> {
  getLbs().then(res => { 
    setLbs(res)
    console.log("Check lbs res",JSON.stringify(res))});

    getFt().then(res => { 
      setFt(res)
      console.log("Check ft res",JSON.stringify(res))});

      getInc().then(res => { 
        setInc(res)
        console.log("Check inc res",JSON.stringify(res))});
},[])

const onMetric =()=>{
 let kgs = lbs * 0.453592 ;
 let ms =  ft*0.305 + inc*0.0254;
 setKg(kgs.toString())
 setMeter(ms.toString())
 console.log("check kgs",kgs)
 console.log("check ms",ms)
 setSelect(true)
}

  return (
<View style={Styles.container}>
<Text style={{color:Colors.white}}>{String.Unit}</Text>
<View style={Styles.inputView}>
<TextInput
value={select?kg:lbs}
style={Styles.TextInput}
keyboardType='numeric'
onChangeText={(text) => setLbs(text)}
/>
<Text style={Styles.lbsTextinput}>{select?"kg":"lbs"}</Text>
</View>
{select?     
<View style={Styles.inputView}>
<TextInput
value={meter}
style={Styles.TextInput}
/>
<Text style={Styles.lbsTextinput}>{String.M}</Text>
</View>:  <View style={{flexDirection:'row'}}>
<View style={Styles.inputftView}>
<TextInput
style={Styles.TextInput}
value={ft}
onChangeText={(text) => setFt(text)}
 />
<Text  style={Styles.ftTextInput}>{String.Ft}</Text>
</View >
<View style={Styles.inputftView}>
<TextInput
style={Styles.TextInput}
value={inc}
onChangeText={(text) => setInc(text)}
 />
 <Text style={Styles.inTextInput}>{String.In}</Text>
</View >
</View>} 
<View style={{flexDirection:'row'}}>
<Button btnDesign={Styles.imperialbtn} text={String.Imperial}/>
<Button btnDesign={Styles.metricbtn} click={()=> onMetric()} text={String.Metric} />
</View>
<Button btnDesign={Styles.loginBtn} click={()=>saveValue()} text={String.Save} />
<TouchableOpacity>
<Text style={Styles.restText}>{String.Reset}</Text>
</TouchableOpacity>
    </View>
  );
}
