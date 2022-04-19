import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@save_todo_list'

const readData = async (setTodos) => {
  try {
    const userTodos = await AsyncStorage.getItem(STORAGE_KEY)

    if (userTodos !== null) {
      setTodos(JSON.parse(userTodos))
    }
  } catch (e) {
    alert('Failed to fetch the data from storage. Sorry')
  }
}

const saveData = async (todos) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  } catch (e) {
    alert('Failed to save data. Sorry')
  }
}

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    readData(setTodos)
  }, [])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    });
    saveData(todos);
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random()},
        ...prevTodos
      ]
    });
    saveData(todos);
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList 
            data={todos} 
            renderItem={({ item }) => (
              <TodoItem item={ item } pressHandler={ pressHandler }/>
            )}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6EB',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 30,
  },
});
