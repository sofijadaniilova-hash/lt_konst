import React, { useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import QuizScreen from './src/screens/QuizScreen';
import ResultScreen from './src/screens/ResultScreen';
import questions from './src/data/questions';

export default function App() {
  const [screen, setScreen] = useState('Home'); // Home / Quiz / Result
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer) => {
    const correctAnswer = questions[current].answer;
    if (answer === correctAnswer) setScore(score + 1);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setScreen('Result');
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setScreen('Home');
  };

  if (screen === 'Home') {
    return <HomeScreen onStart={() => setScreen('Quiz')} />;
  }

  if (screen === 'Quiz') {
    return (
      <QuizScreen
        current={current}
        total={questions.length}
        question={questions[current]}
        onAnswer={handleAnswer}
      />
    );
  }

  if (screen === 'Result') {
    return <ResultScreen score={score} total={questions.length} onRestart={restartQuiz} />;
  }

  return null;
}
