import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#cccccc',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 0,
    shadowOpacity: 1,
    borderWidth: 2,
    borderColor:'gray',
  },
  title: {
    fontSize: 20,
  },
});

export default function QuizTitle(quiz) {
  const { navigate } = useNavigation();

  function test() {
    // console.log(quiz.data)
    navigate('Quiz', { quiz: quiz.data })
  }
  return (
    <TouchableOpacity onPress={() => test()} style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>{quiz.data.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

