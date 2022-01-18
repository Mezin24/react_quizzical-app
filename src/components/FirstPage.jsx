const FirstPage = ({ onStartQuiz }) => {
  return (
    <section className="starter-page">
      <h1 className="title">Quizzical</h1>
      <p className="subtitle">Test your knowledge</p>
      <button className="btn btn-large btn-info" onClick={onStartQuiz}>
        Start quiz
      </button>
    </section>
  );
};

export default FirstPage;
