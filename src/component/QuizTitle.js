import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default function QuizTitle(quiz) {
  function test() {
    console.log('selected')
  }
  return (
    <TouchableOpacity onPress={() => test()} style={[styles.item]}>
      <View style={styles.item}>
        <Text style={styles.title}>{quiz.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

