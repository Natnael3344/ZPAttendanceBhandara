// @flow 

import axios from 'axios';
import DeviceInfo from 'react-native-device-info';
import zpApi, { api, config } from '../../api/Api';
import AsyncStorage from '@react-native-community/async-storage';
export const checkInService = {
    checkIn
};


/*----- Check in Services Start -----*/
async function checkIn(checkInData) {
  console.log('Service executed successfully');
  console.log('USer',checkInData.image_1);
  console.log(checkInData.userId);
    // const { image_1, lat, lng } = values;
    
  
    const myVersion = DeviceInfo.getVersion();
    const versionos = DeviceInfo.getSystemVersion();
    const mobcompany = DeviceInfo.getManufacturer();
    const model = DeviceInfo.getModel();
    const storedImageUri = await AsyncStorage.getItem('capturedImage');
    const storedLat = await AsyncStorage.getItem('capturedLat');
    const storedLon = await AsyncStorage.getItem('capturedLon');
    const storedQrCode = 'test'; // Replace with actual source

    const data = Object.assign({}, {
             user_id: checkInData.userId,
             token_id: checkInData.tokenId,
             token_value: checkInData.tokenValue,
             app_version: myVersion,
             os_version: versionos,
             company: mobcompany,
             model: model,
             qr_code: storedQrCode, //add qr code 
             image_1:checkInData.image_1,     // add the image
             lat:checkInData.lat, // add latitude
             lng:checkInData.lng, // add longitude
    })
   console.log('services');
    try {
        
        const res = await zpApi.post(`${api}${config.endpoint.checkInUrl}`, null, null, data);
        
        return res;
    } catch (error) {
        return await Promise.reject(error);
    }

}

/*----- Check in Services End -----*/
