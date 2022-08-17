import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveLbs = details => {
 AsyncStorage.setItem('lbs', JSON.stringify(details));
 console.log('check local lbs', JSON.stringify(details));
};

export const getLbs = async () => {
 const response = await AsyncStorage.getItem('lbs');
 const res = JSON.parse(response);
 return res;
};



export const saveFt = details => {
    AsyncStorage.setItem('ft', JSON.stringify(details));
    console.log('check local ft', JSON.stringify(details));
   };
   
   export const getFt = async () => {
    const response = await AsyncStorage.getItem('ft');
    const res = JSON.parse(response);
    return res;
   };

   export const saveInc = details => {
    AsyncStorage.setItem('inc', JSON.stringify(details));
    console.log('check local inc', JSON.stringify(details));
   };
   
   export const getInc = async () => {
    const response = await AsyncStorage.getItem('inc');
    const res = JSON.parse(response);
    return res;
   };