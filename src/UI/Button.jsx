const Button = (props) => {
  return (
    <button className={`btn ${props.size} ${props.color}`}>{props.text}</button>
  );
};

export default Button;
