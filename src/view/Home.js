import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

// impoty my modules
import db from '../../firestore'

// import my components


export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const [quiz, setQuiz] = useState({});

  async function getFirestore() {
    const querySnapshot = await db
      .collection('ranking')
      .get();
      
      var latestQuiz = {};
      querySnapshot.forEach(doc => {
        latestQuiz[doc.id] = doc.data()
      });

      // console.log("In func")
      // console.log(Object.keys(latestQuiz))
      return latestQuiz
  }
  
  // 起動時の実行処理
  useEffect(() => {
    const prepareQuiz = async () => {
      const latestQuiz = await getFirestore()
      
      setQuiz(latestQuiz)
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

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {Object.keys(quiz).forEach(function(key) {
        <Text>{key}</Text>
      })}
      {console.log(Object.keys(quiz))}
      <Text>{quiz['0001']['title']}</Text>
      
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}