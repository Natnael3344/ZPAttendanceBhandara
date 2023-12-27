import Geolocation from '@react-native-community/geolocation';
import React, { useEffect, useRef, useState } from 'react';
    import {
      View,
      Text,
      ScrollView,
      Image,
      TouchableOpacity,
      Button,
      StyleSheet,
      ActivityIndicator,
      Alert,
      ToastAndroid,
    } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import MapView, { Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Camera, useCameraDevice, useCameraDevices } from 'react-native-vision-camera';
import { checkInActions } from './CheckIn.actons';
import { connect, useDispatch, useSelector  } from 'react-redux';
import { reduxForm } from 'redux-form';
import { checkInService } from './CheckIn.services';
const CheckIn = (props) => {
  const { handleSubmit} = props;
  const dispatch = useDispatch();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [region, setRegion] = useState(null);
  const [getqr, setGetqr] = useState('');
  useEffect(() => {
    console.log('Getting live location...');
    
    const watchId = Geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        storeLatOffline(latitude);
        storeLonOffline(longitude);
      },
      
      (error) => console.log('Error getting location:', error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    
    console.log('region',region);
    // Cleanup on component unmount
    return () => {
      console.log('Clearing watchId:', watchId);
      Geolocation.clearWatch(watchId);
    };
  }, []);
  useEffect(()=>{checkPermission()},[]);
  const checkPermission = async() => {
const newCameraPermission= await Camera.requestCameraPermission();
console.log(newCameraPermission);
  }
 
  const storeImageOffline = async (imageUri) => {
    try {
      // Store the captured image URI using AsyncStorage
      await AsyncStorage.setItem('capturedImage', imageUri);
      console.log('Image stored offline:', imageUri);
    } catch (error) {
      console.error('Error storing image offline:', error);
    }
  };
  const storeLatOffline = async (getLat) => {
    try {
      // Store the captured image URI using AsyncStorage
      await AsyncStorage.setItem('capturedLat', getLat.toString());
      console.log('Lat stored offline:', getLat);
    } catch (error) {
      console.error('Error storing latitude offline:', error);
    }
  };
  const storeLonOffline = async (getLon) => {
    try {
      // Store the captured image URI using AsyncStorage
      await AsyncStorage.setItem('capturedLon', getLon.toString());
      console.log('Lon stored offline:', getLon);
    } catch (error) {
      console.error('Error storing longtiude offline:', error);
    }
  };
  const handleRefreshLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        storeLatOffline(latitude);
        storeLonOffline(longitude);
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
  handleCameraLaunch = () => {
    const options = {
      mediaType: 'photo',
      cameraType:'front',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
    
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled camera');
        setIsCameraOpen(false);
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
        setIsCameraOpen(false);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setCapturedImage(imageUri);
        console.log(imageUri);
        setIsCameraOpen(false);
        storeImageOffline(imageUri);
      }
    });
  }
   handleCheckIn = async () => {
    try {
      const storedImageUri = await AsyncStorage.getItem('capturedImage');
      setGetqr('test');
      const storedLat = await AsyncStorage.getItem('capturedLat');
      const storedLon = await AsyncStorage.getItem('capturedLon');
      let user_id;
      let token_id;
      let token_value;
      if(props.user1?.data !== undefined)
    {
      token_value = props.user1.data.token_value;
      user_id = props.user1.data.user_id;
      token_id = props.user1.data.token_id;
    }
      
      if (storedImageUri) {
        // Handle your check-in logic here
        // You can use getqr, getlat, getlon, and storedImageUri in your logic
        // ...
        // checkInService.checkIn(userId, tokenId, tokenValue);
        const checkInData = {
          image_1: storedImageUri,
          lat: storedLat,
          lng: storedLon,
          userId:user_id,
          tokenId:token_id,
          tokenValue:token_value
        };
        console.log(checkInData);
        props.checkIn(checkInData);
        ToastAndroid.show('Check-in successful!', ToastAndroid.SHORT);
      } else {
        Alert.alert('Error', 'Please capture a selfie first.');
      }
    } catch (error) {
      console.error('Error retrieving stored image:', error);
    }
  };

      return (
        <View style={{ flex: 1 }}>
          
          <View style={{ flex: 1, flexDirection: 'column' }}>
            
            <ScrollView>
                <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'space-between',paddingHorizontal:20 }}>
                <View style={{ backgroundColor: 'transparent',borderColor: '#AAA9A9A9',borderWidth: 1,borderRadius: 5, marginBottom: 10, }}>
          <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 18, fontWeight:'bold',color:'black',marginHorizontal:10 }}>
            1. Take a selfie
          </Text>
          <TouchableOpacity onPress={handleCameraLaunch} // Open Camera
            > 
            {capturedImage ? (
                  <Image source={{ uri: capturedImage }} style={{ width: 120, height: 120, alignSelf: 'center', marginTop: 5, marginBottom: 5, padding: 10 }} />
                ) : (
          <Image
            source={require('../../assets/png/picture.png')}  // Set the image URI
            style={{ width: 120, height: 120, alignSelf: 'center', marginTop: 5, marginBottom: 5, padding:10 }}
          />)}
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: 'transparent',borderColor: '#AAA9A9A9',borderWidth: 1,borderRadius: 5, marginBottom: 10, }}>
          <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 18, fontWeight:'bold',color:'black',marginHorizontal:10 }}>
            2. Scan QR code
          </Text>
          <Image
            source={require('../../assets/png/scanqr.png')}  // Set the image URI
            style={{ width: 120, height: 120, alignSelf: 'center', marginTop: 5, marginBottom: 5,padding:10 }}
          />
        </View>
              </View>
              
              
        <View style={{ width: '100%', height: 350, padding: 10 }}>
          <MapView
            style={{ flex: 1 }}
            region={region}
          >
            {region && (
              <Marker
                coordinate={{ latitude: region.latitude, longitude: region.longitude }}
                title="Live Location"
                description="This is the live location"
                
              />
            )}
          </MapView>
        </View>
     
             
             
              <View style={{ margin: 5,  }}>
                
              <TouchableOpacity
                  style={{
                    flex: 1,
                    margin: 5,
                    marginHorizontal:20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:'#c0d2d4',
                    borderRadius:5,
                    height:50
                  }} onPress={handleRefreshLocation}>
                  <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>Referesh Location</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={handleSubmit(this.handleCheckIn)}
                  style={{
                    flex: 1,
                    margin: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:'#00c853',
                    borderRadius:5,
                    height:50
                  }}>
                  <Text style={{fontSize:18,fontWeight:'bold',color:'white'}}>Submit</Text>
                </TouchableOpacity>
              </View>
              
            </ScrollView>
          </View>
       
        </View>
      );
    };
    
  
const mapStateToPros = (state) => {
  return ({ 
      user1:state.login.user,
      user: state.checkIn,
      loading : state.checkIn.loading,
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
      checkIn: (values) => dispatch(checkInActions.checkIn(values)),
     
  }
}

Check = connect(
  mapStateToPros,
  mapDispatchToProps
)(CheckIn)



export default reduxForm({
  form: 'Check',
  
  
})(Check);