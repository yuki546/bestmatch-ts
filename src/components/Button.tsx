type ButtonProps = {
  text: string;
  buttonColor: string;
};

const Button = ({ text, buttonColor }: ButtonProps) => {
  return <button style={{ background: buttonColor }}>{text}</button>;
};

export default Button;
