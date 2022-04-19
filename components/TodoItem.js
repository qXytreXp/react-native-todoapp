import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'white',
    borderRadius: 10,
    height: 50,
    paddingTop: 14,
    paddingLeft: 20,
    marginBottom: 15,
  }
})
