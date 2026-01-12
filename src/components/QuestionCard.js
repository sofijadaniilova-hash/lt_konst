import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const QuestionCard = ({ question, onAnswer }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.question}>{question.question}</Text>

      {question.type === 'multiple_choice' &&
        question.options.map((opt, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => onAnswer(index)}
          >
            <Text>{opt}</Text>
          </TouchableOpacity>
        ))}

      {question.type === 'true_false' &&
        ['Верно', 'Неверно'].map((opt, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={() => onAnswer(index === 0)}
          >
            <Text>{opt}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default QuestionCard;
