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
      className='relative bg-slate-600 h-full rounded-md p-4 w-full flex flex-col gap-4 border-2 border-cyan-50 border-solid'>
      <h2 className='font-bold text-2xl text-white'>Create New Task</h2>

      <TextInput title='Task title' id='title' />
      <TextInput title='Description' id='description' />

      <button className='bg-white rounded-md p-3 font-bold mt-auto'>Create New Task</button>

      {!pickedDate && (
        <>
          <div className='absolute flex flex-col inset-0 z-10 justify-center items-center bg-slate-900 bg-opacity-90'>
            <svg
              fill='#ffffff'
              height='93px'
              width='93px'
              version='1.1'
              id='Layer_1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 330 330'
              stroke='#ffffff'>
              <g id='SVGRepo_bgCarrier' stroke-width='0' />

              <g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round' />

              <g id='SVGRepo_iconCarrier'>
                {' '}
                <g id='XMLID_509_'>
                  {' '}
                  <path
                    id='XMLID_510_'
                    d='M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85 S80,38.131,80,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M180,234.986V255c0,8.284-6.716,15-15,15 s-15-6.716-15-15v-20.014c-6.068-4.565-10-11.824-10-19.986c0-13.785,11.215-25,25-25s25,11.215,25,25 C190,223.162,186.068,230.421,180,234.986z M110,85c0-30.327,24.673-55,55-55s55,24.673,55,55v45H110V85z'
                  />{' '}
                </g>{' '}
              </g>
            </svg>
            <p className='text-white font-bold text-xl mt-6'>PICK DATE FIRST</p>
          </div>
        </>
      )}
    </form>
  );
};

export default CreateTaskPanel;
