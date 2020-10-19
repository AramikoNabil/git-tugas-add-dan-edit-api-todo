import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {styles} from './../src/styles/Registration/Registration';
import iconBack from './../src/assets/icon/arrow-left.png';
import fb from './..//src/assets/icon/fb.png';
import google from './../src/assets/icon/google.png';
import eyeopen from './../src/assets/icon/eyeOpened.png';
import ecyeclose from './../src/assets/icon/eyeClosed.png';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      firsteye: true,
      secondeye: true,
    };
  }
  SignUp = () => {
    const {name, email, password, password_confirmation} = this.state;
    var dataToSend = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
      mobile: false,
    };
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    //POST request
    fetch('http://restful-api-laravel-7.herokuapp.com/api/register', {
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
          AsyncStorage.setItem('token', JSON.stringify(token));
          this.props.navigation.navigate('Login');
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
      <ScrollView>
        <View style={styles.container}>
          <View>
            <TouchableOpacity
              style={styles.headBarIcon}
              onPress={() => this.props.navigation.goBack()}>
              <Image
                source={iconBack}
                style={styles.barIcon}
                onPress={() => this.props.navigation.goBack()}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.Header}>Registration</Text>
          </View>
          <View>
            <Text style={styles.fontBody}>
              Already have an account?{' '}
              <Text
                style={styles.fontLogin}
                onPress={() => this.props.navigation.navigate('Login')}>
                Login
              </Text>
            </Text>
          </View>
          <View>
            <Text style={styles.fontEmail}>Name</Text>
          </View>
          <KeyboardAvoidingView>
            <View>
              <TextInput
                style={styles.fontInputPw}
                placeholder="Name"
                keyboardType="name-phone-pad"
                onChangeText={(name) => this.setState({name})}
              />
            </View>
            <View>
              <Text style={styles.fontEmail}>Email</Text>
            </View>
            <View>
              <TextInput
                style={styles.fontInputPw}
                placeholder="Name"
                keyboardType="email-address"
                onChangeText={(email) => this.setState({email})}
              />
            </View>
            <View>
              <Text style={styles.fontEmail}>Password</Text>
            </View>
            <View style={styles.eyePassword}>
              <TextInput
                style={styles.fontInputPass}
                underlineColorAndroid="transparent"
                placeholder="Password"
                secureTextEntry={this.state.firsteye}
                onChangeText={(password) => this.setState({password})}
              />
              <TouchableOpacity
                onPress={() => this.setState({firsteye: !this.state.firsteye})}
                style={styles.eyePassword}>
                <Image
                  style={styles.eye}
                  source={this.state.firsteye ? ecyeclose : eyeopen}
                />
              </TouchableOpacity>
            </View>

            <View>
              <Text style={styles.fontPassword}>Re-Password</Text>
            </View>
            <View style={styles.eyePassword}>
              <TextInput
                style={styles.fontInputPass}
                underlineColorAndroid="transparent"
                placeholder=" Enter Re-Password"
                secureTextEntry={this.state.secondeye}
                onChangeText={(password_confirmation) =>
                  this.setState({password_confirmation})
                }
              />
              <TouchableOpacity
                onPress={() =>
                  this.setState({secondeye: !this.state.secondeye})
                }
                style={styles.eyePassword}>
                <Image
                  style={styles.eye}
                  source={this.state.secondeye ? ecyeclose : eyeopen}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.SignUp()}>
                <Text style={styles.buttonText} onPress={() => this.SignUp()}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={styles.fontloginAnother}>
                Log in with social account
              </Text>
            </View>
            <View style={styles.socialMedia}>
              <TouchableOpacity
                onPress={() => {}}
                style={styles.buttonFacebook}>
                <Image source={fb} style={styles.logo} />
                <Text style={styles.textFacebook}>Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={styles.buttonGoogle}>
                <Image source={google} style={styles.logo} />
                <Text style={styles.fontGoogle}>Google</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.fontTermofuse}>
                By clicking sign up you are agreeing to the{'          '}
                <Text style={styles.textSignUp}>
                  {'               '}
                  Term of use{' '}
                  <Text style={styles.fontTermofuse}>
                    and the{' '}
                    <Text style={styles.textSignUp}>Privacy policy</Text>
                  </Text>
                </Text>
              </Text>
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    );
  }
}

export default Registration;
