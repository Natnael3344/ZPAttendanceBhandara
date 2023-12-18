import {createStackNavigator} from '@react-navigation/stack';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';


import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, View, Text, SafeAreaView, ScrollView,Alert,TouchableOpacity, Pressable, Dimensions} from 'react-native';





import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerHeader from './DrawerHeader';
import DrawerFooter from './DrawerFooter';
import MapLocation from '../../screens/MapLocation';
import MapRoute from '../../screens/MapRoute';
import ActivateQR from '../../screens/ActivateQR';
import TourDairy from '../../screens/TourDairy';
import PhoneInfo from '../../screens/PhoneInfo';
import LogOut from '../auth/logout/LogOut';
import Dashboard from '../../screens/Dashboard';
import LoginScreen from '../auth/login/LoginScreen';
import ForgotPassword from '../auth/forgot-password/ForgotPassword';
import CheckIn from '../../screens/CheckIn';
import UserImages from '../../screens/UserImages';
import globalStyles from '../../assets/css/styles';
const { width } = Dimensions.get('window');


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

performLogout = (props) => {
  //const dispatch = useDispatch()

 
 // dispatch(OTPActions.logout());

  AsyncStorage.clear();
  //props.navigation.dispatch(CommonActionsCreator.success(OTPConstants.LOGOUT_SUCCESS));
    
};

// const shareAPK = async () => {
//   try {
//     const googleDriveLink = 'https://drive.google.com/file/d/1LDe3WVh-yeoGUbI5P6N2Fg9Ty44ujFRM/view?usp=share_link'; 
//     const options = {
//       url: googleDriveLink,
//     };

//     await Share.open(options);
//   } catch (error) {
//     console.log('Error sharing APK:', error);
//   }
  
// };




const BottomTabsFirstStack = ({navigation}) => {
  
 
  return (
    <Stack.Navigator
      initialRouteName="dashboard"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#005a64',
        },
        headerLeft: () => (
          <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{marginLeft: 15}}>
          <Image
            source={require('../../assets/png/arrow-back.png')}
            resizeMode="contain"
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
          
        ),
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}>
      
      <Stack.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          header: ({navigation, route, options}) => {
            return <LogoTitle title={route.name} navigation={navigation} />;
          },
          title: 'Scan QR Code', //Set Header Title
        }}
      />
     
      <Stack.Screen
        name="checkIn"
        component={CheckIn}
        options={{
          title: 'Scan QR Code', //Set Header Title
        }}
      />
        
         <Stack.Screen
        name="attach"
        component={UserImages}
        options={{
          title: 'Attach Image', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const LogoTitle = props => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.dashBoardAppBar}>
      <View style={{flex: 1, alignItems: 'flex-start'}}>
        <TouchableOpacity
      
          onPress={() =>
            props.navigation.dispatch(DrawerActions.toggleDrawer())
          }>
          <Image
            source={require('../../assets/png/humburger-icon.png')}
            resizeMode="contain"
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
      </View>
      <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold',flex:2 }}>
          Scan QR Code
        </Text>
      
      <View style={{ justifyContent:'center', flexDirection: 'row', alignItems: 'center' }}>
    
              <Image source={require('../../assets/png/notificationwhite.png')} style={{ width: 30, height: 30, marginLeft: 15 }} />
            
              <TouchableOpacity>
                <View style={{ backgroundColor: 'red', borderRadius: 10, padding: 5, marginRight: 10 }}>
                  <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>3</Text>
                </View>
              </TouchableOpacity>
            
          </View>
    </View>
  );
};


function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1}}>
        <DrawerHeader />
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <DrawerItemList {...props} />
        </ScrollView>
        <DrawerFooter {...props} />
      </View>
    </SafeAreaView>
  );
}





const DrawerNavigator = props => {
  const navigation = useNavigation();
 
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerItemStyle: {marginVertical: 0},
        drawerActiveTintColor: '#000000',
        drawerActiveBackgroundColor: 'transparent',
        inactiveTintColor: '#000000',
        inactiveBackgroundColor: '',
        backBehavior: 'history',
        // header : ({ navigation, route, options }) => { return <BackHeader title={route.name} navigation={navigation} />}
        headerStyle: {
          backgroundColor: '#005a64',
        },
        headerLeft: () => (
          <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{marginLeft: 15}}>
          <Image
            source={require('../../assets/png/arrow-back.png')}
            resizeMode="contain"
            style={{width: 25, height: 25}}
          />
        </TouchableOpacity>
        ),
        headerTintColor: 'white',
        headerTitleAlign: 'center',
      }}>
      <Drawer.Screen
        name="home"
        component={BottomTabsFirstStack}
        options={{
          title: 'Scan QR Code',
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="location"
        component={MapRoute}
        options={{
          title: 'QR Map Locations',
        }}
      />
     
      <Drawer.Screen
        name="activate"
        component={ActivateQR}
        options={{
          title: 'Activate QR', //Set Header Title
        }}
      />
      <Drawer.Screen
        name="tour"
        component={TourDairy}
        options={{
          title: 'My Tour Diary',
        }}
      />
      <Drawer.Screen
        name="phone"
        component={PhoneInfo}
        options={{
          title: 'Phone Info',
        }}
      />
      
      <Drawer.Screen
        name="contact"
        component={MapLocation}
        options={{
          title: 'Contact Us',
        }}
      />
      <Drawer.Screen
        name="logout"
        component={LogOut}
        options={{
          title: 'Logout',
        }}
      />
      
     
    </Drawer.Navigator>
  );
};


  


export const AppStack = () => {
  return <DrawerNavigator />;
};
