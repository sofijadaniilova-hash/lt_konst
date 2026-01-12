import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const ResultScreen = ({ score, total, onRestart }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ваш результат</Text>
      <Text style={styles.score}>{score} / {total}</Text>
      <TouchableOpacity style={styles.button} onPress={onRestart}>
        <Text style={styles.buttonText}>Вернуться на главную</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ResultScreen;
