import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  quiz: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 50,
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
  choiceArea: {
    flex: 5
  },
  chice: {
    flex: 1
  },
  adArea: {
    flex: 2
  }
});

export default function Quiz(data) {
  console.log(data.route.params.quiz)
  const quizData = data.route.params.quiz

  // 5, 6, 7, 8位を取って来る
  const answer = quizData['rank07']
  const choices = [quizData['rank05'], quizData['rank06'], quizData['rank07'], quizData['rank08']]
  const randomChoices = [];

  while (choices.length > 0) {
    const n = choices.length;
    const k = Math.floor(Math.random() * n);
  
    randomChoices.push(choices[k]);
    choices.splice(k, 1);
  }


  return (
    <View style={styles.container}>
      <View style={styles.quiz}>
        <Text style={styles.title}>{data.route.params.quiz.title}</Text>
      </View>

      <View style={styles.choiceArea}>
        <Text style={styles.chice}>{randomChoices[0]}</Text>
        <Text style={styles.chice}>{randomChoices[1]}</Text>
        <Text style={styles.chice}>{randomChoices[2]}</Text>
        <Text style={styles.chice}>{randomChoices[3]}</Text>
      </View>

      <View style={styles.adArea}>
        <Text >ad area</Text>
      </View>
    </View>
  )
}