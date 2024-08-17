type TextInputProps = {
  title: string;
  id: string;
  inputRef: React.RefObject<HTMLInputElement>;
};

const TextInput = ({ title, id, inputRef }: TextInputProps) => {
  return (
    <>
      <label htmlFor={id} className='font-bold text-white text-l -mb-4'>
        {title}
      </label>

      <input id={id} type='text' ref={inputRef} className='p-2 rounded-md' />
    </>
  );
};

export default TextInput;
