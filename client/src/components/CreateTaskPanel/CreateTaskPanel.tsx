import { useRef } from 'react';

import TextInput from './TextInput';
import Overlay from '../Common/Overlay';

import useTask from '../../hooks/useTasks';

type CreateTaskPanelProps = {
  pickedDate: string | null;
  refreshData: () => void;
};

const CreateTaskPanel = ({ pickedDate, refreshData }: CreateTaskPanelProps) => {
  const { createNewTask } = useTask();

  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (pickedDate === null) return;

    const form = event.currentTarget;

    await createNewTask({
      title: form.title.value,
      description: form.description.value,
      date: pickedDate,
    });

    refreshData();
    clearInputsValue();
  };

  const clearInputsValue = () => {
    if (titleInputRef.current) titleInputRef.current.value = '';
    if (descriptionInputRef.current) descriptionInputRef.current.value = '';
  };

  return (
    <form
      autoComplete='off'
      onSubmit={handleFormSubmit}
      className='relative bg-slate-600 h-full rounded-md p-4 w-full flex flex-col gap-4 border-2 border-cyan-50 border-solid'>
      <h2 className='font-bold text-2xl text-white'>Create New Task</h2>

      <TextInput inputRef={titleInputRef} title='Task title' id='title' />
      <TextInput inputRef={descriptionInputRef} title='Description' id='description' />

      <button className='bg-white rounded-md p-3 font-bold mt-auto'>Create New Task</button>

      {!pickedDate && (
        <Overlay>
          <svg
            fill='#ffffff'
            height='93px'
            width='93px'
            version='1.1'
            id='Layer_1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 330 330'
            stroke='#ffffff'>
            <g id='SVGRepo_bgCarrier' strokeWidth='0' />

            <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />

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
        </Overlay>
      )}
    </form>
  );
};

export default CreateTaskPanel;
