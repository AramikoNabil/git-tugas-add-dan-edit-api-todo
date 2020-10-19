import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './../src/styles/GetStarted/styles';
import img from './../src/assets/image/background.png';

class GetStarted extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={img} style={styles.img} />
        </View>
        <View style={styles.container1}>
          <Text style={styles.font1}>
            Welcome To <Text style={styles.font2}>Task </Text>
          </Text>
          {/* <Text style={styles.font3}>Orginize Your Daily Task</Text> */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text
              style={styles.buttonText}
              onPress={() => this.props.navigation.navigate('Login')}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default GetStarted;
