import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { addTodo } from '../actions';
import { connect } from 'react-redux';

class AddTodo extends Component {
  state = {
    text: ''
  }

  addTodo = (text) => {
    //update redux store
    // this.props.dispatch({ type: 'ADD_TODO', text })
    this.props.dispatch(addTodo(text))
    this.setState({ text: '' })
  }
  render() {
    return (
      <SafeAreaView>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            placeholder="Eg. Creat New App"
            style={{ borderWidth: 1, borderColor: '#f2f2e1', backgroundColor: '#eaeaea', height: 50, flex: 1, paddingLeft: 16 }}
          />
          <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
            <View style={{ height: 50, width: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: '#eaeaea' }}>
              <Ionicons name="ios-add" size={50} style={{ color: '#de9595' }} />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});  