import React from 'react';
import arrayShuffle from 'array-shuffle';

function Question({ item, selectAnswer, questionNum, answers }) {
  const entities = require('entities');

  const [allQuestions, setAllQuestions] = React.useState(
    arrayShuffle([...item.incorrect_answers, item.correct_answer])
  );

  //   const allQuestions = arrayShuffle([
  //     ...item.incorrect_answers,
  //     item.correct_answer,
  //   ]);
  const btns = allQuestions.map((answer, i) => {
    const isSelected = answers[questionNum] === answer ? 'selected' : '';

    return (
      <button
        key={i}
        className={`btn-answer ${isSelected}`}
        onClick={() => selectAnswer(questionNum, answer)}
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
