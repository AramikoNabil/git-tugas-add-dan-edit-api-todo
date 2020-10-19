import React from 'react';
import {View, Image, TouchableOpacity, ScrollView, Text} from 'react-native';
import {styles} from '../styles/Homepage/Homepage';
import taskbar from '../assets/icon/taskbar.png';

class Homepage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.barIcon}
              onPress={() => this.props.navigation.openDrawer()}>
              <Image style={styles.barIcon} source={taskbar} />
            </TouchableOpacity>
          </View>
          <View style={styles.wrap}>
            <TouchableOpacity style={styles.box1}>
              <Text>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box2}>
              <Text>Work</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrap}>
            <TouchableOpacity style={styles.box3}>
              <Text>Study</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box4}>
              <Text>Sport</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.wrap}>
            <TouchableOpacity style={styles.box5}>
              <Text>...</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.box6}>
              <Text>...</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Homepage;
