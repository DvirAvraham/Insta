const Input = ({ label, type, inputId }) => {
  return (
    <div className='input-container'>
      <label htmlFor={inputId}>{label}</label>
      <input type={type} id={inputId} />
    </div>
  );
};

export default Input;
