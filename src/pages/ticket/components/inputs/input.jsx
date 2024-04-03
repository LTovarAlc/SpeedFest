import "./input.css";

const Input = ({ text, type, name, onChange, value }) => {
  return (
    <input placeholder={text} type={type} name={name} className="custom-input" onChange={onChange} value={value} />
  );
};

export default Input;
