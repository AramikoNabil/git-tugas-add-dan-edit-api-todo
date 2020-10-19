import React from 'react';
import {View, Image, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {styles} from './../src/styles/SplashScreen/styles';
import img from './../src/assets/image/background.png';

class SplashScreen extends React.Component {
  state = {
    role: true,
  };
  splash = () => {
    if (this.state.role) {
      return (
        <View style={styles.bg}>
          <Image source={img} style={styles.img} />
          <View style={styles.containerSplashScreen}>
            <ActivityIndicator
              size="large"
              color="deepskyblue"
              style={styles.indicator}
            />
          </View>
        </View>
      );
    } else {
      AsyncStorage.getItem('token').then((value) => {
        console.log(value);
        if (value !== null) {
          this.props.navigation.navigate('Homepage');
        } else {
          this.props.navigation.navigate('GetStarted');
        }
      });
    }
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        role: false,
      });
    }, 3000);
  }
  render() {
    return (
      <View>
        <View style={styles.splash}>{this.splash()}</View>
      </View>
    );
  }
}

export default SplashScreen;
