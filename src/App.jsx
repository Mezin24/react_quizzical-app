import React from 'react';
import FirstPage from './components/FirstPage';
import Question from './components/Question';

const App = () => {
  const [quiz, setQuiz] = React.useState({ state: false, questions: [] });

  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=5')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuiz((prevState) => ({ ...prevState, questions: data.results }));
      });
  }, []);

  console.log(quiz);

  function onStartQuiz() {
    setQuiz((prevState) => ({ ...prevState, state: !prevState.state }));
  }

  return (
    <>
      {!quiz.state && <FirstPage onStartQuiz={onStartQuiz} />}
      {quiz.state && (
        <main className="quiz-container">
          <Question />
          <Question />
          <Question />
          <Question />
          <Question />
        </main>
      )}
      {quiz.state && (
        <footer>
          <button className="btn btn-info">Check Answers</button>
        </footer>
      )}
    </>
  );
};

export default App;
