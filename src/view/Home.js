import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

// impoty my modules
import db from '../../firestore'

// import my components
import QuizTitle from '../component/QuizTitle'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: 'center',
    justifyContent: 'center'
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

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const [quizList, setQuizList] = useState({});

  // doc.idをidとして追加してquizList用のデータを作成する
  async function getFirestore() {
    const querySnapshot = await db
      .collection('ranking')
      .get();
      
      var quizData = [];
      querySnapshot.forEach(doc => {
        const tmp = doc.data()
        tmp['id'] = doc.id
        quizData.push(tmp)
      });
      
      return quizData
  }
  
  // 起動時の実行処理
  useEffect(() => {
    const prepareQuiz = async () => {
      const quizData = await getFirestore()
      
      setQuizList(quizData)
      setIsReady(true);
    }

    prepareQuiz()
  }, []);

  if (!isReady) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading</Text>
      </View>
    )
  }


  const renderQuizTitle = ({ item }) => (
    <QuizTitle data={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={quizList}
        renderItem={renderQuizTitle}
        keyExtractor={item => item.title}
      />
    </View>
  );
}
