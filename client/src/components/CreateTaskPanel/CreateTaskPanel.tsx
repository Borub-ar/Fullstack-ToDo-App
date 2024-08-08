import TextInput from './TextInput';

import useTask from '../../hooks/useTasks';

type CreateTaskPanelProps = {
  pickedDate: string | null;
};

const CreateTaskPanel = ({ pickedDate }: CreateTaskPanelProps) => {
  const { createNewTask } = useTask();

  const handleFormSubmit = (event: any) => {
    event.preventDefault();

    if (pickedDate === null) return;

    createNewTask({
      title: event.target.title.value,
      description: event.target.description.value,
      date: pickedDate,
    });
  };

  return (
    <form
      autoComplete='off'
      onSubmit={handleFormSubmit}
      className='bg-slate-600 h-full rounded-md p-4 w-1/2 flex flex-col gap-4 border-2 border-cyan-50 border-solid'>
      <p className='font-bold text-2xl text-white'>Create New Task</p>

      <TextInput title='Task title' id='title' />
      <TextInput title='Description' id='description' />

      <button className='bg-white rounded-md p-3 font-bold mt-auto'>Create New Task</button>
    </form>
  );
};

export default CreateTaskPanel;
