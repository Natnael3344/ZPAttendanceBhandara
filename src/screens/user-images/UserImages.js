import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { userImagesActions } from './UserImages.actions';
import { connect, useDispatch } from 'react-redux';
import { reduxForm } from 'redux-form';
const UserImages = (props) => {
  const [capturedImages, setCapturedImages] = useState(Array(5).fill(null));
  const { handleSubmit} = props;
  const dispatch = useDispatch();
  handleUserImages = async () => {
    try {
      const file1=capturedImages[0];
      const file2=capturedImages[1];
      const file3=capturedImages[2];
      const file4=capturedImages[3];
      const file5=capturedImages[4]; 
      let user_id;
      let token_id;
      let token_value;
      if(props.user1?.data !== undefined)
    {
      token_value = props.user1.data.token_value;
      user_id = props.user1.data.user_id;
      token_id = props.user1.data.token_id;
    }
      
      if (file1 && file2 && file3 && file4 && file5) {
        // Handle your check-in logic here
        // You can use getqr, getlat, getlon, and storedImageUri in your logic
        // ...
        // checkInService.checkIn(userId, tokenId, tokenValue);
        const imagesData = {
          image_1: file1,
          image_2: file2,
          image_3: file3,
          image_4: file4,
          image_5: file5,
          userId:user_id,
          tokenId:token_id,
          tokenValue:token_value
        };
        
        props.userImages(imagesData);
        ToastAndroid.show('Submitted successfully!', ToastAndroid.SHORT);
      } else {
        Alert.alert('Error', 'Please capture all pictures first.');
      }
    } catch (error) {
      console.error('Error retrieving stored image:', error);
    }
  };
  const handleCameraLaunch = (index) => {
    const options = {
      mediaType: 'photo',
      cameraType: 'front',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        const updatedCapturedImages = [...capturedImages];
        updatedCapturedImages[index] = imageUri;
        setCapturedImages(updatedCapturedImages);
        console.log(updatedCapturedImages);
      }
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          {[0, 1].map((index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleCameraLaunch(index)}
              style={{
                backgroundColor: 'transparent',
                borderColor: '#AAA9A9A9',
                borderWidth: 1,
                borderRadius: 5,
                marginBottom: 5,
                flex: 1,
                marginRight: index % 2 === 0 ? 5 : 0, // Add margin only to the first item in each row
              }}>
              <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 16 }}>{`Photo ${index + 1} *`}</Text>
              {capturedImages[index] ? (
                <Image
                  source={{ uri: capturedImages[index] }}
                  style={{ width: 120, height: 120, alignSelf: 'center', marginTop: 5, marginBottom: 5, padding: 10 }}
                />
              ) : (
                <Image
                  source={require('../../assets/png/picture.png')}
                  style={{ width: 120, height: 120, alignSelf: 'center', marginTop: 5, marginBottom: 5, padding: 10 }}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          {[2, 3].map((index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleCameraLaunch(index)}
              style={{
                backgroundColor: 'transparent',
                borderColor: '#AAA9A9A9',
                borderWidth: 1,
                borderRadius: 5,
                marginBottom: 5,
                flex: 1,
                marginRight: index % 2 === 0 ? 5 : 0, // Add margin only to the first item in each row
              }}>
              <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 16 }}>{`Photo ${index + 1} *`}</Text>
              {capturedImages[index] ? (
                <Image
                  source={{ uri: capturedImages[index] }}
                  style={{ width: 120, height: 120, alignSelf: 'center', marginTop: 5, marginBottom: 5, padding: 10 }}
                />
              ) : (
                <Image
                  source={require('../../assets/png/picture.png')}
                  style={{ width: 120, height: 120, alignSelf: 'center', marginTop: 5, marginBottom: 5, padding: 10 }}
                />
              )}
            </TouchableOpacity>
          ))}
        </View>

        <View style={{ flexDirection: 'column', marginBottom: 10 }}>
          <TouchableOpacity
            onPress={() => handleCameraLaunch(4)}
            style={{
              backgroundColor: 'transparent',
              borderColor: '#AAA9A9A9',
              borderWidth: 1,
              borderRadius: 5,
              marginBottom: 5,
            }}>
            <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 16 }}>Photo 5 *</Text>
            {capturedImages[4] ? (
              <Image
                source={{ uri: capturedImages[4] }}
                style={{ width: 120, height: 120, alignSelf: 'center', marginTop: 5, marginBottom: 5, padding: 10 }}
              />
            ) : (
              <Image
                source={require('../../assets/png/picture.png')}
                style={{ width: 120, height: 120, alignSelf: 'center', marginTop: 5, marginBottom: 5, padding: 10 }}
              />
            )}
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <View style={{ flex: 1, marginRight: 5 }}>
            <Button title="Submit" onPress={handleSubmit(this.handleUserImages)} color="#00c853" style={{ marginTop: 10 }} />
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <Button title="Back" onPress={() => {}} color="#ff5252" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};



const mapStateToPros = (state) => {
  return ({ 
      user1:state.login.user,
      user: state.userImages,
      loading : state.userImages.loading,
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    userImages: (values) => dispatch(userImagesActions.userImages(values)),
     
  }
}

Images = connect(
  mapStateToPros,
  mapDispatchToProps
)(UserImages)



export default reduxForm({
  form: 'Images',
  
  
})(Images);