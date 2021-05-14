import "./styles.css";

export const Button = (props) => {
  const { text, action, disabled } = props;

  return (
    <button onClick={action} className="button" disabled={disabled}>
      {text}
    </button>
  );
};
