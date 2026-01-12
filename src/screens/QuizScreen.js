import React from 'react';
import { SafeAreaView, Text, ScrollView } from 'react-native';
import QuestionCard from '../components/QuestionCard';
import styles from '../styles/styles';

const QuizScreen = ({ current, total, question, onAnswer }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.counter}>{current + 1} / {total}</Text>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <QuestionCard question={question} onAnswer={onAnswer} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuizScreen;
