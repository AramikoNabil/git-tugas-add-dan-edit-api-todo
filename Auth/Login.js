import React from 'react';
import {Text, View, Image, KeyboardAvoidingView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './../src/styles/Login/styles';
import eyeopen from './../src/assets/icon/eyeOpened.png';
import ecyeclose from './../src/assets/icon/eyeClosed.png';
import fb from './../src/assets/icon/fb.png';
import google from './../src/assets/icon/google.png';
import AsyncStorage from '@react-native-community/async-storage';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      show: true,
    };
  }
  Login = () => {
    const {email, password} = this.state;
    var dataToSend = {email: email, password: password, mobile: false};
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    //POST request
    fetch('http://restful-api-laravel-7.herokuapp.com/api/login', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        console.log(responseJson);
        const {token} = responseJson;
        if (token) {
          AsyncStorage.setItem('token', token);
          this.props.navigation.navigate('Homepage');
        } else {
          alert('Pastikan Email dan Password BENAR!');
        }
      })
      //If response is not in json then in error
      .catch((error) => {
        alert('Pastikan Email dan Password BENAR!');
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.fontHeader}>
          <Text style={styles.fontHeader1}> Welcome Back! </Text>
        </View>
        <KeyboardAvoidingView behavior="position">
          <View>
            <Text style={styles.fontEmail}>Email</Text>
          </View>
          <View>
            <TextInput
              style={styles.fontInput}
              placeholder="example@gmail.com"
              keyboardType="email-address"
              onChangeText={(email) => this.setState({email})}
            />
          </View>
          <View>
            <Text style={styles.fontPassword}>Password</Text>
          </View>
          <View style={styles.eyePassword}>
            <TextInput
              style={styles.fontInputPass}
              underlineColorAndroid="transparent"
              placeholder="Password"
              secureTextEntry={this.state.show}
              onChangeText={(password) => this.setState({password})}
            />
            <TouchableOpacity
              onPress={() => this.setState({show: !this.state.show})}
              style={styles.eyePassword}>
              <Image
                style={styles.eye}
                source={this.state.show ? ecyeclose : eyeopen}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.Login()}>
              <Text style={styles.buttonText} onPress={() => this.Login()}>
                Log In
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        <View>
          <Text
            style={styles.fontForgetPass}
            onPress={() => this.props.navigation.navigate('ResetPassword')}>
            Forget Password?
          </Text>
          <Text style={styles.fontloginAnother}>
            Log in with social account
          </Text>
        </View>
        <View style={styles.socialMedia}>
          <TouchableOpacity onPress={() => {}} style={styles.buttonFacebook}>
            <Image source={fb} style={styles.logo} />
            <Text style={styles.textFacebook}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.buttonGoogle}>
            <Image source={google} style={styles.logo} />
            <Text style={styles.fontGoogle}>Google</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.fontloginAnother}>
            Don't have an account ?{' '}
            <Text
              style={styles.textSignUp}
              onPress={() => this.props.navigation.navigate('Registration')}>
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default Login;
