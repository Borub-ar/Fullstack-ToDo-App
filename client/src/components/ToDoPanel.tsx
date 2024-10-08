import { useState } from 'react';

import useTask from '../hooks/useTasks';

import type { DatabaseTask } from '../types';

import Calendar from './Calendar/Calendar';
import IncomingTasks from './IncomingTasks/IncomingTasksPanel';
import CreateTaskPanel from './CreateTaskPanel/CreateTaskPanel';
import TasksPanel from './TasksPanel/TasksPanel';

const ToDoPanel = () => {
  const [pickedDate, setPickedDate] = useState<string | null>(null);
  const [pickedDateTasks, setPickedDateTasks] = useState<DatabaseTask[]>([]);

  const { tasks, getAllTasks } = useTask();

  const setDateData = (day: string, tasks: DatabaseTask[]) => {
    setPickedDate(day);
    setPickedDateTasks(tasks);
  };

  return (
    <div className='relative -top-20 self-center bg-slate-800 rounded-xl w-4/5 h-full flex'>
      <h1 className='absolute -top-12 text-4xl font-bold text-white'>ToDo</h1>

      <IncomingTasks />

      <div className='h-full grow p-5 overflow-hidden flex flex-col'>
        <Calendar tasks={tasks} setDateData={setDateData} />

        <div className='grid grid-cols-2 gap-4 h-full'>
          <CreateTaskPanel refreshData={getAllTasks} pickedDate={pickedDate} />
          <TasksPanel tasks={pickedDateTasks} />
        </div>
      </div>
    </div>
  );
};

export default ToDoPanel;
