import React from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
import iconBack from './../src/assets/icon/arrow-left.png';
import {styles} from './../src/styles/ResetPassword/ResetPassword';

class ResetPassword extends React.Component {
  render() {
    return (
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
          <Text style={styles.Header}>Reset Password</Text>
        </View>
        <View>
          <Text style={styles.fontBody}>
            Please enter your email below your{'                    '}
            <Text>password reset instructions</Text>
          </Text>
        </View>
        <View>
          <Text style={styles.fontEmail}>Email</Text>
        </View>
        <View>
          <TextInput
            style={styles.fontInput}
            placeholder="example@gmail.com"
            keyboardType="email-address"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text
              style={styles.buttonText}
              onPress={() => this.props.navigation.navigate('Login')}>
              Send Email
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ResetPassword;
