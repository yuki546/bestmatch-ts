type ButtonProps = {
  text: string;
  buttonColor: string;
  handler?: () => void;
};

const Button = ({ handler, text, buttonColor }: ButtonProps) => {
  return (
    <button onClick={handler} style={{ background: buttonColor }}>
      {text}
    </button>
  );
};

export default Button;
