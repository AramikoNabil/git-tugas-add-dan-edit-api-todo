import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
// import Login from './../../Auth/Login';
import Avatar from '../assets/icon/ava.png';
import starIcon from '../assets/icon/star.png';
import locateIcon from '../assets/icon/bookmark.png';
import {styles} from '../styles/DrawContents/DrawContets';
import AsyncStorage from '@react-native-community/async-storage';

class DrawerContent extends React.Component {
  Logout = () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Image source={Avatar} style={styles.Avatar} />
          </View>
          <View style={styles.User}>
            <Text style={styles.Name}>Aramiko Nabil</Text>
            <Text style={styles.username}>@username</Text>
          </View>

          <View>
            <TouchableOpacity
              style={styles.buttonSignOut}
              onPress={() => this.Logout()}>
              <Text
                style={styles.fontSignOut}
                foc
                onPress={() => this.Logout()}>
                Sign Out
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default DrawerContent;
