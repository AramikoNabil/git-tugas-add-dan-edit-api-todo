import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import {styles} from '../styles/Todo/todo';
import CheckBox from '@react-native-community/checkbox';
import moment from 'moment';
import 'moment/locale/id';
import arrow from '../assets/icon/arrow-left.png';
import trash from '../assets/icon/trasher.png';
import taskbar from '../assets/icon/taskbar.png';
import plusButton from '../assets/icon/plus.png';
import AsyncStorage from '@react-native-community/async-storage';

class Todo2 extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      text: '',
      checklist: false,
      show: false,
    };
  }

  addTodo = () => {
    const {text, todo} = this.state;
    this.setState({todo: [text, ...todo]});
    // this.state.text.trim().length > 0;
  };

  removeItem = (key) => {
    const {todo} = this.state;
    this.setState({todo: todo.filter((value, index) => index !== key)});
  };

  componentDidUpdate() {
    AsyncStorage.setItem('DataTodo', JSON.stringify(this.state.todo));
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const data = await AsyncStorage.getItem('DataTodo');
    if (data !== null) {
      const json = JSON.parse(data);
      this.setState({todo: json});
      console.log(json);
    }
  }
  render() {
    const date = new Date();
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.barIcon}
            onPress={() => this.props.navigation.openDrawer()}>
            <Image style={styles.barIcon} source={taskbar} />
          </TouchableOpacity>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}> {moment(date).format('LL')} </Text>
        </View>

        <Modal transparent={true} visible={this.state.show}>
          <View style={styles.containerModal}>
            <View style={styles.popupModal}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({show: false});
                  }}>
                  <Image source={arrow} />
                </TouchableOpacity>
              </View>
              <View style={styles.containerinput}>
                <TextInput
                  style={styles.inputtitle}
                  placeholder={'Title  \n Desc \n  '}
                  // maxLength={25}
                  keyboardType="default"
                  returnKeyType="done"
                  multiline={true}
                  autoCapitalize="sentences"
                  onChangeText={(text) => this.setState({text: text})}
                />
                <TouchableOpacity
                  style={styles.fontadd}
                  onPress={() => this.addTodo()}>
                  <Text style={styles.font}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <View>
          <Text style={styles.fontTitle}>Today's Task</Text>
        </View>
        <ScrollView>
          {this.state.todo.map((value, key) => {
            return (
              <View style={styles.body}>
                <Text style={styles.fontBody}>{value}</Text>
                <CheckBox
                  disabled={false}
                  value={this.state.checklist}
                  onValueChange={() => this.setState({})}
                />
                <TouchableOpacity
                  style={styles.trashIcon}
                  onPress={() => this.removeItem(key)}>
                  <Image source={trash} />
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.plusButton}>
          <TouchableOpacity onPress={() => this.setState({show: true})}>
            <Image source={plusButton} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Todo2;
