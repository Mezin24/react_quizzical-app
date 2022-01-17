import React from 'react';
import FirstPage from './components/FirstPage';
import Question from './components/Question';

const App = () => {
  const [quiz, setQuiz] = React.useState(false);

  function onStartQuiz() {
    setQuiz((prevState) => !prevState);
  }

  return (
    <>
      {!quiz && <FirstPage onStartQuiz={onStartQuiz} />}
      {quiz && (
        <main className="quiz-container">
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
        </main>
      )}
      {quiz && (
        <footer>
          <button className="btn btn-info">Check Answers</button>
        </footer>
      )}
    </>
  );
};

export default App;
