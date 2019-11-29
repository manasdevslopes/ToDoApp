import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import AddTodo from './containers/AddTodo.js';
import VisibleTodos from '../src/containers/VisibleTodos.js';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <AddTodo />
                <View>
                    <VisibleTodos />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});  