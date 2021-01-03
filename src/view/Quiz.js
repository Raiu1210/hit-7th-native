import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  quizArea: {
    flex: 3,
    flexDirection:'row',
  },
  quiz: {
    flex: 0.8,
    justifyContent: 'center',
    backgroundColor: '#fff462',
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
    borderWidth: 4,
    borderColor:'gray'
  },
  title: {
    fontSize: 20,
  },
  choiceArea: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  choiceRange: {
    flex: 1,
    // backgroundColor: '#ffffff',
    padding: 20,
    flexDirection:'row'
  },
  choice: {
    flex: 0.6,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 1,
    height:50,
    shadowRadius: 0,
    shadowOpacity: 0.5,
    borderWidth: 1,
    borderColor:'gray'
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

  function onPressLearnMore(text) {
    let result = ""
    const message = `1位 : ${quizData['rank01']}(${quizData['data01']})\n` +
                    `2位 : ${quizData['rank02']}(${quizData['data02']})\n` +
                    `3位 : ${quizData['rank03']}(${quizData['data03']})\n` +
                    `4位 : ${quizData['rank04']}(${quizData['data04']})\n` +
                    `5位 : ${quizData['rank05']}(${quizData['data05']})\n` +
                    `6位 : ${quizData['rank06']}(${quizData['data06']})\n` +
                    `7位 : ${quizData['rank07']}(${quizData['data07']})\n` +
                    `8位 : ${quizData['rank08']}(${quizData['data08']})\n` +
                    `9位 : ${quizData['rank09']}(${quizData['data09']})\n` +
                    `10位 : ${quizData['rank10']}(${quizData['data10']})\n\n` +
                    `${quizData['memo']}`

    if(text === answer) {
      result = "正解！\n"
    } else {
      result = "残念...\n"
    }
    Alert.alert(
      result,
      message,
      [
        { text: 'ほえ～'}
      ],
      { cancelable: false }
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.quizArea}>
        <View style={styles.quiz}>
          <Text style={styles.title}>{data.route.params.quiz.title}</Text>
        </View>
      </View>

      <View style={styles.choiceArea}>

        <View style={styles.choiceRange}>
          <TouchableOpacity onPress={() => onPressLearnMore(randomChoices[0])} style={styles.choice}>
            <Text>{randomChoices[0]}</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.choiceRange}>
          <TouchableOpacity onPress={() => onPressLearnMore(randomChoices[1])} style={styles.choice}>
            <Text>{randomChoices[1]}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.choiceRange}>
          <TouchableOpacity onPress={() => onPressLearnMore(randomChoices[2])} style={styles.choice}>
            <Text>{randomChoices[2]}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.choiceRange}>
          <TouchableOpacity onPress={() => onPressLearnMore(randomChoices[3])} style={styles.choice}>
            <Text>{randomChoices[3]}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.adArea}>
        {/* <Text >ad area</Text> */}
      </View>
    </View>
  )
}