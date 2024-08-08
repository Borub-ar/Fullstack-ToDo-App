import TextInput from './TextInput';

import useCreateNewTask from '../../hooks/useCreateNewTask';

type CreateTaskPanelProps = {
  pickedDate: string | null;
};

const CreateTaskPanel = ({ pickedDate }: CreateTaskPanelProps) => {
  console.log(pickedDate);

  const createNewTask = () => {
    console.log('Create new task');
  };

  return (
    <form
      autoComplete='off'
      onSubmit={createNewTask}
      className='bg-slate-600 h-full rounded-md p-4 w-1/2 flex flex-col gap-4 border-2 border-cyan-50 border-solid'>
      <p className='font-bold text-2xl text-white'>Create New Task</p>

      <TextInput title='Task name' id='name' />
      <TextInput title='Description' id='description' />

      <button className='bg-white rounded-md p-3 font-bold mt-auto'>Create New Task</button>
    </form>
  );
};

export default CreateTaskPanel;
