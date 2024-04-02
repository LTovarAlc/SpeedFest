import "./input.css";

const Input = ({ text, type, name }) => {
  return (
    <input placeholder={text} type={type} name={name} class="custom-input" />
  );
};

export default Input;
