import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  ActivityIndicator,
  Button,
  ToastAndroid,
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
//1. install library image picker nya
import ImagePicker from 'react-native-image-picker';

// 2. buat variabel option unutk select image
const options = {
  title: 'Select Avatar editan',
  storageOptions: {
    skipBackup: false,
    path: 'images',
  },
};

class Todo2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      token: '',
      loading: false,
      checklist: false,
      task: '',
      desc: '',
      modal: false,
      modalEdit: false,
      // add todo
      avatarSource: {
        uri:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ouOFcEHOYh7Dj3JCmDUfhwAAAA%26pid%3DApi&f=1',
      },
      fileName: '',
      fileSize: '',
      type: '',
      uri: '',
      is_done: 0,
      // untuk edit
      image: '',
      id: '',
    };
  }

  // addTodo() {
  //   fetch('http://restful-api-laravel-7.herokuapp.com/api/todo', {
  //     method: 'POST',
  //     // body: this.state.todo},
  //     body: JSON.stringify({
  //       task: this.state.task,
  //       // desc: this.state.desc,
  //       // is_done: 0,
  //     }),
  //     headers: {
  //       Authorization: 'Bearer ' + this.state.token,
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log('upload succes', response);
  //       alert('Upload success!');
  //     })
  //     .catch((error) => {
  //       console.log('upload error', error);
  //       alert('Upload failed!');
  //     });
  // }

  getToken() {
    AsyncStorage.getItem('token')
      .then((token) => {
        if (token !== null) {
          console.log('TOKEN ', token);
          this.setState({token: token});
        } else {
          this.logOut();
        }
      })
      .then(() => this.getTodos());
    //setelah token muncul maka ambil data todo
  }

  getTodos() {
    this.setLoading(true);
    console.log(this.state.token);
    fetch('http://restful-api-laravel-7.herokuapp.com/api/todo/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.state.token}`,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const {status} = responseJson;
        if (status) {
          alert(status);
          this.logOut();
        } else {
          this.setState({todo: responseJson});
          console.log(responseJson);
          this.setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  setLoading(loading) {
    this.setState({loading: loading});
  }

  removeItem(id) {
    this.setLoading(true);
    fetch(`http://restful-api-laravel-7.herokuapp.com/api/todo/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.state.token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        const {status} = json;
        if (status === 'success') {
          this.getTodos();
        } else {
          alert('Gagal menghapus');
        }
      });
  }

  // removeItem = (key) => {
  //   const {todo} = this.state;
  //   this.setState({todo: todo.filter((value, index) => index !== key)});
  // };

  componentDidMount() {
    this.getToken();
  }

  logOut() {
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  }

  render() {
    console.log(this.state.todo);
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

        <Modal transparent={true} visible={this.state.modal}>
          <View style={styles.containerModal}>
            <View style={styles.popupModal}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({modal: false});
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
                  onChangeText={(text) => this.setState({task: text})}
                />
                {/* <TextInput
                  style={styles.inputtitle}
                  placeholder={'Title  \n Desc \n  '}
                  // maxLength={25}
                  keyboardType="default"
                  returnKeyType="done"
                  multiline={true}
                  autoCapitalize="sentences"
                  onChangeText={(text) => this.setState({desc: text})}
                /> */}
                <TouchableOpacity
                  style={styles.fontadd}
                  onPress={() => this.getTodos()}>
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
          {this.state.loading ? (
            <ActivityIndicator color="yellowgreen" />
          ) : this.state.todo.length === 0 ? (
            <Text>Empty</Text>
          ) : (
            this.state.todo.map((value, key) => {
              return (
                <View style={styles.body}>
                  <Text style={styles.fontBody}>{value.task}</Text>
                  <CheckBox
                    disabled={false}
                    value={this.state.checklist}
                    onValueChange={(checklist) => this.setState({checklist})}
                  />
                  <TouchableOpacity
                    style={styles.trashIcon}
                    onPress={() => this.removeItem(value.id)}>
                    <Image source={trash} />
                  </TouchableOpacity>
                </View>
              );
            })
          )}
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
