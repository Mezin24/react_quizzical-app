import Button from '../UI/Button';

const FirstPage = () => {
  return (
    <section className="starter-page">
      <h1 className="title">Quizzical</h1>
      <p className="subtitle">Some description if needed</p>
      <Button size="btn-large" text="Start quiz" color="btn-info" />
    </section>
  );
};

export default FirstPage;
