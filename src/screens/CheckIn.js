import React from 'react';
    import {
      View,
      Text,
      ScrollView,
      Image,
      TouchableOpacity,
      Button,
    } from 'react-native';

const CheckIn = () => {
    
      return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: 'column' }}>
            {/* <View
              style={{
                height: 55,
                backgroundColor: '#005a64',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
                Scan QR Code
              </Text>
            </View> */}
            <ScrollView>
                <View style={{ margin: 5, flexDirection: 'row', justifyContent: 'space-between',paddingHorizontal:20 }}>
                <View style={{ backgroundColor: 'transparent',borderColor: '#AAA9A9A9',borderWidth: 1,borderRadius: 5, marginBottom: 10, }}>
          <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 18, fontWeight:'bold',color:'black',marginHorizontal:10 }}>
            1. Take a selfie
          </Text>
          <Image
            source={require('../assets/png/picture.png')}  // Set the image URI
            style={{ width: 120, height: 120, alignSelf: 'center', marginTop: 5, marginBottom: 5, padding:10 }}
          />
        </View>
        <View style={{ backgroundColor: 'transparent',borderColor: '#AAA9A9A9',borderWidth: 1,borderRadius: 5, marginBottom: 10, }}>
          <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 18, fontWeight:'bold',color:'black',marginHorizontal:10 }}>
            2. Scan QR code
          </Text>
          <Image
            source={require('../assets/png/scanqr.png')}  // Set the image URI
            style={{ width: 120, height: 120, alignSelf: 'center', marginTop: 5, marginBottom: 5,padding:10 }}
          />
        </View>
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
                  }}>
                  <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>Referesh Location</Text>
                </TouchableOpacity>
                <TouchableOpacity
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
              {/* Uncomment the following block if you need the last button */}
              {/*<TouchableOpacity
                style={{
                  margin: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                id="button_sendOffline">
                <Button
                  title="Send Saved Data"
                  color="#fff"
                  onPress={() => {
                    // Your send offline button logic here
                  }}
                />
              </TouchableOpacity>*/}
            </ScrollView>
          </View>
        </View>
      );
    };
    
  
    


export default CheckIn;