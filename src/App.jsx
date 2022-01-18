import React from 'react';
import FirstPage from './components/FirstPage';
import Question from './components/Question';
import Confetti from 'react-confetti';

const App = () => {
  const [quiz, setQuiz] = React.useState({
    state: false,
    questions: [],
    answers: [],
    correctAnswers: 0,
    done: false,
    dowloaded: true,
    keys: [],
  });

  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then((res) => res.json())
      .then((data) => {
        setQuiz((prevState) => ({
          ...prevState,
          questions: data.results,
          answers: new Array(data.results.length),
        }));
      });
  }, [quiz.dowloaded]);

  console.log(quiz);

  function onStartQuiz() {
    setQuiz((prevState) => ({ ...prevState, state: !prevState.state }));
  }

  function selectAnswer(questionNum, answer) {
    setQuiz((prevState) => {
      const newAnswersArray = [...prevState.answers];
      newAnswersArray[questionNum] = answer;
      return {
        ...prevState,
        answers: newAnswersArray,
      };
    });
  }

  function checkAnswers() {
    const numOfCorrectAnswers = quiz.answers.reduce((acc, el, index) => {
      return el === quiz.questions[index].correct_answer ? ++acc : acc;
    }, 0);
    setQuiz((prevState) => ({
      ...prevState,
      correctAnswers: numOfCorrectAnswers,
      done: !prevState.done,
      keys: prevState.questions.map((item) => item.correct_answer),
    }));
  }

  function restart() {
    setQuiz((prevState) => ({
      state: false,
      questions: [],
      answers: [],
      correctAnswers: 0,
      done: false,
      dowloaded: !prevState.dowloaded,
      keys: [],
    }));
  }

  const questoins = quiz.questions.map((item, i) => (
    <Question
      key={i}
      item={item}
      selectAnswer={selectAnswer}
      questionNum={i}
      answers={quiz.answers}
      correctAnswer={quiz.keys[i]}
      isDone={quiz.done}
    />
  ));

  return (
    <>
      {!quiz.state && <FirstPage onStartQuiz={onStartQuiz} />}
      {quiz.state && <main className="quiz-container">{questoins}</main>}
      {quiz.state && !quiz.done && (
        <footer>
          <button className="btn btn-info" onClick={checkAnswers}>
            Check Answers
          </button>
        </footer>
      )}
      {quiz.state && quiz.done && (
        <footer>
          <p>
            You scored {quiz.correctAnswers} / {quiz.questions.length} correct
            answers
          </p>
          <button className="btn btn-info" onClick={restart}>
            Play Again
          </button>
        </footer>
      )}
      {quiz.correctAnswers === quiz.questions.length && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight + window.scrollY}
        />
      )}
    </>
  );
};

export default App;

// 1. подсвет правильных ответов
// 2. отключение кнопок после проверки
// 3. окончание игры
// 4. перезапуск новой игры
// 5. оптимизация кода
