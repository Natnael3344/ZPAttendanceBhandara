import React from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity, ListView, StyleSheet,Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const Dashboard = (props) => {
  const {navigation } = props;
  navigateToCheckInScreen = () => {
    navigation.navigate("checkIn");
  }
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1, marginTop: 10 }}>
          <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <TouchableOpacity style={[styles.button,{backgroundColor:'#00c853'}]} onPress={navigateToCheckInScreen}>
              <Text style={styles.buttonText}>Check In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{backgroundColor:'#ffccbc'}]} onPress={() => { /* handle bt_checkout press */ }}>
              <Text style={styles.buttonText}>Check Out</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={[styles.button,{backgroundColor:'#ffccbc'}]} onPress={() => { /* handle button_sendOffline press */ }}>
            <Text style={styles.buttonText}>Sync Data</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <TouchableOpacity style={[styles.button,{backgroundColor:'#c0d2d4'}]} onPress={() => { /* handle bt_placesvisited press */ }}>
              <Text style={styles.buttonText}>Show Offline Data</Text>
            </TouchableOpacity>
          
          </View>
          <Text
            style={styles.qrLocationText}
            numberOfLines={10}
            ellipsizeMode="tail"
          />
          {/* <ListView
            // Set ListView properties and data here
            // dataSource={this.state.dataSource}
            // renderRow={(rowData) => <Text>{rowData}</Text>}
            style={styles.listView}
          /> */}
        </View>
        <Text style={styles.noQrText}>No QR Scanned Today!</Text>
      </ScrollView>
    </View>
  );
};

const styles = {
  button: {
    flex: 1,
    marginHorizontal: 5,
    marginBottom: 5,
    backgroundColor: '#E0E0E0', // Set your button background color
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#005a64', // Set your button text color
    fontSize: 20,
    textAlign: 'center',
  },
  qrLocationText: {
    marginVertical: 10,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    color: '#000', // Set your text color
    // Set other text properties as needed
  },
  listView: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    // Set other ListView properties as needed
  },
  noQrText: {
    alignSelf: 'center',
    marginBottom: 30,
    fontSize: 20,
    color: '#000', // Set your text color
  },
};

export default Dashboard;
