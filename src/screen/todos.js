import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export class todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: ['Rizqi', 'Yahya', 'Faiz'],
      text: '',
      checklist: false,
    };
  }

  addTodo = () => {
    const {text, todos} = this.state;

    this.setState({
      todos: [text, ...todos],
    });
  };

  removeTodo = (index) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter((todo, i) => i !== index),
    });
  };

  checklist = () => {
    this.setState({
      checklist: !this.state.checklist,
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            height: 40,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: ' #fff', fontSize: 20}}> App Todos </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
            backgroundColor: '#784',
            margin: 10,
            borderRadius: 10,
            justifyContent: 'space-between',
          }}>
          <TextInput
            placeholder="Masukan Catatan Anda"
            onChangeText={(inputan) => this.setState({text: inputan})}
          />
          <TouchableOpacity onPress={() => this.addTodo()}>
            <Text style={{marginRight: 10}}>Add</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {this.state.todos.map((value, index) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  backgroundColor: '#927',
                  height: 50,
                  alignItems: 'center',
                  margin: 24,
                  borderRadius: 15,
                }}>
                <Text style={{color: '#fff', fontSize: 15}}>Edit</Text>
                <Text style={{color: '#fff', fontSize: 15}}>{value}</Text>
                <TouchableOpacity onPress={() => this.removeTodo(index)}>
                  <Text style={{color: '#fff', fontSize: 15}}>Hapus</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.checklist()}>
                  <Text style={{color: '#fff', fontSize: 15}}>
                    {this.state.checklist
                      ? 'Sudah Checklist'
                      : 'Belum Checklit'}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default todos;
