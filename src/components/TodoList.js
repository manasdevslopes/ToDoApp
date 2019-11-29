import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

const TodoList = ({ todos, toggleTodo }) => (
    <View style={{ padding: 20 }}>
        {todos.map(todo =>
            <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)} >
                <Text style={{ fontSize: 24, textDecorationLine: todo.completed ? 'line-through' : 'none' }}>{todo.text}</Text>
            </TouchableOpacity>
        )}
    </View>
)
export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
}); 