import React from 'react';
import arrayShuffle from 'array-shuffle';

function Question({
  item,
  selectAnswer,
  questionNum,
  answers,
  correctAnswer,
  isDone,
}) {
  const entities = require('entities');

  const [allQuestions, setAllQuestions] = React.useState(
    arrayShuffle([...item.incorrect_answers, item.correct_answer])
  );

  const btns = allQuestions.map((answer, i) => {
    const isCorrectAnswer = answer === correctAnswer ? 'correct' : '';
    const isSelected = answers[questionNum] === answer ? 'selected' : '';
    // const isCorrectAnswer = answer.correct_answer

    return (
      <button
        key={i}
        className={`btn-answer ${isCorrectAnswer} ${isSelected}`}
        onClick={() => selectAnswer(questionNum, answer)}
        disabled={isDone}
      >
        {entities.decodeHTML(answer)}
      </button>
    );
  });

  return (
    <div className="question">
      <p>{entities.decodeHTML(item.question)}</p>
      <div className="btn-container">{btns}</div>
    </div>
  );
}

export default Question;
