import Button from '../UI/Button';

function Question(props) {
  return (
    <div className="question">
      <p>How would one say goodbye in Spanish?</p>
      <div className="btn-container">
        <Button>Adiós</Button>
        <Button>Hola</Button>
        <Button>Au Revoir</Button>
        <Button>Salir</Button>
      </div>
    </div>
  );
}

export default Question;
