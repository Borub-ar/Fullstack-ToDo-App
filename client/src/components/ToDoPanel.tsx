import { useState } from 'react';

import Calendar from './Calendar/Calendar';
import IncomingTasks from './IncomingTasks/IncomingTasksPanel';
import CreateTaskPanel from './CreateTaskPanel/CreateTaskPanel';

const ToDoPanel = () => {
  const [pickedDate, setPickedDate] = useState<string | null>(null);

  const savePickedDay = (day: string) => {
    setPickedDate(day);
  };

  return (
    <div className='relative -top-20 self-center bg-slate-800 rounded-xl w-4/5 h-full flex'>
      <h1 className='absolute -top-12 text-4xl font-bold text-white'>ToDo</h1>

      <IncomingTasks />

      <div className='h-full grow p-5 overflow-hidden flex flex-col'>
        <Calendar savePickedDay={savePickedDay} />
        <CreateTaskPanel pickedDate={pickedDate} />
      </div>
    </div>
  );
};

export default ToDoPanel;
