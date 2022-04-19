import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Today's tasks</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 68,
    marginLeft: 40,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
  }
})
