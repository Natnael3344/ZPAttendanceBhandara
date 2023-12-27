import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-community/async-storage';
import zpApi, { api, config } from '../../api/Api';
export const userImagesService = {
    userImages
};


/*----- Check in Services Start -----*/
async function userImages(imagesData) {
  console.log('Service executed successfully');
    
  
    const myVersion = DeviceInfo.getVersion();
    const versionos = DeviceInfo.getSystemVersion();
    const mobcompany = DeviceInfo.getManufacturer();
    const model = DeviceInfo.getModel();

    const data = Object.assign({}, {
             user_id: imagesData.userId,
             token_id: imagesData.tokenId,
             token_value: imagesData.tokenValue,
             app_version: myVersion,
             os_version: versionos,
             company: mobcompany,
             model: model,
             image_1:imagesData.image_1,
             image_2:imagesData.image_2,
             image_3:imagesData.image_3,
             image_4:imagesData.image_4,
             image_5:imagesData.image_5
    })
   console.log('services');
    try {
        
        const res = await zpApi.post(`${api}${config.endpoint.dataSubmitUrl}`, null, null, data);
        
        return res;
    } catch (error) {
        return await Promise.reject(error);
    }

}

/*----- Check in Services End -----*/
