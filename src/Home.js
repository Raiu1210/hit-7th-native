import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// impoty my modules
import db from '../firestore'


export default function Home() {
  
  
  const [count, setCount] = useState(10);

  // 起動時の実行処理
  useEffect(() => {
    const rankingCollection = db
      .collection('ranking')
      .get()
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen {count}</Text>
      {/* <Text>{sample.name}</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}