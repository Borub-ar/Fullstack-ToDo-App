type TextInputProps = {
  title: string;
  id: string;
};

const TextInput = ({ title, id }: TextInputProps) => {
  return (
    <>
      <label htmlFor={id} className='font-bold text-white text-l -mb-4'>
        {title}
      </label>
      <input id={id} type='text' className='p-2 rounded-md' />
    </>
  );
};

export default TextInput;
