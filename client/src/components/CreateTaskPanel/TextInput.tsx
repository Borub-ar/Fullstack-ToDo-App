type TextInputProps = {
  title: string;
  id: string;
};

const TextInput = ({ title, id }: TextInputProps) => {
  return (
    <>
      <label htmlFor={id}>{title}</label>
      <input id={id} type='text'  />
    </>
  );
};

export default TextInput;
