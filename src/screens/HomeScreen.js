import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const HomeScreen = ({ onStart }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Конституция Литвы: Тест</Text>
      <TouchableOpacity style={styles.button} onPress={onStart}>
        <Text style={styles.buttonText}>Начать тест</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
