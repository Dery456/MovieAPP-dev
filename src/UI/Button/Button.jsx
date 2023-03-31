import "./Button.scss";

const Button = (props) => {
  const { children, elementClass, func } = props;

  return (
    <button onClick={func} className={`button ${elementClass}`}>
      {children}
    </button>
  );
};

export default Button;
