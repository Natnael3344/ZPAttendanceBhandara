import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Button,
} from 'react-native';

const UserImages = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <View
        style={{
          height: 55,
          backgroundColor: '#005a64', 
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>
          Attach Image
        </Text>
      </View> */}

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <View style={{ flex: 1, marginRight: 5 }}>
            <View style={{backgroundColor: 'transparent',borderColor: '#AAA9A9A9',borderWidth: 1,borderRadius: 5, marginBottom: 5, }}>
              <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 16 }}>
                Photo 1 *
              </Text>
              <Image
                source={{ uri: '../assets/png/picture.png' }} // Set the image URI
                style={{ width: 150, height: 150, alignSelf: 'center', marginTop: 5, marginBottom: 5 }}
              />
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <View style={{backgroundColor: 'transparent',borderColor: '#AAA9A9A9',borderWidth: 1,borderRadius: 5, marginBottom: 5,}}>
              <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 16 }}>
                Photo 2 *
              </Text>
              <Image
                source={{ uri: '../assets/png/picture.png' }} // Set the image URI
                style={{ width: 150, height: 150, alignSelf: 'center', marginTop: 5, marginBottom: 5 }}
              />
            </View>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <View style={{ flex: 1, marginRight: 5 }}>
            <View style={{ backgroundColor: 'transparent',borderColor: '#AAA9A9A9',borderWidth: 1,borderRadius: 5, marginBottom: 5, }}>
              <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 16 }}>
                Photo 3 *
              </Text>
              <Image
                source={{ uri: '../assets/png/picture.png' }} // Set the image URI
                style={{ width: 150, height: 150, alignSelf: 'center', marginTop: 5, marginBottom: 5 }}
              />
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <View style={{ backgroundColor: 'transparent',borderColor: '#AAA9A9A9',borderWidth: 1,borderRadius: 5, marginBottom: 5,}}>
              <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 16 }}>
                Photo 4 *
              </Text>
              <Image
                source={{ uri: '../assets/png/picture.png' }} // Set the image URI
                style={{ width: 150, height: 150, alignSelf: 'center', marginTop: 5, marginBottom: 5 }}
              />
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: 'transparent',borderColor: '#AAA9A9A9',borderWidth: 1,borderRadius: 5, marginBottom: 5, marginBottom: 10, }}>
          <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 16 }}>
            Photo 5 *
          </Text>
          <Image
            source={{ uri: '../assets/png/picture.png' }} // Set the image URI
            style={{ width: 150, height: 150, alignSelf: 'center', marginTop: 5, marginBottom: 5 }}
          />
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <View style={{ flex: 1, marginRight: 5 }}>
            <Button
              title="Submit"
              onPress={() => {
                // Handle submit button press
              }}
              color="#00c853"
              
              style={{ marginTop: 10, }}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <Button
              title="Back"
              onPress={() => {
                // Handle back button press
              }}
              color="#ff5252"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserImages;
