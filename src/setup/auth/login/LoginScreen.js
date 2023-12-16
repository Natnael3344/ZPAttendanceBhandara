import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Button
} from 'react-native';
import Background from '../../../components/Background';
const LoginScreen = ({ navigation }) => {
 // props
  // const { handleSubmit, reset, submitting,navigation } = props;
 
  

  // navigateToRegisterScreen = () => {
    
  //     navigation.navigate("Register");
    
  // }

  // _onSubmit = (values) => {
  //   Keyboard.dismiss()
  //   props.login(values)
  // }
  // const language = useSelector(getLanguage);
  // let translations;
  // if (language.language === 'en') {
  //   translations = en;
  // } else {
  //   translations = hi;
  // }
  return( 
    <Background>
<View style={{ flex: 1,}}>
        {/* Your content goes here */}
        <Text
          style={{
            alignSelf: 'flex-end',
            marginTop: 20,
            marginRight: 20,
            color: 'white',
            fontSize: 15,
            fontWeight: 'bold',
          }}
        >
          Version
        </Text>

        <ScrollView style={{ flex: 1 }}>
          <View style={{ alignItems: 'center', paddingTop: 70 }}>
            <Image
              source={require('../../../assets/png/logo.png')} 
              style={{ width: 110, height: 120, marginBottom: 10 }}
            />

            <View style={{ marginLeft: 20, marginRight: 20, backgroundColor: 'rgba(255, 255, 255, 0.5)', flexDirection: 'row', marginTop: 20 }}>
              <Image
                source={require('../../../assets/png/keypad.png')} 
                style={{ width: 20, height: 20, marginVertical: 15, marginLeft: 15, marginRight: 10 }}
              />
              <TextInput
                id="number"
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  padding: 15,
                  color: 'white',
                }}
                keyboardType="numeric"
                maxLength={10}
                placeholder="Enter Number"
                placeholderTextColor="white"
              />
            </View>

            <View
        style={{
          flexDirection: 'row',
          margin: 10,
          backgroundColor: 'transparent',
        }}>
        <Image
          style={{
            width: 20,
            height: 20,
            marginLeft: 15,
            marginRight: 10,
            alignSelf: 'center',
          }}
          source={require('../../../assets/png/password.png')} 
        />
        <TextInput
          style={{
            flex: 1,
            height: 40,
            marginRight: 20,
            backgroundColor: 'transparent',
            paddingTop: 15,
            paddingRight: 15,
            paddingBottom: 15,
            color: 'white',
          }}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="white"
        />
      </View>

      <TouchableOpacity
        style={{
          width: '100%',
          height: 40,
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: '100%',
          height: 40,
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Register</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginBottom: 10,
        }}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{
                width: 18,
                height: 18,
                marginLeft: 25,
                marginRight: 10,
                alignSelf: 'center',
                display: 'none', 
              }}
              source={require('../../../assets/png/telephone.png')} 
            />
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                marginLeft: 50,
                marginRight: 10,
                display: 'none', 
              }}
              numberOfLines={1}>
              Contact Us
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{
                  width: 18,
                  height: 18,
                  marginRight: 5,
                  marginLeft: 15,
                }}
                source={require('../../../assets/png/forgotpass.png')} 
              />
              <Text
                style={{
                  color: 'white',
                  fontSize: 15,
                  marginRight: 20,
                }}
                numberOfLines={1}>
                Forgot Password
              </Text>
            </View>
          </View>
        </View>
      </View>

      <RadioGroup
        style={{
          flexDirection: 'row',
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: 'white',
          elevation: 5,
          padding: 5,
        }}
        selectedIndex={0} // Specify the default selected index
        onChange={(index) => console.log(index)}>
        <RadioButton value={1} style={{ marginRight: 10 }}>
          <Text style={{ color: 'white' }}>English</Text>
        </RadioButton>
        <RadioButton value={2}>
          <Text style={{ color: 'white' }}>मराठी</Text>
        </RadioButton>
      </RadioGroup>
          </View>
        </ScrollView>

    
      </View>

      <Image
        source={require('../../../assets/png/adividwhite.png')} 
        style={{ width: 120, height: 50, alignSelf: 'center', marginBottom: 10 }}
      />
    </Background>
);
}

export default LoginScreen;
// const mapStateToPros = (state) => {
//   return ({ 
//       user: state.login,
//       loading : state.login.loading,
//   })
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//       login: (values) => dispatch(loginActions.login(values)),
//       socialLogin : (socialData,data) => dispatch(loginActions.socialLogin(socialData,data)),
     
//   }
// }

// Login = connect(
//   mapStateToPros,
//   mapDispatchToProps
// )(LoginScreen)



// export default reduxForm({
//   form: 'Login',
//   validate
// })(Login);


