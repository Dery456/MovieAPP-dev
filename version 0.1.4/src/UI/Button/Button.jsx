import { Button } from "react-bootstrap";
import "./Button.scss";

const Button = (props) => {
  const { children, elementClass, func } = props;

  return (
    <Button onClick={func} className={`button ${elementClass}`}>
      {children}
    </Button>
  );
};

export default Button;
