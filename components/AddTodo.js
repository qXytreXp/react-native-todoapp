import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';
 
export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');

    const changeHandler = (value) => {
        setText(value);
    }

    return (
        <View style={styles.addTodo}>
            <TextInput
              onPress={() => console.log('hello')}
              style={styles.input}
              placeholder='New todo...'
              onChangeText={(value) => changeHandler(value)}
            />
            <Button color={'black'} borderRadius={10} onPress={() => {
              if (text.trim()) {
                submitHandler(text)
              } else {
                alert("Text is empty")
              }
            }} title='Add todo'/>
              
        </View>
    )
}

const styles = StyleSheet.create({
  input: {
    color: 'black',
    textAlign: 'center',
    backgroundColor: 'white',
    height: 50,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
    paddingLeft: 5,
  },
})
